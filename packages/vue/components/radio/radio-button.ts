
import { defineComponent, h } from 'vue';
import _styles from 'cosmic-design/radio-button.module.css';
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
    setup(props, {slots}) {
        return () => h(
            'span',
            {
                class: [styles.root, props.size,  props.selected ? 'active' : ''],
                style: {
                    marginRight: '10px',
                },
            },
            slots.default?.()?.map(el => h(el)),
        );
    },
});