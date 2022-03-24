<template>
    <div class="my-10">Default - size=md</div>
    <tree
        :data="treedata"
        size="md"
        class="m-10"
        @click-node="log"
    />

    <div class="my-10">Simple Customlized  - size=sm</div>
    <tree
        :data="treedata"
        size="sm"
        class="m-10"
        @click-node="log"
    >
        <template #arrow="slotProps">
            <span v-if="slotProps.state == TreeNodeState.open" class="inline-block w-10">▾</span>
            <span v-if="slotProps.state == TreeNodeState.close" class="inline-block w-10">▸</span>
        </template>
        <template #prefix="slotProps">
            <span v-if="slotProps.nodeData.children" class="inline-block w-10">✿</span>
            <span v-if="!slotProps.nodeData.children" class="inline-block w-10">❀</span>
        </template>
        <template #label="slotProps">
            {{ slotProps.nodeData.label }}
        </template>
        <template #subfix>
            <i-cosmic-eye-open />
        </template>
    </tree>

    <div class="my-10">Editor Customlized - Editable</div>
    <tree
        editable
        size="sm"
        class="m-10"
        :data="treedata"
        @click-node="log"
        @change-label="change"
    >
        <template #prefix="slotProps">
            <i-cosmic-intersection v-if="slotProps.nodeData.children" />
            <i-cosmic-canvas v-if="!slotProps.nodeData.children" />
        </template>
        <template #label="slotProps">
            {{ slotProps.nodeData.label }}
        </template>
        <template #subfix>
            <i-cosmic-eye-open />
        </template>
    </tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    Tree,
    TreeNodeState,
    type TreeChangeEvent,
} from 'cosmic-vue';

const treedata = ref([
    {
        label: '0-0',
        key: '0-0',
        children: [
            {
                label: '0-0-0',
                key: '0-0-0',
                open: '0',
                children: [
                    { label: '0-0-0-0', key: '0-0-0-0' },
                    { label: '0-0-0-1', key: '0-0-0-1' },
                    { label: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                label: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        label: '0-1',
        key: '0-1',
        open: '0',
        children: [
            { label: '0-1-0-0', key: '0-1-0-0' },
            { label: '0-1-0-1', key: '0-1-0-1' },
            { label: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        label: '0-2',
        key: '0-2',
    },
]);

function log(msg: any) {
    // eslint-disable-next-line no-console
    console.log(msg);
}

function change(event: TreeChangeEvent) {
    const key = event.key;
    const label = event.label;
    treedata.value = changeData(treedata.value, key, label);
}

function changeData(arr: any, key: string, value: string) {
    arr.forEach((obj: any) => {
        if(obj.key === key) {
            obj.label = value;
        }
        if(obj.children && obj.children.length) {
            obj.children = changeData(obj.children, key, value);
        }
    });
    return arr;
}
</script>