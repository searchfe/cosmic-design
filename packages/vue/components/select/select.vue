<script setup lang="ts">
import { provide, toRefs, ref, watchEffect, reactive } from 'vue';
import _styles from 'cosmic-design/select.module.css';
import { Select } from 'cosmic-common';
import { Size, State  } from './types/idnex';



const props = withDefaults(
    defineProps<
        modelValue: String,
        styles: Record<String, String>,
        size: Size,
        disabled: Boolean,
    >(),{
    modelValue: void 0, 
    styles: _styles,
    size: 'base',
    disabled: false
});

const label = ref('')

const isOpen = ref(false);

const container = ref(null);

const select = reactive(new Select(props.modelValue));

const state = ref(props.disabled? "disabled": "normal");

select.emit.on('change', (data) => {
    isOpen.value = false;
});

provide('select', select);
provide('size', props.size);

const clickHhandle = () =>  {
    console.log("clickHhandle", props.disabled)
    if (props.disabled) return;
    if (!isOpen.value) isOpen.value = true;
}

window.addEventListener('click', (event) => {
    isOpen.value = false;
});

</script>

<template>
    <div
        ref="container"
        :class="[styles.root, size, state, isOpen ? 'active' : '']"
        @click.stop="clickHhandle"
    >
        <div :class="[styles.label]">{{select.label}}</div>
        <span  :class="[styles.arrow, styles.icon, isOpen ? styles.open : '']">
            <i-cosmic-arrow />
        </span>
    </div>
    <div
        :class="[styles.dropdown]"
        v-if="isOpen"
    >
        <ul :class="[styles.ul, size]">
            <slot></slot>
        </ul>
    </div>
</template>