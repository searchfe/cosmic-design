<script lang="ts" setup>
import TreeNode from './tree-node.vue';
import { tree as _styles } from 'cosmic-ui';

interface DataProps {
    label: string;
    key?: string;
    children?: DataProps[];
}

interface TreeProps {
    styles?: typeof _styles,
    data?: DataProps[];
    editable?: boolean,
    indent?: number,
    offset?: number,
}

withDefaults(defineProps<TreeProps>(), {
    data: () => [],
    styles:() => _styles,
    editable: false,
    indent: 15,
    offset: 0,
});

const emits = defineEmits(['click-node', 'click-subfix']);
</script>

<template>
    <div :class="styles.tree">
        <tree-node
            v-for="childData in data"
            :key="childData.key"
            :styles="styles"
            :data="childData"
            :editable="editable"
            :indent="indent"
            :offset="offset"
            @click-subfix="(arg) => emits('click-subfix', arg)"
            @click-node="(arg) => emits('click-node', arg)"
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
    </div>
</template>
