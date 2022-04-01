<script lang="ts" setup>
import { ref, useSlots, onMounted, toRefs, computed } from 'vue';
import CollapseItem from './collapse-item.vue';
import { flattenChildren } from '../utils/props';


type CollapseKey = string | number | string[] | number[];

interface CollapseProps {
    accordion: boolean;
    activeKey: CollapseKey;
    defaultActiveKey: CollapseKey;
    nullable: boolean;
}

const props = withDefaults(defineProps<CollapseProps>(), {
    accordion: false,
    activeKey: () => [],
    defaultActiveKey: () => [],
    nullable: true,
});

const { accordion, activeKey, defaultActiveKey, nullable } = toRefs(props);

const selectedSet = ref(new Set());


const newChildren = computed(() => {
    const children: any[] = flattenChildren(useSlots().default?.() || []);
    return children.map(child => {
        return {
            ...child.props,
            key: child.key || child?.props?.datakey,
            prefix: child?.children?.prefix,
            extra: child?.children?.extra,
            default: child?.children?.default,
        };
    });
});


onMounted(() => {
    let currentActiveKey = (Array.isArray(activeKey.value) && activeKey.value.length) === 0 ? defaultActiveKey.value : activeKey.value;
    const init = new Set(Array.isArray(currentActiveKey) ? currentActiveKey : [currentActiveKey]);
    selectedSet.value = init;
});

const emits = defineEmits(['change']);

function onToggleItem(data: { key: string | number }) {
    const { key } = data;
    const oldSet = selectedSet.value;
    const selected = oldSet.has(key);
    if (accordion.value) {
        if (selected && !nullable.value) {
            // 手风琴模式下，如果不允许为空，则不改动
            return;
        }
        selectedSet.value = selected ? new Set() : new Set([key]);
        emits('change', { keys: [...selectedSet.value] });
        return;
    }
    if (selected) {
        oldSet.delete(key);
    }
    else {
        oldSet.add(key);
    }
    selectedSet.value = new Set(oldSet);
    emits('change', { keys: [...selectedSet.value] });
}
</script>

<template>
    <div>
        <collapse-item
            v-for="child of newChildren"
            :key="child.key"
            :header="child.header"
            :selected="selectedSet.has(child.key)"
            @toggle="onToggleItem"
        >
            <template #prefix>
                <component :is="child.prefix" />
            </template>
            <template #default>
                <component :is="child.default" />
            </template>
            <template #extra>
                <component :is="child.extra" />
            </template>
        </collapse-item>
    </div>
</template>
