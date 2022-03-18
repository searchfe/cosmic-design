import type { StaticUtility } from '../ref/interfaces';

export const behaviors = () => {
    return {
        'overflow-auto': { utility: { overflow: 'auto' }, meta: { group: 'overflow', order: 1 } },
        'overflow-hidden': { utility: { overflow: 'hidden' }, meta: { group: 'overflow', order: 2 } },
        'overflow-visible': { utility: { overflow: 'visible' }, meta: { group: 'overflow', order: 3 } },
        'overflow-scroll': { utility: { overflow: 'scroll' }, meta: { group: 'overflow', order: 4 } },
        'overflow-x-auto': { utility: { overflow: 'x-auto' }, meta: { group: 'overflow', order: 5 } },
        'overflow-x-hidden': { utility: { overflow: 'x-hidden' }, meta: { group: 'overflow', order: 6 } },
        'overflow-x-visible': { utility: { overflow: 'x-visible' }, meta: { group: 'overflow', order: 7 } },
        'overflow-x-scroll': { utility: { overflow: 'x-scroll' }, meta: { group: 'overflow', order: 8 } },
        'overflow-y-auto': { utility: { overflow: 'y-auto' }, meta: { group: 'overflow', order: 9 } },
        'overflow-y-hidden': { utility: { overflow: 'y-hidden' }, meta: { group: 'overflow', order: 10 } },
        'overflow-y-visible': { utility: { overflow: 'y-visible' }, meta: { group: 'overflow', order: 11 } },
        'overflow-y-scroll': { utility: { overflow: 'y-scroll' }, meta: { group: 'overflow', order: 12 } },
    } as StaticUtility;
};
