import type { StaticUtility } from '../ref/interfaces';

export const tansitions: StaticUtility = {
    'transition': {'utility': {
        'transition-property': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    }, 'meta': {'group': 'transitionProperty', 'order': 1}},
    'transition-all': {'utility': {
        'transition-property': 'all',
    }, 'meta': {'group': 'transitionProperty', 'order': 2}},
    'transition-colors': {'utility': {
        'transition-property': 'background-color, border-color, color, fill, stroke',
    }, 'meta': {'group': 'transitionProperty', 'order': 3}},
    'transition-opacity': {'utility': {
        'transition-property': 'opacity',
    }, 'meta': {'group': 'transitionProperty', 'order': 4}},
    'transition-shadow': {'utility': {
        'transition-property': 'box-shadow',
    }, 'meta': {'group': 'transitionProperty', 'order': 5}},
    'transition-transform': {'utility': {
        'transition-property': 'transform;',
    }, 'meta': {'group': 'transitionProperty', 'order': 6}},
    'transition-none': {'utility': {
        'transition-property': 'none',
    }, 'meta': {'group': 'transitionProperty', 'order': 7}},

    'ease-linear': {'utility': {'transition-timing-function': 'linear' }, 'meta': {'group': 'transitionTimingFunction', 'order': 1}},
    'ease-in': {'utility': {'transition-timing-function': 'cubic-bezier(0.4, 0, 1, 1)' }, 'meta': {'group': 'transitionTimingFunction', 'order': 2}},
    'ease-out': {'utility': {'transition-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' }, 'meta': {'group': 'transitionTimingFunction', 'order': 3}},
    'ease-in-out': {'utility': {'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)' }, 'meta': {'group': 'transitionTimingFunction', 'order': 4}},
    ...gen('delay', 'transitionDelay'),
    ...gen('duration', 'transitionDuration'),
};

function gen(type: string, title: string) {
    const rs: StaticUtility = {};
    const ipt = [0, 50, 75, 100, 150, 200, 300, 400, 500, 600, 700, 1000];
    for(const index of ipt) {
        rs[`${type}-${index}`] = JSON.parse(`{"utility": {"transition-${type}": "${index}ms"}, "meta": {"group": "${title}", "order": ${index}}}`);
    }
    return rs;
}