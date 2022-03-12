<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import { collapseItem as styles } from 'cosmic-ui';

export interface CollapseItemProps {
    header: string;
    datakey: string;
    selected: boolean;
}

const props = withDefaults(defineProps<CollapseItemProps>(), {
    header: '',
    datakey: '',
    selected: false,
});

const itemKey = ref(getCurrentInstance()?.vnode.key || props.datakey);

const emits = defineEmits(['toggle']);

const hovering = ref(false);
const hasExtra = ref(false);


function onClick() {
    emits('toggle', { key: itemKey.value });
}

function onMouseEnter() {
    hovering.value = true;
}

function onMouseLeave() {
    hovering.value = false;
}

</script>

<template>
    <div
        class="flex flex-row justify-start items-center font-semibold"
        :class="[styles.item, selected ? styles.selected : '']"
        @click.stop="onClick"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <div :class="styles.prefix" class="flex items-center">
            <slot name="prefix" />
        </div>
        <div :class="styles.header" class="flex items-center">
            {{ header }}
        </div>
        <div
            class="flex items-center"
            :class="[styles.extra, !hovering && hasExtra ? 'hidden' : '']"
        >
            <slot name="extra" />
        </div>
    </div>
    <div :class="[selected ? '' : 'hidden']" class="flex items-center">
        <slot />
    </div>
</template>
