import { defineComponent, h } from 'vue';
import { radioButton as _styles } from 'cosmic-ui';
const styles = _styles;
const props = {
    disabled: Boolean,
    selected: Boolean,
    size: {
        type: String,
        default: 'sm',
    },
};

export default defineComponent({
    name: 'RadioButton',
    props,
    setup(props, { slots }) {
        return () =>
            h(
                'span',
                {
                    class: [
                        styles['radio-button'],
                        props.size,
                        props.selected ? 'active' : '',
                        'flex',
                        'items-center',
                        'justify-center',
                    ],
                },
                slots.default?.()?.map(el => h(el)),
            );
    },
});
