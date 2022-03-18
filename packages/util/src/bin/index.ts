import { Command } from 'commander';
import { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { utilitiesToCss, staticUtilities } from '../lib';

const program = new Command();
// console.log(111, x);

program
    .option('-c, --config [config]', 'config')
    .option('-u, --utilities [utilities]', 'export-utilities', './utilities.css')
    .parse();

let outputPath: string;
const options = program.opts();
if (options.utilities && options.utilities !== true) {
    outputPath = options.utilities;
    if (outputPath.match(/^\.\//)) {
        outputPath = resolve(process.cwd(), outputPath);
    }
} else {
    process.exit();
}

let configFile;
if (options.config && options.config !== true) {
    configFile = options.config;
    if (configFile.match(/^\.\//)) {
        configFile = resolve(process.cwd(), configFile);
    }
}
if (!configFile) {
    if (existsSync(resolve(process.cwd(), './ui.config.js'))) {
        configFile = resolve(process.cwd(), './ui.config.js');
    } else if (existsSync(resolve(process.cwd(), './windi.config.js'))) {
        configFile = resolve(process.cwd(), './windi.config.js');
    } else if (existsSync(resolve(process.cwd(), './tailwind.config.js'))) {
        configFile = resolve(process.cwd(), './tailwind.config.js');
    } else {
        configFile = 'cosmic-util/ui.config.js';
    }
}
import(configFile).then(module => {
    writeFileSync(outputPath, utilitiesToCss(staticUtilities(module.default || {})));
});
