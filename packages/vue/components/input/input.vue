<script setup lang="ts">
import {input as _styles } from 'cosmic-ui';
import { ref, useSlots } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: '',
    },
    state: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'md',
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
    styles: {
        type: Object,
        default: _styles,
    },
});


const emits = defineEmits(['onChange', 'onBlur', 'onFocus', 'onInput', 'update:value']);

const state = ref(props.disabled ? 'disabled' : props.state ?? 'normal');

const isHavePrefix = !!useSlots().prefix?.();

const isHaveSubfix = !!useSlots().subfix?.();

const inputRef = ref(null);

const focusHandler = (event: FocusEvent) => {
    emits('onFocus', event);
};

const blurHandler = (event: FocusEvent) => {
    emits('onBlur', event);
};

const changeHandler = (event: Event) => {
    emits('onChange', {event, value: (event.target as HTMLInputElement).value});
};

const inputHandler = (event: Event) => {
    const target = event?.target as HTMLInputElement;
    emits('onInput', {event, value: target.value});
    emits('update:value', target.value);
};

const focus = () => {
    (inputRef.value as unknown as HTMLInputElement).focus();
};

defineExpose({
    focus,
});



</script>

<template>
    <div
        :class="[props.styles.root, size, state]"
        class="flex w-full"
    >
        <span
            v-if="isHavePrefix"
            :class="styles.prefix "
            class="flex items-center"
        >
            <slot
                name="prefix"
            />
        </span>


        <input
            v-bind="{value, disabled, placeholder, type, maxlength, readonly}"
            ref="inputRef"
            :class="[props.styles.input, size]"
            class="m-0 p-0 w-full"
            @change.stop="changeHandler"
            @input="inputHandler"
            @focus.stop="focusHandler"
            @blur.stop="blurHandler"
        >
        <span
            v-if="isHaveSubfix"
            :class="props.styles.subfix "
            class="flex items-center"
        >
            <slot
                name="subfix"
            />
        </span>
    </div>
</template>
