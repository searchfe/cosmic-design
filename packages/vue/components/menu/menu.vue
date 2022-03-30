<script lang="ts" setup>
import { ref, reactive, useSlots, nextTick, type VNode, toRaw, watchEffect } from 'vue';
import { type SelectOption, Select } from 'cosmic-common';
import { menu as _styles} from 'cosmic-ui';
import { default as MenuOption } from './option.vue';
import { type Size } from '../types/idnex';
import { computePosition, computeMinWidth } from '../utils/style';
import { flattenChildren } from '../utils/props';

const props = withDefaults(defineProps<{
    value: unknown | unknown[],
    size: Size,
    opened: boolean,
    disabled: boolean,
    // eslint-disable-next-line
    styles: any,
}>(), {
    size: 'sm',
    opened: false,
    disabled: false,
    dropdownClass: '',
    styles: _styles,
});

const container = ref<HTMLElement | null>(null);

const ulStyle = ref({});

const state = ref(props.disabled ? 'disabled' : 'normal');

const open = ref(props.opened);

const emits = defineEmits(['onChange', 'onBoardSwitch']);

const renderList = ref<SelectOption[]>([]);

const select = reactive(new Select<SelectOption>());

watchEffect(() => {
    const children = flattenChildren(useSlots().default?.() || []) as VNode[];
    renderList.value = children.map(item => toRaw(item.props)  as SelectOption);
    // init select list
    select.setSelectList(renderList.value);
    select.setSelection(props.value as string);

});


const changeHandler = (data: SelectOption) => {
    select.setSelection(data);
    open.value = false;
    ulStyle.value = {};
    emits('onChange', data);
    emits('onBoardSwitch', open.value);
};

const computedStyle = async (target: HTMLElement) => {
    await nextTick();
    ulStyle.value = {...computePosition(target, container.value as HTMLElement), ...computeMinWidth(container.value as HTMLElement)};
};

const activatorClick = (event: MouseEvent) => {
    open.value = !open.value;
    if (open.value) {
        const target = event.currentTarget as HTMLElement;
        computedStyle(target);
        emits('onChange', open.value);
    }
    else {
        blur();
    }
};

const blur = () => {
    open.value = false;
    ulStyle.value = {};
    emits('onBoardSwitch', open.value);
};

</script>

<template>
    <div
        tabindex="0"
        hidefocus="true"
        :class="[props.styles.menu, size, state]"
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
            :class="[props.styles.popover, size]"
            :style="ulStyle"
            class="m-0 p-0"
        >
            <slot name="menu">
                <MenuOption
                    v-for="menu of renderList"
                    :key="menu.value"
                    v-bind="menu"
                    :size="size"
                    :selected="select.selected(menu)"
                    :styles="props.styles"
                    @on-change="changeHandler"
                />
            </slot>
        </ul>
    </div>
</template>
