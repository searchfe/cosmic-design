<script lang="ts" setup>
import { ref, useSlots } from 'vue';
import type {TreeNodeOption} from './types';
/**
 * This is a trick
 * TreeNode interface should be shared among cosmic-vue and users. For these reason we cannot import type
 * from a single .d.ts file:
 * 1. vue3 setup don't support importting props typedef outside setup scope. See: https://github.com/vuejs/core/issues/4294
 * 2. ts cannot recognize import type from *.vue files
 */

export interface TreeNodeProps extends TreeNodeOption {
    title: string;
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    title: '',
    indentStep: '12px',
    children: () => [],
    treeIcon: '',
    leafIcon: '',
    extra: '',
});
const slots = useSlots();
const expanded = ref(false);
const isLeaf = ref(!props.children?.length);
const hasIcon = ref(isLeaf.value ? (props.leafIcon || slots.icon) : (props.treeIcon || slots.icon));

const emits = defineEmits(['toggle', 'click-extra']);

function onToggle() {
    expanded.value = !expanded.value;
    emits('toggle', { expanded: expanded.value, key: ''});
}

function onClickEtra() {
    emits('click-extra', { key: '' });
}

</script>

<template>
    <div
        class="tree-node"
        :style="{ paddingLeft: indentStep }"
    >
        <div
            class="tree-node-header"
            @click.stop="onToggle"
        >
            <!-- render arrow -->
            <div class="tree-arrow-container">
                <template v-if="!isLeaf">
                    <i-cosmic-arrow-down
                        v-if="expanded"
                        class="tree-node-arrow"
                    />
                    <i-cosmic-arrow-right
                        v-else
                        class="tree-node-arrow"
                    />
                </template>
            </div>

            <!-- render icon -->
            <div
                v-if="hasIcon"
                class="tree-icon"
            >
                <slot name="icon" />
            </div>

            <!-- render title -->
            <div class="tree-node-title">
                <slot>{{ title }}</slot>
            </div>

            <!-- render extra -->
            <div
                style="flex: none"
                @click.stop="onClickEtra"
            >
                <slot name="extra">
                    {{ extra }}
                </slot>
            </div>
        </div>
        <!-- render children -->
        <div
            v-if="!isLeaf"
            class="tree-content"
            :style="{ display: expanded ? 'block' : 'none' }"
        >
            <slot name="children">
                <tree-node
                    v-for="child in children"
                    :key="child.key"
                    v-bind="child"
                />
            </slot>
        </div>
    </div>
</template>

<style>
.tree-node {
    padding-right: 13px;
    color: #1f1f1f;
    background: #fff;
}
.tree-node-header {
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 12px;
    background: #fff;
}
.tree-node-header:hover {
    background: #f3f4f6;
}
.tree-node-title {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
}
.tree-arrow-container {
    flex: none;
    margin-right: 2px;
    width: 12px;
    height: 12px;
    overflow: hidden;
}
.tree-node-arrow {
    font-size: 12px;
}
.tree-icon {
    margin-right: 4px;
    flex: none;
}
.tree-content {
    overflow: hidden;
}
</style>
