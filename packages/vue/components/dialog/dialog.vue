<script lang="ts" setup>
import { dialog as _styles} from 'cosmic-ui';
interface DialogOptions {
    open: boolean;
    width: string | number;
    height: string | number;
}

withDefaults(defineProps<DialogOptions>(), {
    open: false,
    width: 'auto',
    height: 'auto',
});

</script>

<template>
    <div :class="_styles.dialog" style="width: {width}; height: {height}" :style="{ display: open ? 'block' : 'none'}">
        <div class="text-xl font-bold">
            <slot name="title" />
        </div>
        <slot />
        <div class="w-full flex justify-center items-center">
            <slot name="actions" />
        </div>
    </div>
</template>

