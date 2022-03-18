<script lang="ts" setup>
import {computed} from 'vue';
import {disabledToState} from '../utils/state';
import { type Size } from '../types/idnex';
import { MenuOption as _styles} from 'cosmic-ui';

const props = withDefaults(defineProps<{
    disabled?: boolean,
    label: string,
    value: string,
    size: Size,
    selected: boolean,
}>(), {
    selected: false,
});

const emits = defineEmits(['onChange']);

const styles = _styles;

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
            <i-cosmic-check
                v-show="selected"
            />
        </span>
    </li>
</template>