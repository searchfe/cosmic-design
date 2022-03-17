<script lang="ts" setup>
import { ref, reactive, useSlots, nextTick } from 'vue';
import { type SelectOption, Select } from 'cosmic-common';
import { menu as _styles} from 'cosmic-ui';
import { default as MenuOption } from './option.vue';
import { type Size } from '../types/idnex';
import { computePosition } from '../utils/position';

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

const container = ref<HTMLElement | null>(null);

const ulStyle = ref({});

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
    ulStyle.value = {};
    emits('onChange', data);
    emits('onChange', open.value);
};

const computedStyle = async (target: HTMLElement) => {
    await nextTick();
    ulStyle.value = computePosition(target, container.value as HTMLElement);
};

const activatorClick = (event: MouseEvent) => {
    open.value = true;
    const target = event.target as HTMLElement;
    computedStyle(target);
    emits('onChange', open.value);
};

const blur = () => {
    open.value = false;
    ulStyle.value = {};
    emits('onChange', open.value);
};

</script>

<template>
    <div
        tabindex="0"
        hidefocus="true"
        :class="[styles.menu, size, state]"
        @blur="blur"
    >
        <div
            @click="activatorClick"
        >
            <slot name="activator" />
        </div>
        
        <ul
            v-if="open"
            ref="container"
            :class="[styles.popover, size]"
            :style="ulStyle"
            class="m-0 p-0"
        >
            <slot name="menu">
                <MenuOption 
                    v-for="menu of renderList"
                    :key="menu.value"
                    :value="menu.value"
                    :label="menu.label"
                    :size="size"
                    :selected="select.selected(menu)"
                    @on-change="changeHandler"
                />
            </slot>
        </ul>
    </div>
</template>