import { defineComponent, h, type PropType } from 'vue';
import { space as _styles } from 'cosmic-ui';

type Align = 'start' | 'end' | 'center' | 'baseline';

type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

type Direction = 'horizontal' | 'vertical';

type Size = 'sm' | 'md' | 'lg';

const props = {
    styles: {
        type: Object as PropType<CSSModuleClasses>,
        default: _styles,
    },
    direction: {
        type: String as PropType<Direction>,
        default: 'horizontal',
    },
    size: {
        type: [String, Array] as PropType<Size | [Size, Size]>,
        default: 'sm',
    },
    align: {
        type: String as PropType<Align>,
        default: 'center',
    },
    justify: {
        type: String as PropType<Justify>,
        default: 'start',
    },
    inline: {
        type: Boolean,
        default: true,
    },
    wrap: Boolean,
} as const;

export default defineComponent({
    name: 'CSpace',
    props,

    setup(props, { slots }) {
        // const { size, styles, direction, inline, justify, wrap, align } = props;
        const [hGap, vGap] = props.size instanceof Array ? props.size : [props.size, props.size];
        const vertical = props.direction === 'vertical';
        return () => {
            const children = slots.default?.();
            return h(
                'section',
                {
                    class: [
                        props.styles.space,
                        vertical ? hGap : vGap,
                        props.inline ? 'inline-flex' : 'flex',
                        `flex-${vertical ? 'col' : 'row'}`,
                        `justify-${props.justify.split('-').pop()}`,
                        `flex-${props.wrap ? 'wrap' : 'nowrap'}`,
                        `content-${props.align}`,
                    ],
                },
                children?.map((item, index) => {
                    const classes: string[] = [props.styles[props.direction], vertical ? vGap : hGap];
                    if (index === children.length - 1) {
                        classes.push(props.styles.last);
                    }
                    return h(item, { class: classes });
                }),
            );
        };
    },
});
