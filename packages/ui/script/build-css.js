const { join } = require('path');
const { readFileSync, writeFileSync,  unlinkSync } = require('fs');
const { minify } = require('csso');

const dynamicUtilies = readFileSync(join(__dirname, '../css', 'utilities-dynamic.css')).toString();
const staticUtilities = readFileSync(join(__dirname, '..', 'dist', 'static-utilities.css')).toString();
const utilities = dynamicUtilies + '\n' + '\n' + staticUtilities;

const variables = readFileSync(join(__dirname, '../css', 'variables.css')).toString();

const styleCSS = readFileSync(join(__dirname, '..', 'dist', 'style.css')).toString();
const variantUtilies = readFileSync(join(__dirname, '../css', 'utilities-variant.css')).toString();
const newCSS = variantUtilies + styleCSS;

writeFileSync(join(__dirname, '..', 'dist', 'utilities.css'), minify(utilities).css);

writeFileSync(join(__dirname, '..', 'dist', 'token.css'), minify(variables).css);

writeFileSync(join(__dirname, '..', 'dist', 'ui.css'), minify(variables + '\n' + utilities + '\n' + newCSS).css);

writeFileSync(join(__dirname, '..', 'dist', 'style.css'), minify(newCSS).css);

unlinkSync(join(__dirname, '..', 'dist', 'static-utilities.css'));
