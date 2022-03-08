import type { StaticUtility } from '../ref/interfaces';

export const borders: StaticUtility = {
    'rounded-none': {'utility': {'border-radius': '0px' }, 'meta': {'group': 'borderRadius', 'order': 1}},
    'rounded-1\\/2': {'utility': {'border-radius': '50%' }, 'meta': {'group': 'borderRadius', 'order': 2}},
    'rounded-full': {'utility': {'border-radius': '9999px' }, 'meta': {'group': 'borderRadius', 'order': 3}},

    'border': {'utility': {'border-width': '1px' }, 'meta': {'group': 'borderWidth', 'order': 1}},
    'border-0': {'utility': {'border-width': '0px' }, 'meta': {'group': 'borderWidth', 'order': 2}},

    'border-transparent': {'utility': {'border-color': 'transparent' }, 'meta': {'group': 'borderColor', 'order': 1}},
    'border-current': {'utility': {'border-color': 'currentColor' }, 'meta': {'group': 'borderColor', 'order': 2}},

    'border-solid': {'utility': {'border-style': 'solid' }, 'meta': {'group': 'borderStyle', 'order': 1}},
    'border-dashed': {'utility': {'border-style': 'dashed' }, 'meta': {'group': 'borderStyle', 'order': 2}},
    'border-dotted': {'utility': {'border-style': 'dotted' }, 'meta': {'group': 'borderStyle', 'order': 3}},
    'border-double': {'utility': {'border-style': 'double' }, 'meta': {'group': 'borderStyle', 'order': 4}},
    'border-none': {'utility': {'border-style': 'none' }, 'meta': {'group': 'borderStyle', 'order': 5}},


};