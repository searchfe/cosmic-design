import { reactive, h, defineComponent } from 'vue';
import { type SelectOption, Select } from 'cosmic-common';

const props = {
    value: String,
    size: {
        type: String,
        default: 'sm',
    },
};

export default defineComponent({
    name: 'RadioGroup',
    props,
    setup(props, { slots, emit }) {
        const selectData = slots.default?.()?.map(el => ({ value: el.props.value, label: el.props.label }));
        const select = reactive(new Select());
        select.setSelectList(selectData);
        select.setSelection(props.value as string);
        const clickHandler = data => {
            select.setSelection(data);
            emit('onChange', data);
        };

        return () =>
            h(
                'div',
                {
                    class: ['flex'],
                },
                slots.default?.()?.map(el => {
                    const { value, label } = el.props as SelectOption;
                    return h(el, {
                        ...el.props,
                        size: props.size,
                        onClick: () => clickHandler({ value, label }),
                        selected: select.selected({ value, label }),
                    });
                }),
            );
    },
});
