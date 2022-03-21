<script setup lang="ts">
import { ref } from 'vue';
import { tabPane as _styles } from 'cosmic-ui';

const props = defineProps({
    size: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    selected: {
        type: Boolean,
        default: false,
    },
});

const styles = _styles;

const emits = defineEmits(['onChange']);

const state = ref(props.disabled ? 'disabled' : 'normal');

const changeHandler = () => {
    emits('onChange', { label: props.label, value: props.value });
};

</script>

<template>
    <div
        :class="[styles['tab-pane'], state, size, selected ? ['active', styles['active']] : '']"
        class="flex"
        @mousedown="changeHandler"
    >
        <span :class="[styles.pane]">
            <slot>{{ label }}</slot>
        </span>
        <div v-if="selected" :class="[styles['tab-pane-active-hint']]" />
    </div>
</template>