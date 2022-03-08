import { defineComponent, h, type PropType } from "vue";
import _styles from 'cosmic-design/space.module.css';

type Align =
    | 'start'
    | 'end'
    | 'center'
    | 'baseline'

type Justify =
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'

type Direction =
    | 'horizontal'
    | 'vertical'

type Size =
    | 'sm'
    | 'md'
    | 'lg'

const props = {
    styles: {
        type: Object as PropType<CSSModuleClasses>,
        default: _styles
    },
    direction: {
        type: String as PropType<Direction>,
        default: 'horizontal'
    },
    size: {
        type: [String, Array] as PropType<Size | [Size, Size]>,
        default: 'sm'
    },
    align: {
        type: String as PropType<Align>,
        default: 'center'
    },
    justify: {
        type: String as PropType<Justify>,
        default: 'start'
    },
    inline: {
        type: Boolean,
        default: true
    },
    wrap: Boolean,
} as const;

export default defineComponent({
    name: 'Space',
    props,

    setup(props, { slots }) {
        const { size, styles, direction, inline, justify, wrap, align } = props;
        const [hGap, vGap] = size instanceof Array ? size : [size, size];
        const vertical = direction === 'vertical';
        return () => h(
            'section',
            {
                class: [
                    styles.root,
                    direction,
                    vertical ? hGap : vGap,
                    inline ? 'inline-flex' : 'flex',
                    `flex-${vertical ? 'col' : 'row'}`,
                    `flex-${justify.split('-').pop()}`,
                    `flex-${wrap ? 'wrap' : 'nowrap'}`,
                    `content-${align}`
                ]
            },
            slots.default?.().map(i => h(i, {
                class: [vertical ? vGap : hGap]
            }))
        )
    }
});
