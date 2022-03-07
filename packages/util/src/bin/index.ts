import { Command } from 'commander';
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import {exportUtilities} from './export-utilities';

const program = new Command();
// console.log(111, x);

program
    .option('-u, --utilities [utilities...]', 'export-utilities' , resolve(process.cwd(), './utilities.css'))
    .parse();

const options = program.opts();
if (options.utilities && options.utilities !== true) {
    writeFileSync(options.utilities, exportUtilities());
}
