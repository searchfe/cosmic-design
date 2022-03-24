<script lang="ts" setup>
import TreeNode from './tree-node.vue';
import { tree as _styles } from 'cosmic-ui';
import { useSlots } from 'vue';

interface TreeDataProps {
    label: string;
    key?: string;
    open?: string;
    children?: TreeDataProps[];
}

interface TreeProps {
    styles?: typeof _styles,
    data?: TreeDataProps[];
    editable?: boolean,
    indent?: number,
    offset?: number,
    size?: string,
}

withDefaults(defineProps<TreeProps>(), {
    data: () => [],
    styles:() => _styles,
    editable: false,
    indent: 15,
    offset: 0,
    size: 'md',
});
const slots = useSlots();

const emits = defineEmits(['click-node', 'click-subfix', 'change-label']);
</script>

<template>
    <div class="overflow-hidden select-none" :class="[styles.tree, size]">
        <tree-node
            v-for="nodeData in data"
            :key="nodeData.key"
            :styles="styles"
            :data="data"
            :node-data="nodeData"
            :editable="editable"
            :indent="indent"
            :offset="offset"
            :size="size"
            @click-subfix="(arg) => emits('click-subfix', arg)"
            @click-node="(arg) => emits('click-node', arg)"
            @change-label="(arg) => emits('change-label', arg)"
        >
            <template #arrow="slotProps" v-if="slots.arrow">
                <slot name="arrow" :nodeData="slotProps.nodeData" :state="slotProps.state" />
            </template>
            <template #prefix="slotProps" v-if="slots.prefix">
                <slot name="prefix" :nodeData="slotProps.nodeData" />
            </template>
            <template #subfix="slotProps" v-if="slots.subfix">
                <slot name="subfix" :nodeData="slotProps.nodeData" />
            </template>
            <template #label="slotProps" v-if="slots.label">
                <slot name="label" :nodeData="slotProps.nodeData" />
            </template>
        </tree-node>
    </div>
</template>
