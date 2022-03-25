<script lang="ts" setup>
import { ref, useSlots, computed } from 'vue';
import { tree as _styles } from 'cosmic-ui';
import type {  TreeNodeEvent, TreeProps, TreeChangeEvent } from './types';
import { TreeNodeState } from './types';

const emits = defineEmits(['click-node', 'click-subfix', 'change-label']);

interface TreeDataProps {
    label: string;
    id?: string;
    open?: string;
    children?: TreeDataProps[];

}

interface TreeNodeProps extends TreeProps{
    /** extends from TreeProps */
    styles?: typeof _styles,
    data?: TreeDataProps[]; // all data in tee
    editable?: boolean,
    indent?: number,
    offset?: number,
    size?: string,
    /** end of extends  */

    nodeData: TreeDataProps,
    selectedId: string,
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    styles: () =>_styles,
    data: () => [],
    editable: false,
    indent: 15,
    offset: 0,
    size: 'md',
    selectedId: '',
});

const slots = useSlots();
const state = computed(() => {
    if(!(props.nodeData?.children?.length)) {
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
let lockEdit = false;
function onClickLabel(event: MouseEvent) {
    if(props.selectedId !== props.nodeData.id) {
        lockEdit = true; // 避免点击后直接focus
        emits('click-node', getTreeNodeEvent(event));
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

function startFocusLabel(event: FocusEvent) {
    if(props.selectedId !== props.nodeData.id || lockEdit) {
        (event.target as HTMLInputElement).blur();
    }
    lockEdit = false; // 第一次 focus失败后 关闭锁定
}
</script>

<template>
    <div :class="[styles.treenode, size]">
        <div :class="[styles.header, size, selectedId === props.nodeData.id ? 'active': '']">
            <div
                class="w-full h-full flex items-center"
                :style="{paddingLeft: offset + 'px'}"
                @mousedown="onClickLabel"
                @mouseenter="enterHandler"
                @mouseleave="leaveHandler"
            >
                <div @mousedown.stop="onClick">
                    <div class="overflow-hidden " :class="[styles.arrow, size]">
                        <slot name="arrow" :nodeData="props.nodeData" :expanded="expanded" :state="state">
                            <div class="min-w-10">
                                <i-cosmic-arrow-down v-if="state==TreeNodeState.open" />
                                <i-cosmic-arrow-right v-if="state==TreeNodeState.close" />
                            </div>
                        </slot>
                    </div>
                </div>

                <div v-if="slots.prefix" :class="[styles.prefix, size]" @mousedown.stop="onClick">
                    <slot name="prefix" :nodeData="props.nodeData" />
                </div>

                <div class="overflow-hidden" :class="[styles.label, size]">
                    <template v-if="!editable">
                        <slot name="label" :nodeData="props.nodeData">
                            <div>{{ props.nodeData.label }}</div>
                        </slot>
                    </template>
                    <template v-else>
                        <input
                            :value="label"
                            :class="styles.input"
                            @focus="startFocusLabel"
                            @change="changeLabel"
                            @input="changeLabel"
                            @blur="endEditLabel"
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
                    <slot name="subfix" :nodeData="props.nodeData"> </slot>
                </div>
            </div>
        </div>
        <div
            class="overflow-hidden"
            :class="[styles.content, size]"
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
                    :selected-id="selectedId"
                    :offset="offset + indent"
                    @click-node="(arg: TreeNodeEvent) => emits('click-node', arg)"
                    @click-subfix="(arg: TreeNodeEvent) => emits('click-subfix', arg)"
                    @change-label="(arg: TreeChangeEvent) => emits('change-label', arg)"
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
