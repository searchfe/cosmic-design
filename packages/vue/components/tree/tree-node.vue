<script lang="ts" setup>
import { ref, useSlots, getCurrentInstance, computed } from 'vue';
import { treeNode as styles} from 'cosmic-ui';

interface TreeNodeProps {
    title: string;
    indentStep?: string | number;
    treeIcon?: string;
    leafIcon?: string;
    extra?: string;
    // eslint-disable-next-line vue/no-reserved-props
    key?: string;
    datakey?: string;
    children?: TreeNodeProps[];
}

interface CommonEventArg {
    key: string;
}

interface ToggleEventArg extends CommonEventArg {
    expanded: boolean;
}

const props = withDefaults(defineProps<TreeNodeProps>(), {
    title: '',
    indentStep: '12px',
    children: () => [],
    treeIcon: '',
    leafIcon: '',
    extra: '',
    datakey: '',
});
const nodeKey = computed(() => {
    return getCurrentInstance()?.vnode?.key || props.datakey;
});

const slots = useSlots();
const expanded = ref(false);
const isLeaf = ref(!props.children?.length);
const hasIcon = ref(isLeaf.value ? (props.leafIcon || slots.icon) : (props.treeIcon || slots.icon));

const emits = defineEmits(['toggle', 'click-extra']);

function onToggle() {
    expanded.value = !expanded.value;
    emits('toggle', { expanded: expanded.value, key: nodeKey.value});
}

function onClickEtra() {
    emits('click-extra', { key: nodeKey.value });
}

function onToggleChildren(arg: CommonEventArg) {
    emits('toggle', arg);
}

function onClickChildren(arg: ToggleEventArg) {
    emits('click-extra', arg);
}

</script>

<template>
    <div
        :class="styles.treenode"
        :style="{ paddingLeft: indentStep }"
    >
        <div
            :class="styles.header"
            @click.stop="onToggle"
        >
            <!-- render arrow -->
            <div :class="styles.toogle">
                <template v-if="!isLeaf">
                    <i-cosmic-arrow-down
                        v-if="expanded"
                        :class="styles.status"
                    />
                    <i-cosmic-arrow-right
                        v-else
                        :class="styles.status"
                    />
                </template>
            </div>

            <!-- render icon -->
            <div
                v-if="hasIcon"
                :class="styles.icon"
            >
                <slot name="icon" />
            </div>

            <!-- render title -->
            <div :class="styles.title">
                <div>{{ title }}</div>
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
            :class="styles.content"
            :style="{ display: expanded ? 'block' : 'none' }"
        >
            <slot>
                <tree-node
                    v-for="child in children"
                    :key="child.key"
                    :title="child.title"
                    :children="child.children"
                    :indent-step="child.indentStep"
                    @toggle="onToggleChildren"
                    @click-extra="onClickChildren"
                />
            </slot>
        </div>
    </div>
</template>
