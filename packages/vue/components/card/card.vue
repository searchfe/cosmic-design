<script setup lang="ts">
import { card as styles } from 'cosmic-ui';

withDefaults(defineProps<{
    styles?: CSSModuleClasses
    title?: string
}>(), {
    styles
})
</script>

<template>
    <section :class="[styles.card]">
        <section class="header">
            <h1>{{ title }}</h1>
        </section>
        <slot name="footer"></slot>
    </section>
</template>
