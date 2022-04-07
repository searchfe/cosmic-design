<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue';
import { flattenChildren } from '../utils/props';
import { menu as _styles} from 'cosmic-ui';

withDefaults(defineProps<{
    label: string,
    value: string,
    size: string;
    offset?: number,
    indent?: number,
    styles?: any,
    select?: any
}>(), {
    offset: 0,
    indent: 10,
    size: 'sm',
    styles: _styles,
});

const emits = defineEmits(['onChange']);

const open = ref(false);

const children = computed(() =>  flattenChildren(useSlots().default?.() || []));


function changeVisible() {
    open.value = !open.value;
}

function onChange(event: any) {
    emits('onChange', event);
}

</script>


<template>
    <ul 
        :class="styles.ul"
        class="p-0 m-0"
    >
        <li 
            :class="[styles['menu-option'], size]"
            class="flex"
            @click.stop="changeVisible"
        >
            <span :class="styles.option">
                <slot name="title">
                    {{ label }}
                </slot>
                <slot name="arrow">
                    <i-cosmic-arrow-up v-if="open" />
                    <i-cosmic-arrow-down v-if="!open" />
                </slot>
            </span>
            
        </li>
        <template v-if="open">
            <component 
                :is="child"
                v-for="child of children"
                :key="child"
                v-bind="child.props"
                :size="size"
                :offset="offset + indent"
                :selected="select?.selected(child.props)"
                @on-change="onChange"
            />
        </template>
        
    </ul>
</template>