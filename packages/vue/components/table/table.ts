import { defineComponent, h, type PropType } from 'vue';
import { table as _styles } from 'cosmic-ui';

const props = {
    styles: {
        type: Object as PropType<CSSModuleClasses>,
        default: _styles,
    },
    data: Array,
} as const;

export default defineComponent({
    name: 'Table',
    props,

    setup(props, { slots }) {
        const { styles } = props;
        return () => h('table', {
            class: [styles.root],
        });
    },
});
