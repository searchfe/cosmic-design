<template>
    <div
        ref="breadcrumb"
        :class="[styles.breadcrumb, size]"
        aria-label="Breadcrumb"
        role="navigation"
    >
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { breadcrumb as styles} from 'cosmic-ui';
import type { Component, VNode } from 'vue';
import { provide, ref, onMounted } from 'vue';

const props = withDefaults(defineProps<{
    separator?: string;
    separatorIcon?: string | Component | VNode;
    size?: string;
}>(), {
    separator: '/',
    size: 'md',
});
const breadcrumb = ref<HTMLDivElement>();
provide('breadcrumb', props);
onMounted(() => {
    const items = breadcrumb.value!.children;
    if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
    }
});
</script>
