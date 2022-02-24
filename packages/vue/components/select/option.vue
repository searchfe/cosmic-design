<script setup lang="ts">
import { inject, ref, computed } from 'vue'
import _styles from 'cosmic-design/select-option.module.css';

const props = defineProps({
    style: {
        type: Object,
        default: _styles,
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
});
const select = inject('select');
const size = inject('size');
const state = ref(props.disabled? 'disabled' : 'normal');

const changeHandler = () => {
    select.setSelection({value: props.value, label: props.label})
};

const isSelected = computed(() => select.value === props.value)

</script>

<template>
    <li 
        :class="[style.root, state, size, isSelected ? style.selected : '']"
        @click.stop="changeHandler"
    >
        <slot>
            {{isSelected ? '12' + label : label}}
        </slot>
    </li>
</template>