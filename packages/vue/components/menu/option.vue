<script lang="ts" setup>
import {computed} from 'vue';
import {disabledToState} from '../utils/state';
import { type Size } from '../types/idnex';
import { menuItem as _styles} from 'cosmic-ui';

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

const state = disabledToState(props.disabled);

const selectedStyle = computed(() => props.selected ? 'selected' : '');

</script>

<template>
    <li 
        :class="[styles.root, state, props.size, selectedStyle]"
        @click="() => emits('onChange', {value: props.value, label: props.label})"
    >
        {{ label }}
    </li>
</template>