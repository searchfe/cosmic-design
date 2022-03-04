<script setup lang="ts">
import { provide, ref, reactive } from 'vue';
import _styles from 'cosmic-design/select.module.css';
import { Select } from 'cosmic-common';
import { type Size } from './types/idnex';



const props = withDefaults(
    defineProps<{
        modelValue: string,
        styles: Record<string, string>,
        size: Size,
        disabled: boolean,
    }>(), {
        modelValue: void 0, 
        styles: _styles,
        size: 'base',
        disabled: false,
    },
);

const isOpen = ref(false);

const container = ref(null);

const select = reactive(new Select(props.modelValue));

const state = ref(props.disabled ? 'disabled' : 'normal');

select.emit.on('change', () => {
    isOpen.value = false;
});

provide('select', select);
provide('size', props.size);

const clickHhandle = () =>  {
    if (props.disabled) return;
    if (!isOpen.value) isOpen.value = true;
};

window.addEventListener('click', () => {
    isOpen.value = false;
});

</script>

<template>
    <div
        ref="container"
        :class="[styles.root, size, state, isOpen ? 'active' : '']"
        @click.stop="clickHhandle"
    >
        <div :class="[styles.label]">
            {{ select.label }}
        </div>
        <span :class="[styles.arrow, styles.icon, isOpen ? styles.open : '']">
            <i-cosmic-arrow-down />
        </span>
    </div>
    <div
        v-if="isOpen"
        :class="[styles.dropdown]"
    >
        <ul :class="[styles.ul, size]">
            <slot />
        </ul>
    </div>
</template>
