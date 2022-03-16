<script setup lang="ts">
import { card as styles } from 'cosmic-ui';

withDefaults(defineProps<{
    styles?: CSSModuleClasses
    title?: string
}>(), {
    styles,
});
</script>

<template>
    <section :class="[styles.card, 'flex', 'flex-col']">
        <section v-if="title" :class="[styles.header, 'flex', 'items-center']">
            <section :class="[styles['header-title']]">
                {{ title }}
            </section>
            <section v-if="$slots['header-extra']" :class="[styles['header-extra']]">
                <slot name="header-extra" />
            </section>
        </section>
        <section v-if="$slots.default" :class="[styles.content]">
            <slot />
        </section>
        <section v-if="$slots.footer" :class="[styles.footer]">
            <slot name="footer" />
        </section>
        <section v-if="$slots.action" :class="[styles.action]">
            <slot name="action" />
        </section>
    </section>
</template>
