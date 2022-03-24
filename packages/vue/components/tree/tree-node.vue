<script lang="ts" setup>
import { ref, useSlots, computed } from 'vue';
import { tree as _styles } from 'cosmic-ui';
import type {  TreeNodeEvent, TreeProps, TreeChangeEvent } from './types';
import { TreeNodeState } from './types';

interface TreeDataProps {
    label: string;
    key?: string;
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
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    styles: () =>_styles,
    data: () => [],
    editable: false,
    indent: 15,
    offset: 0,
    size: 'md',
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

const emits = defineEmits(['click-node', 'click-subfix', 'change-label']);

function enterHandler() {
    isHoverSubfix.value = true;
}
function leaveHandler() {
    isHoverSubfix.value = false;
}

function getTreeNodeEvent(event: Event) {
    return {
        key: props.nodeData.key,
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

function onClickLabel(event: MouseEvent) {
    if(props.editable) {
        // if (!focusEditing.value) {
        //     focusEditing.value = true;
        // }
        // do sth.
    } else {
        onClick(event);
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
function startFocusLabel() { //event: FocusEvent
    // (event.target as HTMLInputElement).blur();
}
</script>

<template>
    <div :class="[styles.treenode, size]">
        <div :class="[styles.header, size]">
            <div
                class="w-full h-full flex items-center"
                :style="{paddingLeft: offset + 'px'}"
                @mouseenter="enterHandler"
                @mouseleave="leaveHandler"
            >
                <div @click="onClick">
                    <div class="overflow-hidden " :class="[styles.arrow, size]">
                        <slot name="arrow" :nodeData="props.nodeData" :expanded="expanded" :state="state">
                            <div class="min-w-10">
                                <i-cosmic-arrow-down v-if="state==TreeNodeState.open" />
                                <i-cosmic-arrow-right v-if="state==TreeNodeState.close" />
                            </div>
                        </slot>
                    </div>
                </div>

                <div v-if="slots.prefix" :class="[styles.prefix, size]" @click="onClick">
                    <slot name="prefix" :nodeData="props.nodeData" />
                </div>

                <div class="overflow-hidden" :class="[styles.label, size]" @click="onClickLabel">
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
                    @click.stop="onClickSubfix"
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
                    :key="child.key"
                    :styles="styles"
                    :size="size"
                    :editable="editable"
                    :data="data"
                    :node-data="child"
                    :offset="offset + indent"
                    @click-node="(arg) => emits('click-node', arg)"
                    @click-subfix="(arg) => emits('click-subfix', arg)"
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
            </slot>
        </div>
    </div>
</template>
