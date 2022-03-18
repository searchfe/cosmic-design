const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { minify } = require('csso');

const utilities = readFileSync(join(__dirname, '..', 'dist', 'utilities-unminify.css')).toString();
const variables = readFileSync(join(__dirname, '../css', 'variables.css')).toString();

const variantClasses = readFileSync(join(__dirname, '../css', 'variant-classes.css')).toString();
const styleCSS = readFileSync(join(__dirname, '..', 'dist', 'style.css')).toString();
const newCSS = variantClasses + styleCSS;

writeFileSync(join(__dirname, '..', 'dist', 'utilities.css'), minify(utilities).css);
writeFileSync(join(__dirname, '..', 'dist', 'variables.css'), minify(variables).css);
writeFileSync(join(__dirname, '..', 'dist', 'ui.css'), minify(variables + '\n' + utilities + '\n' + newCSS).css);
writeFileSync(join(__dirname, '..', 'dist', 'style.css'), minify(newCSS).css);
writeFileSync(join(__dirname, '..', 'dist', 'component-classes.css'), minify(variantClasses).css);
writeFileSync(join(__dirname, '..', 'dist', 'component-styles.css'), minify(styleCSS).css);


const darkVariables = readFileSync(join(__dirname, '../css', 'variables-dark.css')).toString();
writeFileSync(join(__dirname, '..', 'dist', 'variables-dark.css'), minify(darkVariables).css);
