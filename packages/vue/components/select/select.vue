<script setup lang="ts">
import { ref, reactive, useSlots, toRaw, watchEffect, type VNode } from 'vue';
import { select as _styles} from 'cosmic-ui';
import { default as Option } from './option.vue';
import { type SelectOption, Select } from 'cosmic-common';
import { type Size } from '../types/idnex';
import { Input } from '../input';
import { flattenChildren } from '../utils/props';

const props = withDefaults(
    defineProps<{
        value: unknown,
        size: Size,
        multiple: boolean,
        disabled: boolean,
        placeholder: string,
        clearable: boolean,
        allowInput: boolean,
    }>(), {
        value: void 0, 
        size: 'md',
        disabled: false,
        multiple: false,
        placeholder: '',
        clearable: false,
        allowInput: false,
    },
);

const emits = defineEmits(['onChange', 'onSelect', 'onClear', 'onFocus', 'onBlur', 'onBoardSwitch']);

const styles = _styles;

const select = reactive(new Select());

const renderList = ref<any>([]);

watchEffect(() => {
    const children = flattenChildren(useSlots().default?.() || []) as VNode[];
    select.setSelectList(children.map(item => ({label: item.props?.label, value: item.props?.value})));
    select.setSelection(props.value as string);
    renderList.value = children.map(item => toRaw(item.props) as Record<string, string>);
});


const isOpen = ref(false);

const container = ref(null);

const computedStyle = reactive({top: '0px', left: '0px'});


watchEffect(() => {
    emits('onBoardSwitch', isOpen.value);
});

const prefix =  useSlots().prefix;

const clickHhandle = () =>  {
    if (props.disabled) return;
    const ele = container.value as unknown as HTMLElement;
    const rect = ele.getBoundingClientRect();
    computedStyle.top = `${rect.height + 1}px`;
    computedStyle.left = `${0}px`;
    if (!isOpen.value) isOpen.value = true;
};

const selectChange = (data: SelectOption) => {
    emits('onSelect', data);
    select.setSelection(data);
    // (container.value as unknown as HTMLElement)?.blur();
    emits('onChange', data);
    isOpen.value = false;
};

const focus = () => {
    isOpen.value = true;
    emits('onFocus');
};

const blur = () => {
    emits('onBlur');
    // isOpen.value = false;
};

</script>

<template>
    <div
        ref="container"
        :class="[props.allowInput ? styles.select : styles.border]"
        class="flex relative"
        @click="clickHhandle"
    >
        <Input
            :readonly="!props.allowInput"
            :placeholder="props.placeholder"
            :value="select.label"
            :size="size"
            :default="props.disabled"
            :class="styles.inherit"
            @on-blur="blur"
            @on-focus="focus"
        >
            <template v-if="prefix" #prefix>
                <component :is="prefix" />
            </template>
        </Input>
        <ul
            v-show="isOpen"
            :class="[styles.popover, size]"
            :style="computedStyle"
            class="w-full m-0 p-0"
        >
            <Option
                v-for="item of renderList" 
                :key="item.value"
                :value="item.value" 
                :label="item.label"
                :size="size"
                :selected="select.selected(item)"
                @on-change="selectChange"
            />
        </ul>
    </div>
</template>
