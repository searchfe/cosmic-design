const { join } = require('path');
const { readFileSync, writeFileSync,  unlinkSync } = require('fs');
const { minify } = require('csso');

const dynamicUtilies = readFileSync(join(__dirname, '../css', 'utilities.css')).toString();
const staticUtilities = readFileSync(join(__dirname, '..', 'dist', 'static-utilities.css')).toString();
const utilities = dynamicUtilies + '\n' + '\n' + staticUtilities;

const variables = readFileSync(join(__dirname, '../css', 'variables.css')).toString();

const styleCSS = readFileSync(join(__dirname, '..', 'dist', 'style.css')).toString();
const variantClasses = readFileSync(join(__dirname, '../css', 'variant-classes.css')).toString();
const newCSS = variantClasses + styleCSS;

writeFileSync(join(__dirname, '..', 'dist', 'utilities.css'), minify(utilities).css);

writeFileSync(join(__dirname, '..', 'dist', 'variables.css'), minify(variables).css);

writeFileSync(join(__dirname, '..', 'dist', 'ui.css'), minify(variables + '\n' + utilities + '\n' + newCSS).css);

writeFileSync(join(__dirname, '..', 'dist', 'style.css'), minify(newCSS).css);

unlinkSync(join(__dirname, '..', 'dist', 'static-utilities.css'));

const darkVariables = readFileSync(join(__dirname, '../css', 'variables-dark.css')).toString();

writeFileSync(join(__dirname, '..', 'dist', 'variables-dark.css'), minify(darkVariables).css);