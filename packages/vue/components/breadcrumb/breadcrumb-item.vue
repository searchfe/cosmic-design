<template>
    <span :class="styles['breadcrumb-item']" class="inline-flex items-center">
        <span
            ref="link"
            role="link"
            :class="[!!to ? styles['link'] : '']"
            @click="onClick"
        >
            <slot />
        </span>
        <span
            v-if="separatorIcon"
            :class="[styles.separator, styles.icon, size]"
            class="inline-flex items-center"
        >
            <component
                :is="separatorIcon"
            />
        </span>
        <span
            v-else
            role="presentation"
            :class="[styles.separator, size]"
        >
            {{ separator }}
        </span>
    </span>
</template>

<script lang="ts" setup>
import { breadcrumb as styles} from 'cosmic-ui';
import { inject, ref, getCurrentInstance, type Component, type VNode } from 'vue';
import type { Router, RouteLocationRaw } from 'vue-router';

const props = withDefaults(defineProps<{
    to: RouteLocationRaw;
    replace: boolean;
}>(), {
    to: '',
    replace: false,
});
const instance = getCurrentInstance()!;
const router = instance.appContext.config.globalProperties.$router as Router;
const parent = inject<{
    separator: string;
    separatorIcon: string | Component | VNode,
    size: string;
}>('breadcrumb');
const { separator, separatorIcon, size } = parent ?? {};
const link = ref<HTMLSpanElement>();
const onClick = () => {
    if (!props.to || !router) return;
    props.replace ? router.replace(props.to) : router.push(props.to);
};
</script>