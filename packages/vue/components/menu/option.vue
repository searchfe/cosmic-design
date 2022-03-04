<script lang="ts" setup>
import { inject, computed } from 'vue';
import {disabledToState} from '../utils/state.ts';
import _styles from 'cosmic-design/menu-item.module.css';

const props = withDefaults(defineProps<{
    disabled: boolean,
    label: string,
    value: string
    styles: Record<string, string>,
}>(), {
    styles: _styles,
});

const cotext = inject('menuKey');

const state = disabledToState(props.disabled);

const selectState = computed(() => {
    return cotext.select.isSelected(props.value) ? 'selected' : '';
}); 


</script>

<template>
    <li 
        :class="[props.styles.root, state, cotext.props.size, selectState]"
        @click="() => select.setSelection({value: props.value, label: props.label})"
    >
        {{ label }}
    </li>
</template>