<script lang="ts" setup>
import TreeNode from './tree-node.vue';
import { tree as _styles } from 'cosmic-ui';
import { useSlots, ref } from 'vue';
import { type TreeNodeEvent } from './types';

interface TreeDataProps {
    label: string;
    id?: string;
    open?: string;
    children?: TreeDataProps[];
    readonly?: string;
    selected?: string;
    isGroup?: string;
}

interface TreeProps {
    styles?: typeof _styles,
    data?: TreeDataProps[];
    editable?: boolean,
    indent?: number,
    offset?: number,
    size?: string,
}

const props = withDefaults(defineProps<TreeProps>(), {
    data: () => [],
    styles:() => _styles,
    editable: false,
    indent: 15,
    offset: 0,
    size: 'md',
});
const slots = useSlots();
const dragging = ref(false);

const emits = defineEmits(['click-node', 'click-subfix', 'change-label', 'move-into', 'move-to']);

function clickNode(event: TreeNodeEvent) {
    emits('click-node', event);
}
function down() {
    if (!props.editable) return;
    dragging.value = true;
}
function up() {
    dragging.value = false;
}
function move() {
    if (!props.editable || !dragging.value) return;
}
</script>

<template>
    <div
        :class="[styles.tree, size, dragging?'dragging': '']"
        @mousemove="move"
        @mousedown="down"
        @mouseup="up"
    >
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
            :dragging="dragging"
            @click-subfix="(arg) => emits('click-subfix', arg)"
            @click-node="clickNode"
            @change-label="(arg) => emits('change-label', arg)"
            @move-into="(arg) => emits('move-into', arg)"
            @move-to="(arg) => emits('move-to', arg)"
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
