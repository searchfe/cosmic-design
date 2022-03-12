<script setup lang="ts">
import { ref, reactive, useSlots, computed, toRaw, watchEffect } from 'vue';
import { select as _styles} from 'cosmic-ui';
import { default as Option } from './option.vue';
import { type SelectOption, Select } from 'cosmic-common';
import { type Size } from '../types/idnex';
import { Input } from '../input';

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

// 获取childre
const children = useSlots().default?.() || [];

const renderList = computed(() => children.map(item => toRaw(item.props) as Record<string, string>));

const isOpen = ref(false);

const container = ref(null);

const select = reactive(new Select());

const computedStyle = reactive({top: '0px', left: '0px'});

// init select list
select.setSelectList(children.map(item => ({label: item.props?.label, value: item.props?.value})));

select.setSelection(props.value as string);

watchEffect(() => {
    emits('onBoardSwitch', isOpen.value);
});

const prefix =  useSlots().prefix;

const clickHhandle = () =>  {
    if (props.disabled) return;
    const ele = container.value as unknown as HTMLElement;
    const rect = ele.getBoundingClientRect();
    computedStyle.top = `${rect.height - 2}px`;
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
        :class="[styles.select, props.allowInput ? '' : styles.border, 'flex']"
        @click="clickHhandle"
    >
        <Input
            :readonly="!props.allowInput"
            :placeholder="props.placeholder"
            :value="select.label"
            :size="size"
            :default="props.disabled"
            :state="!props.allowInput ? 'inherit' : ''"
            @on-blur="blur"
            @on-focus="focus"
        >
            <template #prefix>
                <component :is="prefix" />
            </template>
        </Input>
        <ul
            v-show="isOpen"
            :class="[styles.popover, size]"
            :style="computedStyle"
        >
            <Option 
                v-for="item of renderList" 
                :key="item.value"
                :size="size" 
                :value="item.value" 
                :label="item.label"
                :selected="select.selected(item)"
                @on-change="selectChange"
            />
        </ul>
    </div>
</template>
