const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const tokenCSS = readFileSync(join(__dirname, '..', 'token.css'));
const utilitiesCSS = readFileSync(join(__dirname, '..', 'dist', 'utilities.css'));
const styleCSS = readFileSync(join(__dirname, '..', 'dist', 'style.css'));


writeFileSync(join(__dirname, '..', 'dist', 'token.css'), tokenCSS);
writeFileSync(join(__dirname, '..', 'dist', 'ui.css'), tokenCSS + '\n' + utilitiesCSS + '\n' + styleCSS);

