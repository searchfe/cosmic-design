<script lang="ts" setup>
import type { TreeNodeOption } from './types';
import SubTree from './tree-node.vue';

interface TreeProps {
    data?: TreeNodeOption[];
}

withDefaults(defineProps<TreeProps>(), {
    data: () => [],
});

const emits = defineEmits(['toggle', 'click-extra']);

function onClick(type: 'toggle' | 'click-extra', data: { key?: string, expanded: string }) {
    emits(type, data);
}

</script>

<template>
    <div class="tree">
        <slot>
            <sub-tree
                v-for="treeNode in data"
                :key="treeNode.key"
                :title="treeNode.title"
                :children="treeNode.children"
                @click-extra="onClick"
                @toggle="onClick"
            />
        </slot>
    </div>
</template>

<style>
.tree {
    width: 100%;
    overflow: hidden;
}
</style>
