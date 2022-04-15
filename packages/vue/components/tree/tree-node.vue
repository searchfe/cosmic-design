<script lang="ts" setup>
import { ref, useSlots, computed, watch, watchEffect } from 'vue';
import { tree as _styles } from 'cosmic-ui';
import type {  TreeNodeEvent, TreeProps, TreeChangeEvent } from './types';
import { TreeNodeState } from './types';

const emits = defineEmits(['click-node', 'click-subfix', 'change-label', 'move-into', 'move-to']);

/** 当前节点是否为拖拽宿主 */
const selfDragging = ref(false);
watchEffect(() => {
    if (props.dragging ===  true && selfDragging.value == true && !props.nodeData.selected) {
        selfDragging.value = false;
    }
});

interface TreeDataProps {
    label: string;
    id?: string;
    open?: string;
    children?: TreeDataProps[];
    readonly?: string;
    selected?: string;
    isGroup?: string;
}

interface TreeNodeProps extends TreeProps{
    /** extends from TreeProps */
    styles?: typeof _styles,
    data?: TreeDataProps[], // all data in tee
    editable?: boolean,
    indent?: number,
    offset?: number,
    size?: string,
    /** end of extends  */

    dragging?: boolean, /** 父节点是否开启拖拽 */
    enableDrag?: boolean,
    nodeData: TreeDataProps,
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    styles: () =>_styles,
    data: () => [],
    editable: false,
    indent: 15,
    offset: 0,
    size: 'md',
    dragging: false,
    enableDrag: false,
});

const slots = useSlots();
const state = computed(() => {
    if(!props.nodeData.isGroup) {
        return TreeNodeState.leaf;
    } else if(expanded.value) {
        return TreeNodeState.open;
    }
    return TreeNodeState.close;
});

const expanded = ref(props.nodeData.open !== '0');

const isHoverSubfix = ref(false);


function enterHandler() {
    isHoverSubfix.value = true;
}
function leaveHandler() {
    isHoverSubfix.value = false;
}

function getTreeNodeEvent(event: Event) {
    return {
        id: props.nodeData.id,
        state: state.value,
        event,
        nodeData: props.nodeData,
        data: props.data,
    } as TreeNodeEvent;
}

function onClick(event: MouseEvent) {
    expanded.value = !expanded.value;
    emits('click-node', getTreeNodeEvent(event));
}

function onClickSubfix(event: MouseEvent) {
    emits('click-subfix', getTreeNodeEvent(event));
}
const label = ref(props.nodeData.label);
const editType = ref(0);
function onMouseDownLabel(event: MouseEvent) {
    selfDragging.value = true;
    if(!props.nodeData.selected) {
        editType.value = 0;
        emits('click-node', getTreeNodeEvent(event));
    }
    if(editType.value < 2 && props.nodeData.selected) {
        event.preventDefault();
    }
}
function onMouseUpLabel(event: MouseEvent) {
    selfDragging.value = false;
    if(editType.value >= 1) {
        editType.value = 2;
        requestAnimationFrame(() => {
            (event.target as HTMLInputElement).focus();
        });
    } else if(props.nodeData.selected && editType.value <1) {
        editType.value = 1;
    }
    if (!props.nodeData.selected && props.editable) {
        if(!props.dragging || selfDragging.value || !props.nodeData.isGroup) return;
        emits('move-into', getTreeNodeEvent(event));
    }
}

function endEditLabel(event: Event) {
    label.value = (event.target as HTMLInputElement).value;
    emits('change-label', {
        label: label.value,
        ...getTreeNodeEvent(event),
    } as TreeChangeEvent);
}

function changeLabel(event: Event){
    label.value = (event.target as HTMLInputElement).value;
}

