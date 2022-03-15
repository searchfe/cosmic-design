import type { StaticUtility } from '../ref/interfaces';
import type { Config, SimpleConfig, FontConf } from './type';
import { genUtility } from './util';

export const text = (config: Config) => {
    const c = config.theme?.fontSize || {};
    const fontSizeConf: SimpleConfig = {};
    const lineHeightConf: SimpleConfig = {};
    Object.keys(c).map(key => {
        if (typeof c[key] === 'string') {
            fontSizeConf[key] = c[key] as string;
        } else if (Array.isArray(c[key]) && c[key][0] !== undefined) {
            fontSizeConf[key] = c[key][0];
            if (typeof c[key][1] === 'string') {
                lineHeightConf[key] = c[key][1] as string;
            } else if ((c[key][1] as FontConf).fontSize) {
                lineHeightConf[key] = (c[key][1] as FontConf).fontSize;
            }
        }
    });
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

        underline: { utility: { 'text-decoration': 'underline' }, meta: { group: 'textDecoration', order: 1 } },
        'line-through': { utility: { 'text-decoration': 'line-through' }, meta: { group: 'textDecoration', order: 2 } },
        'no-underline': { utility: { 'text-decoration': 'none' }, meta: { group: 'textDecoration', order: 3 } },

        'break-normal ': {
            utility: { 'word-break': 'normal', 'overflow-wrap': 'normal' },
            meta: { group: 'wordBreak', order: 1 },
        },
        'break-words ': { utility: { 'overflow-wrap': 'break-word' }, meta: { group: 'wordBreak', order: 2 } },
        'break-all ': { utility: { 'word-break': 'break-all' }, meta: { group: 'wordBreak', order: 3 } },
        ...genUtility('text', 'font-size', 'fontSize', fontSizeConf, 1),
        ...genUtility('leading', 'line-height', 'lineHeight', lineHeightConf, 1),
    } as StaticUtility;
};
