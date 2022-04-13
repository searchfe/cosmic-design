<script lang="ts" setup>
import { ref, reactive, useSlots, nextTick, watchEffect, computed } from 'vue';
import  { Select } from 'cosmic-common';
import type { SelectOption } from 'cosmic-common';
import { menu as _styles} from 'cosmic-ui';
import type { Size } from '../types/idnex';
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

const open = ref(false);

const emits = defineEmits(['onChange', 'onBoardSwitch']);

const select = reactive(new Select<SelectOption>());

watchEffect(() => {
    select.setSelection(props.value as string); 
});

watchEffect(() =>  {
    open.value = props.opened;
});

const children = computed(() =>  flattenChildren(useSlots().default?.() || []));

const isDropdown = ref(!!useSlots().activator);

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
        :class="[styles.menu, size, state]"
        class="w-full"
        @blur="blur"
    >
        <div
            v-if="isDropdown"
            @click="activatorClick"
        >
            <slot name="activator" />
        </div>

        <ul
            v-if="!isDropdown || open"
            ref="container"
            :class="[styles.popover, styles.ul, size, isDropdown ? 'cos-mode-reverse absolute' : 'relative w-full']"
            :style="isDropdown ? ulStyle : {}"
            class="m-0 px-0 py-12"
        >
            <component 
                :is="child"
                v-for="(child, index) of children" 
                :key="index"
                size="md"
                :selected="select.selected(child.props)"
                :select="select"
                v-bind="child.props"
                @on-change="changeHandler"  
            />
            <slot name="footer" />
        </ul>
    </div>
</template>
