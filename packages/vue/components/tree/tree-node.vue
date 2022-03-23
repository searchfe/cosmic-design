<script lang="ts" setup>
import { ref, useSlots, getCurrentInstance, watchEffect, computed } from 'vue';
import { tree as _styles } from 'cosmic-ui';
import type {  TreeNodeEvent } from './types';

interface DataProps {
    label: string;
    key?: string;
    children?: DataProps[];
}

interface TreeNodeProps {
    data: DataProps,
    styles?: typeof _styles,
    noArrow?: boolean,
    editable?: boolean,
    indent?: number,
    offset?: number,
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    styles: () =>_styles,
    noArrow: false,
    editable: false,
    indent: 15,
    offset: 0,
});

let nodeKey = ref('');

watchEffect(() => {
    nodeKey.value = (getCurrentInstance()?.vnode?.key || '').toString();
});

const slots = useSlots();
const defaultSlots = slots.default?.();
const hasChildrenData = computed(() => props.data?.children?.length);
const expanded = ref(false);
const isLeaf = !(hasChildrenData .value|| (!hasChildrenData.value && defaultSlots));
// const hasIcon = ref(isLeaf ? (props.leafIcon || slots.icon) : (props.treeIcon || slots.icon));
const isHoverSubfix = ref(false);

const emits = defineEmits(['click-node', 'click-subfix']);

function enterHandler() {
    isHoverSubfix.value = true;
}
function leaveHandler() {
    isHoverSubfix.value = false;
}

function onClick(event: Event) {
    expanded.value = !expanded.value;
    emits('click-node', {
        expanded: expanded.value,
        key: nodeKey.value,
        isLeaf: props.data?.children?.length === 0,
        event,
    } as TreeNodeEvent);
}

function onClickSubfix(event: MouseEvent) {
    emits('click-subfix', {
        expanded: expanded.value,
        key: nodeKey.value,
        isLeaf: props.data?.children?.length === 0,
        event,
    } as TreeNodeEvent);
}
function onClickLabel(event: MouseEvent) {
    if(props.editable) return;
    onClick(event);
}
</script>

<template>
    <div :class="styles.treenode">
        <div
            :class="styles.header"
            :style="{paddingLeft: offset + 'px'}"
            @mouseenter="enterHandler"
            @mouseleave="leaveHandler"
        >
            <div v-if="!noArrow" :class="styles.toogle" @click="onClick">
                <template v-if="!isLeaf">
                    <i-cosmic-arrow-down v-if="expanded" :class="styles.status" />
                    <i-cosmic-arrow-right v-else :class="styles.status" />
                </template>
            </div>

            <div v-if="slots.prefix" :class="styles.prefix" @click="onClick">
                <slot name="prefix" :data="props.data" />
            </div>

            <div :class="styles.label" @click="onClickLabel">
                <slot name="label" :data="props.data">
                    <div>{{ props.data.label }}</div>
                </slot>
            </div>

            <div
                :style="{
                    flex: 'none',
                    opacity: isHoverSubfix ? 1 : 0,
                }"
                class="flex items-center justify-center"
                :class="styles.subfix"
                @click.stop="onClickSubfix"
            >
                <slot name="subfix" :data="props.data"> subfix </slot>
            </div>
        </div>
        <div :class="styles.content" :style="{ display: expanded ? 'block' : 'none' }">
            <slot>
                <tree-node
                    v-for="child in props.data.children"
                    :key="child.key"
                    :styles="styles"
                    :editable="editable"
                    :data="child"
                    :offset="offset + indent"
                    @click-node="(arg) => emits('click-node', arg)"
                    @click-subfix="(arg) => emits('click-subfix', arg)"
                >
                    <template #prefix="slotProps">
                        <slot name="prefix" :data="slotProps.data" />
                    </template>
                    <template #subfix="slotProps">
                        <slot name="subfix" :data="slotProps.data" />
                    </template>
                    <template #label="slotProps">
                        <slot name="label" :data="slotProps.data" />
                    </template>
                </tree-node>
            </slot>
        </div>
    </div>
</template>
