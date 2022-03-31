<script lang="ts" setup>
import TreeNode from './tree-node.vue';
import { tree as _styles } from 'cosmic-ui';
import { useSlots } from 'vue';
import { type TreeNodeEvent } from './types';

interface TreeDataProps {
    label: string;
    id?: string;
    open?: string;
    children?: TreeDataProps[];
    readonly?: string;
    selected?: string;
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

function clickNode(event: TreeNodeEvent) {
    emits('click-node', event);
}
</script>

<template>
    <div :class="[styles.tree, size]">
        <tree-node
            v-for="nodeData in data"
            :key="nodeData.id"
            :styles="styles"
            :data="data"
            :node-data="nodeData"
            :editable="editable"
            :indent="indent"
            :offset="offset"
            :size="size"
            @click-subfix="(arg) => emits('click-subfix', arg)"
            @click-node="clickNode"
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
