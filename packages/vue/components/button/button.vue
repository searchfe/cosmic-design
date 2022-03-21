<script setup lang="ts">
import { button as _styles} from 'cosmic-ui';
import { ref, useSlots } from 'vue';
const slots = useSlots();

const props = defineProps({
    styles: {
        type: Object,
        default: _styles,
    },
    size: {
        type: String,
        default: 'md',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
const stateClass = ref(props.disabled? 'disabled': 'normal');
</script>
<template>
    <div :class="[styles.button, size, stateClass]">
        <span v-if="slots.prefix" :class="[styles.prefix, size]">
            <slot name="prefix" />
        </span>
        <span v-if="slots.default" :class="[styles.content, size]">
            <slot />
        </span>
        <span v-if="slots.subfix" :class="[styles.subfix, size]">
            <slot name="subfix" />
        </span>
    </div>
</template>
