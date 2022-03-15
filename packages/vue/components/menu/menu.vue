<script lang="ts" setup>
import { ref, reactive, useSlots} from 'vue';
import { type SelectOption, Select } from 'cosmic-common';
import { menu as _styles} from 'cosmic-ui';
import { default as MenuOption } from './option.vue';
import { type Size } from '../types/idnex';

const props = withDefaults(defineProps<{
    value: unknown | unknown[],
    size: Size,
    opened: boolean,
    disabled: boolean

}>(), {
    size: 'sm',
    opened: false,
    disabled: false,
});

const styles = _styles;

const state = ref(props.disabled ? 'disabled' : 'normal');

const open = ref(props.opened);

const emits = defineEmits(['onChange', 'onBoardSwitch']);

const defautSlots = useSlots().default?.() || [];

const renderList = defautSlots.map(item => ({value: item.props?.value, label: item.props?.label}));

const select = reactive(new Select<SelectOption>());
// init select list
select.setSelectList(renderList);
select.setSelection(props.value as string);

const changeHandler = (data: SelectOption) => {
    select.setSelection(data);
    open.value = false;
    emits('onChange', data);
    emits('onChange', open.value);
};

const activatorClick = () => {
    open.value = true;
    emits('onChange', open.value);
};

</script>

<template>
    <div :class="[styles.menu, size, state]">
        <div
            @click="activatorClick()"
        >
            <slot name="activator" />
        </div>
        <slot name="menu">
            <ul
                v-if="open"
                :class="[styles.popover, size]"
                class="m-0 p-0"
            >
                <MenuOption 
                    v-for="menu of renderList"
                    :key="menu.value"
                    :value="menu.value"
                    :label="menu.label"
                    :size="size"
                    :selected="select.selected(menu)"
                    @on-change="changeHandler"
                />
            </ul>
        </slot>
    </div>
</template>