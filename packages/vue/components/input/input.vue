<script setup lang="ts">
import _styles from 'cosmic-design/input.module.css';
import { ref } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: '',
    },
    styles: {
        type: Object,
        default: _styles,
    },
    type: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'base',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: '',
    },
    maxlength: {
        type: Number,
        default: undefined,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
});



const emits = defineEmits(['onChange', 'onBlur', 'onFocus', 'onInput', 'update:value']);

const state = ref(props.disabled ? 'disabled' : 'normal');

const inputRef = ref(null);

const focusHandler = (event: FocusEvent) => {
    emits('onFocus', event);
};

const blurHandler = (event: FocusEvent) => {
    emits('onBlur', event);
};

const changeHandler = (event: Event) => {
    emits('onInput', {event, value: (event.target as HTMLInputElement).value});
};

const inputHandler = (event: Event) => {
    const target = event?.target as HTMLInputElement;
    emits('onInput', {event, value: target.value});
    emits('update:value', target.value);
};


    

</script>

<template>
    <div :class="[styles.root, size, state]">
        <slot
            name="prefix" 
            :class="[styles.prefix, size]"
        />
        <input
            v-bind="{value, disabled, placeholder, type, maxlength, readonly}"
            ref="inputRef"
            :class="[styles.input, size, state]"
            @change="changeHandler"
            @input="inputHandler"
            @focus="focusHandler" 
            @blur="blurHandler"
        >
        <slot
            name="subfix" 
            :class="[styles.subfix, size]"
        />
    </div>
</template>