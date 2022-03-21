<script setup lang="ts">
import { ref, reactive, useSlots, toRaw, watchEffect, type VNode } from 'vue';
import { tabs as _styles} from 'cosmic-ui';
import { default as Option } from './option.vue';
import { type SelectOption, Select } from 'cosmic-common';
import { type Size } from '../types/idnex';
import { flattenChildren } from '../utils/props';

const props = withDefaults(
    defineProps<{
        defaultActiveTab: string,
        size: Size,
    }>(), {
        defaultActiveTab: void 0, 
        size: 'md',
    },
);

const emits = defineEmits(['onChange']);

const styles = _styles;

const select = reactive(new Select());

type ListItem = {
    value: string,
    label: string
}
const renderList = ref<ListItem[]>();

// 将所有传入的子组件拍平放入
watchEffect(() => {
    const children = flattenChildren(useSlots().default?.() || []) as VNode[];
    select.setSelectList(children.map(item => ({label: item.props?.label, value: item.props?.value})));
    select.setSelection(props.defaultActiveTab as string);
    renderList.value = children.map(item => toRaw(item.props) as ListItem);
});

const tabChange = (data: SelectOption) => {
    select.setSelection(data);
    emits('onChange', data);
};

</script>

<template>
    <div
        :class="styles.tabs"
        class="flex"
    >
        <Option
            v-for="item of renderList" 
            :key="item.value"
            :value="item.value" 
            :label="item.label"
            :size="size"
            :selected="select.selected(item)"
            @on-change="tabChange"
        />
    </div>
</template>