function cancelEditLabel(event: KeyboardEvent){
    (event.target as HTMLInputElement).value = props.nodeData.label;
    (event.target as HTMLInputElement).blur();
}
function enterEditLabel(event: KeyboardEvent){
    (event.target as HTMLInputElement).blur();
}
function moveTo(event: MouseEvent) {
    if(!props.dragging || selfDragging.value) return;
    emits('move-to', getTreeNodeEvent(event));
}
watch(props.nodeData, (e) => {
    if(!e.selected) {
        editType.value = 0;
    }
});
</script>

<template>
    <div :class="[styles.treenode, size]">
        <div
            :class="[
                styles.header,
                size,
                props.nodeData.selected ? 'active': '',
                props.nodeData.isGroup ? 'tree-group': 'tree-leaf',
            ]"
        >
            <div
                class="w-full h-full flex items-center"
                :style="{paddingLeft: offset + 'px'}"
                @mousedown="onMouseDownLabel"
                @mouseup="onMouseUpLabel"
                @mouseenter="enterHandler"
                @mouseleave="leaveHandler"
            >
                <div @mousedown.stop="onClick">
                    <div class="min-w-10" :class="[styles.arrow, size]">
                        <slot
                            v-if="props.nodeData.isGroup && props.nodeData.children?.length"
                            name="arrow" :nodeData="props.nodeData" :expanded="expanded" :state="state"
                        >
                            <i-cosmic-arrow-down v-if="state==TreeNodeState.open" />
                            <i-cosmic-arrow-right v-if="state==TreeNodeState.close" />
                        </slot>
                    </div>
                </div>

                <div v-if="slots.prefix" :class="[styles.prefix, size]" @mousedown.stop="onClick">
                    <slot name="prefix" :nodeData="props.nodeData" />
                </div>

                <div class="overflow-hidden" :class="[styles.label, size]">
                    <template v-if="!editable || props.nodeData.readonly === '1'">
                        <slot name="label" :nodeData="props.nodeData">
                            <div>{{ props.nodeData.label }}</div>
                        </slot>
                    </template>
                    <template v-else>
                        <input
                            :disabled="editType !== 2"
                            :value="label"
                            :class="styles.input"
                            @change="changeLabel"
                            @input="changeLabel"
                            @blur="endEditLabel"
                            @keydown.esc="cancelEditLabel"
                            @keydown.enter="enterEditLabel"
                        >
                    </template>
                </div>

                <div
                    v-if="slots.subfix"
                    :style="{
                        flex: 'none',
                        opacity: isHoverSubfix ? 1 : 0,
                    }"
                    class="flex items-center justify-center"
                    :class="[styles.subfix, size]"
                    @mousedown.stop="onClickSubfix"
                >
                    <slot name="subfix" :nodeData="props.nodeData" />
                </div>
            </div>
        </div>
        <div
            class="relative"
            :style="{marginLeft: offset + (!nodeData.isGroup? 25: 15) + 'px', height: 0}"
            @mouseup="moveTo"
        >
            <div
                v-if="(!expanded || !nodeData.isGroup) && !nodeData.selected && (props.dragging && !selfDragging)"
                class="h-full w-full absolute" :class="styles['drag-handle']"
            >
                <span class="block absolute" />
            </div>
        </div>
        <div
            :class="[styles.content, size, selfDragging ? 'drag-off':'']"
            :style="{ display: expanded ? 'block' : 'none' }"
        >
            <slot>
                <tree-node
                    v-for="child in props.nodeData.children"
                    :key="child.id"
                    :styles="styles"
                    :size="size"
                    :editable="editable"
                    :data="data"
                    :node-data="child"
                    :indent="indent"
                    :offset="offset + indent"
                    :dragging="props.dragging && !selfDragging"
                    @click-node="(arg: TreeNodeEvent) => emits('click-node', arg)"
                    @click-subfix="(arg: TreeNodeEvent) => emits('click-subfix', arg)"
                    @change-label="(arg: TreeChangeEvent) => emits('change-label', arg)"
                    @move-into="(arg: TreeChangeEvent) => emits('move-into', arg)"
                    @move-to="(arg: TreeChangeEvent) => emits('move-to', arg)"
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
            </slot>
        </div>
    </div>
</template>
