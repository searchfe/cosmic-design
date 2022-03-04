<script lang="ts" setup>
import { ref, provide, reactive } from 'vue';
import { type Size } from './types/idnex';
import { Select } from 'cosmic-common';

import _styles from 'cosmic-design/menu.module.css';


const props = withDefaults(defineProps<{
    defaultActive: string,
    styles: Record<string, string>,
    size: Size,
    isOpen: boolean,
    disabled: boolean,
    selected: Record<string, string>,

}>(), {
    styles: _styles,
    size: 'sm',
    isOpen: false,
    disabled: false,
});

const emits = defineEmits(['onChange']);

const select = reactive(new Select(props.defaultActive));

const state = ref(props.disabled ? 'disabled' : 'normal');

select.subscribeChange(() => {
    emits('onChange', select.selection);
});

provide('menuKey', {
    props,
    select,
});

</script>

<template>
    <div :class="[props.styles.root, size, state]">
        <slot name="activator" />
        <slot name="menu">
            <div
                v-if="isOpen"
                :class="[props.styles.dropdown]"
            >
                <ul 
                    :class="[props.styles.menu, size]"
                >
                    <slot />
                </ul>
            </div>
        </slot>
    </div>
</template>