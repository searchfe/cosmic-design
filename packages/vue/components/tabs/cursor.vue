<script setup lang="ts">
import { tabs as _styles } from 'cosmic-ui';

const props = defineProps({
    center: {
        type: Number,
        default: 0,
    },
});

const styles = _styles;

</script>

<template>
    <div
        v-if="props.center !== 0"
        :class="[styles['active-cursor']]"
        :style="{ left: `${props.center}px` }"
    />
</template>