import { defineComponent, h, type PropType } from "vue";
import _style from 'cosmic-design/table.module.css';

const props = {
    styles: {
        type: Object as PropType<CSSModuleClasses>,
        default: _style
    },
    data: Array
} as const;

export default defineComponent({
    name: 'Table',
    props,

    setup(props, { slots }) {
        const { styles } = props;
        return () => h('table', {
            class: [styles.root]
        })
    }
});
