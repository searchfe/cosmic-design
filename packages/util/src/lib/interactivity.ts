import type { StaticUtility } from '../ref/interfaces';

export const interactivities = () => {
    return {
        'cursor-auto': { utility: { cursor: 'auto' }, meta: { group: 'cursor', order: 1 } },
        'cursor-default': { utility: { cursor: 'default' }, meta: { group: 'cursor', order: 2 } },
        'cursor-pointer': { utility: { cursor: 'pointer' }, meta: { group: 'cursor', order: 3 } },
        'cursor-wait': { utility: { cursor: 'wait' }, meta: { group: 'cursor', order: 4 } },
        'cursor-text': { utility: { cursor: 'text' }, meta: { group: 'cursor', order: 5 } },
        'cursor-move': { utility: { cursor: 'move' }, meta: { group: 'cursor', order: 6 } },
        'cursor-help': { utility: { cursor: 'help' }, meta: { group: 'cursor', order: 7 } },
        'cursor-not-allowed': { utility: { cursor: 'not-allowed' }, meta: { group: 'cursor', order: 8 } },

        'select-none': { utility: { 'user-select': 'none' }, meta: { group: 'userSelect', order: 1 } },
        'select-text': { utility: { 'user-select': 'text' }, meta: { group: 'userSelect', order: 2 } },
        'select-all': { utility: { 'user-select': 'all' }, meta: { group: 'userSelect', order: 3 } },
        'select-auto': { utility: { 'user-select': 'auto' }, meta: { group: 'userSelect', order: 4 } },
    } as StaticUtility;
};
