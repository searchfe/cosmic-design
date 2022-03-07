import { staticUtilities as u } from '../ref/static';
import type{ StaticUtility } from '../ref/interfaces';

const defaultFilter = [
    /^(bg|overflow|pointer|resize|scroll|select|flow|items|content|self|place|cursor)-/,
    /^(block|inline|contents|hidden|visible|block|list-item|flex|grid|row|col|gap|justify|static|float|clear)/,
];

const external: StaticUtility = {
    // https://windicss.org/utilities/behaviors.html#box-decoration-break
    'cursor-auto': {'utility': {'cursor': 'auto' }, 'meta': {'group': 'cursor', 'order': 1}},
    'cursor-default': {'utility': {'cursor': 'default' }, 'meta': {'group': 'cursor', 'order': 2}},
    'cursor-pointer': {'utility': {'cursor': 'pointer' }, 'meta': {'group': 'cursor', 'order': 3}},
    'cursor-wait': {'utility': {'cursor': 'wait' }, 'meta': {'group': 'cursor', 'order': 4}},
    'cursor-text': {'utility': {'cursor': 'text' }, 'meta': {'group': 'cursor', 'order': 5}},
    'cursor-move': {'utility': {'cursor': 'move' }, 'meta': {'group': 'cursor', 'order': 6}},
    'cursor-help': {'utility': {'cursor': 'help' }, 'meta': {'group': 'cursor', 'order': 7}},
    'cursor-not-allowed': {'utility': {'cursor': 'not-allowed' }, 'meta': {'group': 'cursor', 'order': 8}},
};

export function staticUtilities(filters = defaultFilter, utilities = { ...u,...external}) {
    const rs: StaticUtility = {};
    const keys = Object.keys(utilities);
    keys.filter(key => {
        for(const reg of filters) {
            if(key.match(reg)) return true;
        }
        return false;
    }).forEach(key => {
        rs[key] = utilities[key];
    });
    return rs;
}