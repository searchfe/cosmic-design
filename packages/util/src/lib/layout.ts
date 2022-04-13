import type { StaticUtility } from '../ref/interfaces';
import type { Config } from './type';

import { genUtility } from './util';

export const layouts = (config: Config) => {
    const spacing = config.theme?.spacing || {};
    // if (spacing) {
    //     ...genUtility('p', 'padding', 'padding', spacing, 2);
    // }
    return {
        'w-auto': { utility: { width: 'auto' }, meta: { group: 'width', order: 1 } },
        'w-px': { utility: { width: '1px' }, meta: { group: 'width', order: 2 } },
        'w-full': { utility: { width: '100%' }, meta: { group: 'width', order: 3 } },
        'w-screen': { utility: { width: '100vw' }, meta: { group: 'width', order: 4 } },
        'w-min': { utility: { width: 'min-content' }, meta: { group: 'width', order: 5 } },
        'w-max': { utility: { width: 'max-content' }, meta: { group: 'width', order: 6 } },
        'w-1\\/2': { utility: { width: '50%' }, meta: { group: 'width', order: 7 } },
        ...genUtility('w', 'width', 'Width', spacing, 8),
        ...genUtility('w', 'width', 'Width', config.theme?.width || {}, 100),
        ...genUtility('min-w', 'min-width', 'MinWidth', spacing, 1),
        ...genUtility('min-w', 'min-width', 'MinWidth', config.theme?.minWidth || {}, 100),
        ...genUtility('max-w', 'max-width', 'MaxWidth', spacing, 1),
        ...genUtility('max-w', 'max-width', 'MaxWidth', config.theme?.maxWidth || {}, 100),

        'h-auto': { utility: { height: 'auto' }, meta: { group: 'height', order: 1 } },
        'h-px': { utility: { height: '1px' }, meta: { group: 'height', order: 2 } },
        'h-full': { utility: { height: '100%' }, meta: { group: 'height', order: 3 } },
        'h-screen': { utility: { height: '100vw' }, meta: { group: 'height', order: 4 } },
        'h-min': { utility: { height: 'min-content' }, meta: { group: 'height', order: 5 } },
        'h-max': { utility: { height: 'max-content' }, meta: { group: 'height', order: 6 } },
        'h-1\\/2': { utility: { height: '50%' }, meta: { group: 'height', order: 7 } },
        ...genUtility('h', 'height', 'Height', spacing, 8),
        ...genUtility('h', 'height', 'Height', config.theme?.height || {}, 100),
        ...genUtility('min-h', 'min-height', 'MinHeight', spacing, 1),
        ...genUtility('min-h', 'min-height', 'MinHeight', config.theme?.minWidth || {}, 100),
        ...genUtility('max-h', 'max-height', 'MaxHeight', spacing, 1),
        ...genUtility('max-h', 'max-height', 'MaxHeight', config.theme?.maxHeight || {}, 100),

        ...genUtility('p', 'padding', 'padding', spacing),
        ...genUtility('px', ['padding-left', 'padding-right'], 'padding X', spacing),
        ...genUtility('py', ['padding-top', 'padding-bottom'], 'padding Y', spacing),
        ...genUtility('pl', 'padding-left', 'padding Left', spacing),
        ...genUtility('pr', 'padding-right', 'padding Right', spacing),
        ...genUtility('pt', 'padding-top', 'padding Top', spacing),
        ...genUtility('pb', 'padding-bottom', 'padding Bottom', spacing),

        ...genUtility('m', 'margin', 'margin', spacing),
        ...genUtility('mx', ['margin-left', 'margin-right'], 'margin X', spacing),
        ...genUtility('my', ['margin-top', 'margin-bottom'], 'margin Y', spacing),
        ...genUtility('ml', 'margin-left', 'margin Left', spacing),
        ...genUtility('mr', 'margin-right', 'margin Right', spacing),
        ...genUtility('mt', 'margin-top', 'margin Top', spacing),
        ...genUtility('mb', 'margin-bottom', 'margin Bottom', spacing),


        'flex-wrap': { 'utility': { 'flex-wrap': 'wrap' }, meta: { group: 'Flex Wrap', order: 1 } },
        'flex-wrap-reverse': { 'utility': { 'flex-wrap': 'reverse' }, meta: { group: 'Flex Wrap', order: 2 } },
        'flex-nowrap': { 'utility': { 'flex-wrap': 'nowrap' }, meta: { group: 'Flex Wrap', order: 3 } },

        'flex-shrink-0': { 'utility': { 'flex-shrink': '0' }, meta: { group: 'Flex Shrink', order: 1 } },
        'flex-shrink': { 'utility': { 'flex-shrink': '1' }, meta: { group: 'Flex Shrink', order: 2 } },

        'flex-grow-0': { 'utility': { 'flex-grow': '0' }, meta: { group: 'Flex Grow', order: 1 } },
        'flex-grow': { 'utility': { 'flex-grow': '1' }, meta: { group: 'Flex Grow', order: 2 } },

        'flex-1': { 'utility': { 'flex': '1 1 0%' }, meta: { group: 'Flex Stretch', order: 1 } },
        'flex-auto': { 'utility': { 'flex': '1 1 auto' }, meta: { group: 'Flex Stretch', order: 2 } },
        'flex-initial': { 'utility': { 'flex': '0 1 auto' }, meta: { group: 'Flex Stretch', order: 3 } },
        'flex-none': { 'utility': { 'flex': 'none' }, meta: { group: 'Flex Stretch', order: 4 } },
    } as StaticUtility;
};
