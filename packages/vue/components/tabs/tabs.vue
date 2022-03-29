<script setup lang="ts">
import { ref, reactive, useSlots, toRaw, watchEffect, type VNode } from 'vue';
import { tabs as _styles } from 'cosmic-ui';
import { default as Option } from './option.vue';
import { default as Cursor } from './cursor.vue';
import { type SelectOption, Select } from 'cosmic-common';
import { type Size } from '../types/idnex';
import { flattenChildren } from '../utils/props';

const props = withDefaults(
    defineProps<{
        defaultActiveTab: string,
        size: Size,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        styles: any,
    }>(), {
        defaultActiveTab: '0',
        size: 'md',
        styles: _styles,
    });

const emits = defineEmits(['onChange']);

const select = reactive(new Select());

type ListItem = {
    value: string,
    label: string
    class: string,
}
const renderList = ref<ListItem[]>();

// 将所有传入的子组件拍平放入
watchEffect(() => {
    const children = flattenChildren(useSlots().default?.() || []) as VNode[];
    select.setSelectList(children.map(item => ({ label: item.props?.label, value: item.props?.value })));
    select.setSelection(props.defaultActiveTab as string);
    renderList.value = children.map(item => toRaw(item.props) as ListItem);
});

const tabChange = (data: SelectOption) => {
    select.setSelection(data);
    emits('onChange', data);
};

// 游标左侧距离
const cursorCenter = ref(0);
const activeTabChange = (center: number) => {
    cursorCenter.value = center;
};

</script>

<template>
    <div :class="styles.tabs" class="flex">
        <Option
            v-for="item of renderList"
            :key="item.value"
            :styles="styles"
            :value="item.value"
            :label="item.label"
            :class="item.class"
            :size="size"
            :selected="select.selected(item)"
            @on-change="tabChange"
            @on-active-tab-updated="activeTabChange"
        />
        <Cursor :styles="styles" :center="cursorCenter" :size="size" />
    </div>
</template>
