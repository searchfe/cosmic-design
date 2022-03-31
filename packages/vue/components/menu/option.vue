<script lang="ts" setup>
import {computed} from 'vue';
import { menu as _styles} from 'cosmic-ui';
import {disabledToState} from '../utils/state';
import { type Size } from '../types/idnex';

const props = withDefaults(defineProps<{
    disabled?: boolean,
    label: string,
    value: string,
    size: Size,
    selected?: boolean,
    hasCheck: boolean,
    // eslint-disable-next-line
    styles: any,
}>(), {
    selected: false,
    hasCheck: true,
    styles: _styles,
});

const emits = defineEmits(['onChange']);

const state = disabledToState(props.disabled as boolean);

const selectedStyle = computed(() => props.selected ? 'active' : '');

</script>

<template>
    <li
        :class="[styles['menu-option'], state, props.size, selectedStyle]"
        class="flex"
        @click="() => emits('onChange', {value: props.value, label: props.label})"
    >
        <span :class="[styles.option]">
            <span :class="[styles.label, props.size]">
                {{ label }}
            </span>
            <slot name="right" />
            <i-cosmic-check
                v-show="hasCheck && selected"
            />
        </span>
    </li>
</template>
