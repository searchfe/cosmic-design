import type { StaticUtility } from '../ref/interfaces';
import type { Config, SpacingConfig } from './type';

export const layouts = (config: Config) => {
    const spacing = config.theme?.extend?.spacing || {};
    // if (spacing) {
    //     ...genSpacing('p', 'padding', 'padding', spacing, 2);
    // }
    return {
        'w-auto': { utility: { width: 'auto' }, meta: { group: 'width', order: 1 } },
        'w-px': { utility: { width: '1px' }, meta: { group: 'width', order: 2 } },
        'w-full': { utility: { width: '100%' }, meta: { group: 'width', order: 3 } },
        'w-screen': { utility: { width: '100vw' }, meta: { group: 'width', order: 4 } },
        'w-min': { utility: { width: 'min-content' }, meta: { group: 'width', order: 5 } },
        'w-max': { utility: { width: 'max-content' }, meta: { group: 'width', order: 6 } },
        'w-1\\/2': { utility: { width: '50%' }, meta: { group: 'width', order: 7 } },
        ...genSpacing('w', 'width', 'Width', spacing, 8),

        'h-auto': { utility: { height: 'auto' }, meta: { group: 'height', order: 1 } },
        'h-px': { utility: { height: '1px' }, meta: { group: 'height', order: 2 } },
        'h-full': { utility: { height: '100%' }, meta: { group: 'height', order: 3 } },
        'h-screen': { utility: { height: '100vw' }, meta: { group: 'height', order: 4 } },
        'h-min': { utility: { height: 'min-content' }, meta: { group: 'height', order: 5 } },
        'h-max': { utility: { height: 'max-content' }, meta: { group: 'height', order: 6 } },
        'h-1\\/2': { utility: { height: '50%' }, meta: { group: 'height', order: 7 } },
        ...genSpacing('h', 'height', 'Height', spacing, 8),

        ...genSpacing('p', 'padding', 'padding', spacing),
        ...genSpacing('px', ['padding-left', 'padding-right'], 'padding X', spacing),
        ...genSpacing('py', ['padding-top', 'padding-bottom'], 'padding Y', spacing),
        ...genSpacing('pl', 'padding-left', 'padding Left', spacing),
        ...genSpacing('pr', 'padding-right', 'padding Right', spacing),
        ...genSpacing('pt', 'padding-top', 'padding Top', spacing),
        ...genSpacing('pb', 'padding-bottom', 'padding Bottom', spacing),

        ...genSpacing('m', 'margin', 'margin', spacing),
        ...genSpacing('mx', ['margin-left', 'margin-right'], 'margin X', spacing),
        ...genSpacing('my', ['margin-top', 'margin-bottom'], 'margin Y', spacing),
        ...genSpacing('ml', 'margin-left', 'margin Left', spacing),
        ...genSpacing('mr', 'margin-right', 'margin Right', spacing),
        ...genSpacing('mt', 'margin-top', 'margin Top', spacing),
        ...genSpacing('mb', 'margin-bottom', 'margin Bottom', spacing),
    } as StaticUtility;
};

function genSpacing(prefix: string, props: string | string[], groupName: string, conf: SpacingConfig, idx = 1) {
    const rs: StaticUtility = {};
    Object.keys(conf).forEach(key => {
        const val = conf[key];
        const p = Array.isArray(props) ? props : [props];
        const utility: any = {};
        for (const prop of p) {
            utility[prop] = val;
        }
        rs[`${prefix}-${key}`] = {
            utility,
            meta: { group: groupName, order: idx },
        };
        idx++;
    });
    return rs;
}
