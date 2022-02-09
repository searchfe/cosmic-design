import type { Node } from 'typescript';

import { SyntaxKind, default as ts, factory } from 'typescript';
import posthtml from 'posthtml';
import kebabcase from 'lodash.kebabcase';


const ph = posthtml([
    require('posthtml-custom-elements')(),
]);

function traverseSan(node: Node, visit) {
    ts.forEachChild(node, function(n) {
        switch (n.kind) {
        case SyntaxKind.ClassDeclaration:
            traverseSan(n, visit);
            break;
        case SyntaxKind.PropertyDeclaration:
            if (n?.name?.escapedText === 'template') {
                visit(n?.initializer?.text);
            }
            break;
        case SyntaxKind.ImportDeclaration:
            let importName = n?.importClause?.name?.escapedText;
            if (importName) {
                importName = kebabcase(importName);
            }
            const fromName = n?.moduleSpecifier?.text;
            const namedImports = n?.importClause?.namedBindings?.elements || [];
            namedImports.forEach(element => {
                visit(
                    null,
                    { import: kebabcase(element?.name?.escapedText), from: fromName, isNamed: true },
                ); 
            });
            if (importName && fromName) {
                visit(null, { import: importName, from: fromName });
            }
            break;
        }
    });
}

export function cStyle(options) {
    options = options || {};
    options.target = options.target || 'c-style';
    options.propName = options.propName || 'styles';
    options.basePath = options.basePath || 'cosmic-design';

    const cStyleReg = new RegExp(options.target);

    return {
        transform(code, id) {
            let tsAST = ts.createSourceFile(
                id,
                code,
                ts.ScriptTarget.ES2015, // TODO: load from project or using config
            );
            let templateContent = '';
            let imports = {};
            let namedImports = {};
            traverseSan(tsAST, function(template, importDeclaration) {
                if (template) {
                    templateContent = template;
                }
                if (importDeclaration) {
                    const { import: importName, from: fromName, isNamed } = importDeclaration;
                    if (isNamed) {
                        namedImports[importName] = fromName;
                    } else {

                        imports[importName] = fromName;
                    }
                }
            });
            if (!(templateContent && cStyleReg.test(templateContent))
                || (Object.keys(imports).length === 0 && Object.keys(namedImports).length === 0)
            ) {
                return;
            }

            let count = 0;
            /**
             * cStyle import declarations to generate
             * key: c-style content .i.e icon, value: auto-generated module name .i.e _cssModlue_1
             */
            const importDeclarations: Record<string, string> = {};
            return ph.process(templateContent).then(result => {
                // modify template, collect importDeclarations
                result.tree.match({ attrs: {[options.target]: /\S/} }, node => {
                    // initial c-style import module specifier from template node c-style attr value
                    let importModuleSpecifier = node.attrs[options.target];
                    // default(including './@' prefixed) c-style attr only add '.module.css'
                    if(!/.module.css$/.test(importModuleSpecifier)) {
                        importModuleSpecifier += '.module.css';
                    }
                    if (/^[-]/.test(importModuleSpecifier) && imports[node.tag]) {
                        // c-style="-icon" format
                        importModuleSpecifier = `${imports[node.tag].replace(/\.\w+$/, '')}${importModuleSpecifier}`;
                        // TODO: throw error -icon format has no imports
                    } else if (!/^[./@]/.test(importModuleSpecifier)) {
                        // not ./xxx.module.css, /xxx, @scope.xx.css
                        if (namedImports[node.tag] && importModuleSpecifier.indexOf(node.tag) !== 0) {
                            importModuleSpecifier = `${node.tag}-${importModuleSpecifier}`;
                        }
                        importModuleSpecifier = `${options.basePath}/${importModuleSpecifier}`;
                    }
                    if (!importDeclarations[importModuleSpecifier]){
                        importDeclarations[importModuleSpecifier] = `_cssModlue_${++count}`;
                    }
                    node.attrs[options.propName] = importDeclarations[importModuleSpecifier];
                    delete node.attrs[options.target];
                    return node;
                });
                return result;
            }).then(res => {
                // transform component ts file AST
                let newAst = ts.transform(tsAST, [context => {
                    function visit(n: Node) {
                        if (n.kind === SyntaxKind.PropertyDeclaration && n?.name?.escapedText === 'template') {
                            // update file template
                            const newNode = factory.createPropertyDeclaration(
                                [],
                                [factory.createModifier(SyntaxKind.StaticKeyword)],
                                'template',
                                undefined,
                                undefined,
                                factory.createNoSubstitutionTemplateLiteral(res.html),
                            );
                            return newNode;
                        }
                        return ts.visitEachChild(n, visit, context);
                    }
                    return rootNode => {
                        return ts.visitNode(rootNode, visit);
                    };
                }]).transformed[0];
                
                const importLists = Object.keys(importDeclarations).map(moduleSpecifier => {
                    return factory.createImportDeclaration(
                        undefined,
                        undefined,
                        ts.createImportClause(
                            ts.createIdentifier(importDeclarations[moduleSpecifier]),
                            undefined,
                        ),
                        ts.createLiteral(moduleSpecifier),
                    );
                });
                if (importLists.length) {
                    newAst = factory.updateSourceFile(newAst, [
                        ...importLists,
                        ...newAst.statements,
                    ]);
                }
                // use printer to generate new AST's text
                const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
                const result = printer.printFile(newAst);
                return {
                    code: result,
                };
            });
        },
    };
}
