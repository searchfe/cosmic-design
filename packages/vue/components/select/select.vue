<script setup lang="ts">
import { ref, reactive, useSlots, toRaw, watch, watchEffect, type VNode } from 'vue';
import { select as _styles, InputSelect} from 'cosmic-ui';
import { default as Option } from './option.vue';
import { type SelectOption, Select } from 'cosmic-common';
import type { Size } from '../types/idnex';
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
        // eslint-disable-next-line
        styles: any,
    }>(), {
        value: '', 
        size: 'sm',
        disabled: false,
        multiple: false,
        placeholder: '',
        clearable: false,
        allowInput: false,
        styles: _styles,
    },
);

const emits = defineEmits(['onChange', 'onSelect', 'onClear', 'onFocus', 'onBlur', 'onBoardSwitch']);

const select = reactive(new Select());

const renderList = ref<any>([]);

// watchEffect(() => {
const children = flattenChildren(useSlots().default?.() || []) as VNode[];
select.setSelectList(children.map(item => ({label: item.props?.label, value: item.props?.value})));
select.setSelection(props.value as string);
renderList.value = children.map(item => toRaw(item.props) as Record<string, string>);
// });


watch(() => props.value, (newValue) => {
    select.setSelection(newValue);
});

const isOpen = ref(false);

const container = ref(null);

const computedStyle = ref({});


watchEffect(() => {
    emits('onBoardSwitch', isOpen.value);
});

const prefix =  useSlots().prefix;

const subfix = useSlots().subfix;

const clickHandler = () =>  {
    if (props.disabled) return;
    const ele = container.value as unknown as HTMLElement;
    const rect = ele.getBoundingClientRect();
    computedStyle.value = {top: `${rect.height + 1}px`, left: '0px'};
    if (!isOpen.value) isOpen.value = true;
};

const selectChange = (data: SelectOption) => {
    emits('onSelect', data);
    select.setSelection(data);
    // (container.value as unknown as HTMLElement)?.blur();
    emits('onChange', data);
    isOpen.value = false;
};

const inputChange = (data: string) => {
    select.setSelection(data);
    // (container.value as unknown as HTMLElement)?.blur();
    emits('onChange', data);
    isOpen.value = false;
};

const focus = () => {
    emits('onFocus');
};

const blur = () => {
    emits('onBlur');
    isOpen.value = false;
};

</script>

<template>
    <div
        ref="container"
        :class="[props.allowInput ? props.styles.select : props.styles.border]"
        class="flex relative"
        @click="clickHandler"
    >
        <Input
            :readonly="!props.allowInput"
            :placeholder="props.placeholder"
            :value="select.label"
            :size="size"
            :default="props.disabled"
            :styles="InputSelect"
            @on-change="(event) => inputChange(event.value)"
            @on-blur="blur"
            @on-focus="focus"
        >
            <template v-if="prefix" #prefix>
                <component :is="prefix" />
            </template>
            <template #subfix>
                <component :is="subfix" v-if="subfix" />
            </template>
        </Input>
        <ul
            v-show="isOpen"
            :class="[props.styles.popover, size]"
            :style="computedStyle"
            class="w-full m-0 p-0"
        >
            <Option
                v-for="item of renderList" 
                :key="item.value"
                :value="item.value" 
                :label="item.label"
                size="md"
                :selected="select.selected(item)"
                :styles="props.styles"
                @on-change="selectChange"
            />
        </ul>
    </div>
</template>
