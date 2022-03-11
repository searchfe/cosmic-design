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
    <section :class="[styles.card, 'flex', 'flex-col']">
        <section :class="[styles.header, 'flex', 'items-center']">
            <section :class="[styles['header-title']]">{{ title }}</section>
            <section :class="[styles['header-extra']]">
                <slot name="header-extra"></slot>
            </section>
        </section>
        <section :class="[styles.content]">
            <slot></slot>
        </section>
        <section :class="[styles.footer]">
            <slot name="footer"></slot>
        </section>
        <section :class="[styles.action]">
            <slot name="action"></slot>
        </section>
    </section>
</template>
