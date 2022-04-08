<script lang="ts" setup>
import {computed} from 'vue';
import { menu as _styles} from 'cosmic-ui';
import {disabledToState} from '../utils/state';
import type { Size } from '../types/idnex';

const props = withDefaults(defineProps<{
    disabled?: boolean,
    label: string,
    value: string,
    size: Size,
    selected?: boolean,
    hasCheck: boolean,
    offset?: number,
    // eslint-disable-next-line
    styles: any,
}>(), {
    selected: false,
    hasCheck: true,
    styles: _styles,
    offset: 0,
});

const emits = defineEmits(['onChange']);

const state = disabledToState(props.disabled as boolean);

const selectedStyle = computed(() => {
    return props.selected ? 'active' : '';
});

</script>

<template>
    <li
        @click.stop="() => emits('onChange', {value: props.value, label: props.label})"
    >
        <div
            :class="[styles['menu-option'], state, props.size, selectedStyle]"
        >
            <slot>
                <div
                    class="w-full h-full flex"
                    :style="{paddingLeft: offset + 'px'}"
                >
                    <span :class="[styles.option]">
                        <span :class="[styles.label, props.size]">
                            {{ label }}
                        </span>
                        <slot name="right" />
                        <i-cosmic-check
                            v-if="hasCheck && selected"
                        />
                    </span>
                </div>
            </slot>
        </div>
    </li>
</template>
