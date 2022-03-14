import type { StaticUtility } from '../ref/interfaces';

export const text = () => {
    return {
        italic: { utility: { 'font-style': 'italic' }, meta: { group: 'fontStyle', order: 1 } },
        'not-italic': { utility: { 'font-style': 'normal' }, meta: { group: 'fontStyle', order: 2 } },

        'font-thin': { utility: { 'font-weight': '100' }, meta: { group: 'fontWeight', order: 1 } },
        'font-extralight': { utility: { 'font-weight': '200' }, meta: { group: 'fontWeight', order: 2 } },
        'font-light': { utility: { 'font-weight': '300' }, meta: { group: 'fontWeight', order: 3 } },
        'font-normal': { utility: { 'font-weight': '400' }, meta: { group: 'fontWeight', order: 4 } },
        'font-medium': { utility: { 'font-weight': '500' }, meta: { group: 'fontWeight', order: 5 } },
        'font-semibold': { utility: { 'font-weight': '600' }, meta: { group: 'fontWeight', order: 6 } },
        'font-bold': { utility: { 'font-weight': '700' }, meta: { group: 'fontWeight', order: 7 } },
        'font-extrabold': { utility: { 'font-weight': '800' }, meta: { group: 'fontWeight', order: 8 } },
        'font-black': { utility: { 'font-weight': '900' }, meta: { group: 'fontWeight', order: 9 } },

        'leading-none': { utility: { 'line-height': '1' }, meta: { group: 'lineHeight', order: 1 } },
        'leading-0': { utility: { 'line-height': '0' }, meta: { group: 'lineHeight', order: 2 } },

        'break-normal ': {
            utility: { 'word-break': 'normal', 'overflow-wrap': 'normal' },
            meta: { group: 'wordBreak', order: 1 },
        },
        'break-words ': { utility: { 'overflow-wrap': 'break-word' }, meta: { group: 'wordBreak', order: 2 } },
        'break-all ': { utility: { 'word-break': 'break-all' }, meta: { group: 'wordBreak', order: 3 } },
    } as StaticUtility;
};
