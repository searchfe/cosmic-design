<script setup lang="ts">
import { ref } from 'vue';
import _styles from 'cosmic-design/select-option.module.css';

const props = defineProps({
    style: {
        type: Object,
        default: _styles,
    },
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
    styles: {
        type: Object,
        default: _styles,
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

const emits = defineEmits(['onChange']);

const state = ref(props.disabled? 'disabled': 'normal');

const changeHandler = () => {
    emits('onChange', {label: props.label, value: props.value});
};

</script>

<template>
    <li 
        :class="[style.root, state, size, selected ? style.selected : '']"
        @click="changeHandler"
    >
        <slot>
            {{ label }}
        </slot>
    </li>
</template>