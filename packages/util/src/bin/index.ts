import { Command } from 'commander';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { utilitiesToCss, staticUtilities } from '../lib';

const program = new Command();
// console.log(111, x);

program
    .option('-u, --utilities [utilities]', 'export-utilities' , './utilities.css')
    .parse();

const options = program.opts();
if (options.utilities && options.utilities !== true) {
    let path = options.utilities;
    if (path.match(/^\.\//)) {
        path = resolve(process.cwd(), path);
    }
    writeFileSync(path, utilitiesToCss(staticUtilities()));
}
