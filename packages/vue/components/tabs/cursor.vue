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
});

</script>

<template>
    <div
        v-if="props.center !== 0"
        :class="[styles.cursor]"
        :style="{ left: `${props.center}px` }"
    />
</template>