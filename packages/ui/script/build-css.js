const { join } = require('path');
const { readFileSync, writeFileSync,  unlinkSync } = require('fs');

const dynamicUtilies = readFileSync(join(__dirname, '../global', 'utilities-dynamic.css'));
const variantUtilies = readFileSync(join(__dirname, '../global', 'utilities-variant.css'));
const staticUtilities = readFileSync(join(__dirname, '..', 'dist', 'static-utilities.css'));
const utilities = dynamicUtilies + '\n' + variantUtilies + '\n' + staticUtilities;

const variables = readFileSync(join(__dirname, '../global', 'variables.css'));
const styleCSS = readFileSync(join(__dirname, '..', 'dist', 'style.css'));


writeFileSync(join(__dirname, '..', 'dist', 'utilities.css'), utilities);

writeFileSync(join(__dirname, '..', 'dist', 'token.css'), variables);

writeFileSync(join(__dirname, '..', 'dist', 'ui.css'), variables + '\n' + utilities + '\n' + styleCSS);

unlinkSync(join(__dirname, '..', 'dist', 'static-utilities.css'));
