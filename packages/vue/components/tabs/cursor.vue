<script setup lang="ts">
import { tabs as _styles } from 'cosmic-ui';

const props = defineProps({
    center: {
        type: Number,
        default: 0,
    },
    styles: {
        type: Object,
        default: _styles,
    },
    size: {
        type: String,
        default: 'md',
    },
});

</script>

<template>
    <div
        v-if="props.center !== 0"
        :class="[styles.cursor, size]"
        :style="{ left: `${props.center}px` }"
    />
</template>