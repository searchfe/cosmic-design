import { staticUtilities as u } from '../ref/static';
import type { StaticUtility } from '../ref/interfaces';
import { tansitions } from './tansitions';
import { text } from './text';
import { behaviors } from './behavior';
import { borders } from './border';
import { interactivities } from './interactivity';
import { layouts } from './layout';
import { effects } from './effects';
import type { Config } from './type';

const defaultFilter = [
    /^(bg|overflow|pointer|resize|scroll|select|flow|items|content|self|place|cursor)-/,
    /^(block|inline|contents|hidden|visible|block|list-item|flex|grid|row|col|gap|justify|static|relative|absolute|float|clear)/,
    /^(rounded|font|leading|break|duration|delay|overflow|select|p|px|py|pt|pl|pb|pr|m|mx|my|mt|ml|mb|mr|w|h|align|break|whitespace)-/,
    /^(italic|not-italic|transition|ease|border|text)/,
];

export function staticUtilities(config: Config) {
    const rs: StaticUtility = {};
    const keys = Object.keys(u);
    keys.filter(key => {
        for (const reg of defaultFilter) {
            if (key.match(reg)) return true;
        }
        return false;
    }).forEach(key => {
        rs[key] = u[key];
    });
    const external: StaticUtility = {
        // https://windicss.org/utilities/behaviors.html#box-decoration-break
        ...interactivities(),
        ...borders(),
        ...text(config),
        ...tansitions(),
        ...behaviors(),
        ...layouts(config),
        ...effects(config),
    };
    return {
        ...rs,
        ...external,
    };
}
