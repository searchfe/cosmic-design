import { defineComponent, h, type PropType, type StyleValue } from 'vue';

type Align = 'start' | 'end' | 'center' | 'baseline';

type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

// type Row = {
//     spans?: number
//     gutter?: number
//     align?: Align
//     justify?: Justify
//     wrap?: boolean
//     xs?: Row
//     sm?: Row
//     md?: Row
//     lg?: Row
//     xl?: Row
// };

const props = {
    spans: {
        type: Number,
        default: 12,
    },
    gutter: {
        type: Number,
        default: 0,
    },
    justify: {
        type: String as PropType<Justify>,
        default: 'start',
    },
    align: {
        type: String as PropType<Align>,
        default: 'start',
    },
    wrap: {
        type: Boolean,
        default: false,
    },
} as const;

export default defineComponent({
    name: 'CRow',
    props,

    setup(props, { slots }) {
        return () =>
            h(
                'section',
                {
                    class: [
                        'flex',
                        `justify-${props.justify.split('-').pop()}`,
                        `content-${props.align}`,
                        `flex-${props.wrap ? 'wrap' : 'nowrap'}`,
                    ],
                    style: {
                        marginLeft: `-${props.gutter / 2}px`,
                        marginRight: `-${props.gutter / 2}px`,
                    } as StyleValue,
                },
                slots.default?.(),
            );
    },
});
