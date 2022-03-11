import { defineComponent, h, getCurrentInstance } from 'vue';

const props = {
    span: {
        type: Number,
    },
} as const;

export default defineComponent({
    name: 'CCol',
    props,

    setup(props, { slots }) {
        const col = getCurrentInstance();
        const { spans, gutter } = col!.parent!.props as { spans: number, gutter: number };
        return () => h(
            'section',
            {
                style: {
                    width: `calc(100% / ${spans / (props.span ?? spans)})`,
                    paddingLeft: `${gutter / 2}px`,
                    paddingRight: `${gutter / 2}px`,
                },
            },
            slots.default?.(),
        );
    },
});
