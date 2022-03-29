<script setup lang="ts">
import { Cascader } from 'cosmic-vue';
import { ref } from 'vue';
const selected = ref([]);
const source = ref([
    {
        name: '视觉搜索',
        children: [
            {
                name: '识货',
                children: [{ name: '通用版' }, { name: '春节' }, { name: '购物节' }],
            },
            {
                name: '人脸识别',
            },
        ],
    },
    
    {
        name: '视频多模沉浸',
    },
    {
        name: '语音搜索',
    },
]);
function fn(e) {
    // eslint-disable-next-line no-console
    console.log('app....', e);
}
</script>

<template>
    <Cascader
        v-model:source="source"
        v-model:selected="selected"
        popover-height="200px"
        @update:selected="fn"
    />
</template>
