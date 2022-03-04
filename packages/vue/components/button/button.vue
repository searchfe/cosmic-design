<script setup lang="ts">
import _styles from 'cosmic-design/button.module.css';
import { ref } from 'vue';
    
const props = defineProps({
    styles: {
        type: Object,
        default: _styles,
    },
    size: {
        type: String,
        default: 'xs',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
const state = ref(props.disabled? 'disabled': 'normal');
</script>
<template>
    <div :class="[styles.button, state, size]">
        <slot
            name="prefix"
            :class="[styles.prefix, size]"
        />
        <slot :class="[styles.label]" />
        <slot
            name="subfix"
            :class="[styles.subfix , size]"
        />
    </div>
</template>
