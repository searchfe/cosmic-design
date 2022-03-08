import type { StaticUtility } from '../ref/interfaces';

export const layouts: StaticUtility = {
    'w-auto': {'utility': {'width': 'auto' }, 'meta': {'group': 'width', 'order': 1}},
    'w-px': {'utility': {'width': '1px' }, 'meta': {'group': 'width', 'order': 2}},
    'w-full': {'utility': {'width': '100%' }, 'meta': {'group': 'width', 'order': 3}},
    'w-screen': {'utility': {'width': '100vw' }, 'meta': {'group': 'width', 'order': 4}},
    'w-min': {'utility': {'width': 'min-content' }, 'meta': {'group': 'width', 'order': 5}},
    'w-max': {'utility': {'width': 'max-content' }, 'meta': {'group': 'width', 'order': 6}},
    'w-1\\/2': {'utility': {'width': '50%' }, 'meta': {'group': 'width', 'order': 7}},
    
    'h-auto': {'utility': {'height': 'auto' }, 'meta': {'group': 'height', 'order': 1}},
    'h-px': {'utility': {'height': '1px' }, 'meta': {'group': 'height', 'order': 2}},
    'h-full': {'utility': {'height': '100%' }, 'meta': {'group': 'height', 'order': 3}},
    'h-screen': {'utility': {'height': '100vw' }, 'meta': {'group': 'height', 'order': 4}},
    'h-min': {'utility': {'height': 'min-content' }, 'meta': {'group': 'height', 'order': 5}},
    'h-max': {'utility': {'height': 'max-content' }, 'meta': {'group': 'height', 'order': 6}},
    'h-1\\/2': {'utility': {'height': '50%' }, 'meta': {'group': 'height', 'order': 7}},

    'p-0': {'utility': {'padding': '0' }, 'meta': {'group': 'padding', 'order': 1}},
    'px-0': {'utility': {'padding-left': '0', 'padding-right': '0' }, 'meta': {'group': 'padding', 'order': 2}},
    'py-0': {'utility': {'padding-top': '0', 'padding-bottom': '0' }, 'meta': {'group': 'padding', 'order': 3}},
    'pl-0': {'utility': {'padding-left': '0' }, 'meta': {'group': 'padding', 'order': 4}},
    'pr-0': {'utility': {'padding-right': '0' }, 'meta': {'group': 'padding', 'order': 5}},
    'pt-0': {'utility': {'padding-top': '0' }, 'meta': {'group': 'padding', 'order': 6}},
    'pb-0': {'utility': {'padding-bottom': '0' }, 'meta': {'group': 'padding', 'order': 7}},

    'm-0': {'utility': {'margin': '0' }, 'meta': {'group': 'margin', 'order': 1}},
    'mx-0': {'utility': {'margin-left': '0', 'margin-right': '0' }, 'meta': {'group': 'margin', 'order': 2}},
    'my-0': {'utility': {'margin-top': '0', 'margin-bottom': '0' }, 'meta': {'group': 'margin', 'order': 3}},
    'ml-0': {'utility': {'margin-left': '0' }, 'meta': {'group': 'margin', 'order': 4}},
    'mr-0': {'utility': {'margin-right': '0' }, 'meta': {'group': 'margin', 'order': 5}},
    'mt-0': {'utility': {'margin-top': '0' }, 'meta': {'group': 'margin', 'order': 6}},
    'mb-0': {'utility': {'margin-bottom': '0' }, 'meta': {'group': 'margin', 'order': 7}},
};