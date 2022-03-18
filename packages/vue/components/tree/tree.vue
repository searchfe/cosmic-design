<script lang="ts" setup>
import SubTree from './tree-node.vue';
import { tree as styles } from 'cosmic-ui';

interface TreeNodeProps {
    title: string;
    indentStep?: string | number;
    treeIcon?: string;
    leafIcon?: string;
    extra?: string;
    // eslint-disable-next-line vue/no-reserved-props
    key?: string;
    children?: TreeNodeProps[];
}

interface TreeProps {
    data?: TreeNodeProps[];
}

withDefaults(defineProps<TreeProps>(), {
    data: () => [],
});

const emits = defineEmits(['toggle', 'click-extra']);

function onClick(data: { key?: string, expanded: string, isLeaf: boolean }) {
    emits('toggle', data);
}

function onClickEtra(data: { key: string }) {
    emits('click-extra', data);
}
// TODO: dom api 使用tree，传递出事件

</script>

<template>
    <div :class="styles.tree">
        <slot>
            <sub-tree
                v-for="treeNode in data"
                :key="treeNode.key"
                :title="treeNode.title"
                :children="treeNode.children"
                @click-extra="onClickEtra"
                @toggle="onClick"
            />
        </slot>
    </div>
</template>
