import { defineComponent, h } from "vue";

const props = {
    span: {
        type: Number
    }
} as const;

export default defineComponent({
    name: 'Row',
    props,

    setup(props, { slots }) {
        return () => h(
            'section',
            slots.default?.()
        )
    }
});
