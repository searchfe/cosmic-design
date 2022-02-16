<script setup lang="ts">
    import _styles from 'cosmic-design/input.module.css';
    import { Size, State } from 'cosmic-design';
    import { ref, useSlots, reactive } from 'vue';

    const props = defineProps({
        value: {
            type: String,
            default: ''
        },
        styles: {
            type: Object,
            default: _styles
        },
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'base'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number,
        },
        readonly: {
            type: Boolean,
            default: false
        }
    });



    const emits = defineEmits(['onChange', 'onBlur', 'onFocus', 'onInput', 'update:value'])

    const state = ref(props.disabled ? 'disabled' : 'normal');

    const isFouse = ref(false);

    const inputRef = ref(null);

    const focusHandler = (event: FocusEvent) => {
        emits('onFocus', event);
    }

    const blurHandler = (event: FocusEvent) => {
        emits('onBlur', event);
    }

    const changeHandler = (event:InputEvent) => {
        emits('onInput', {event, value: event.target.value});
    }

    const inputHandler = (event: InputEvent) => {
        emits('onInput', {event, value: event.target.value});
        emits('update:value', event.target.value);
    }


    

</script>

<template>
    <div :class="[styles.root, size, state]">
        <slot name='prefix' :class="[styles.prefix, size]"></slot>
        <input
            :class="[styles.input, size, state]"
            v-bind="{value, disabled, placeholder, type, maxlength, readonly}"
            ref="inputRef"
            @change="changeHandler"
            @input="inputHandler"
            @focus="focusHandler" 
            @blur="blurHandler"
        >
        <slot name='subfix' :class="[styles.subfix, size]"></slot>
    </div>
</template>