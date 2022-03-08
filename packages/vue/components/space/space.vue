<script setup lang="ts">
import { computed, ref } from "vue";
import _styles from 'cosmic-design/space.module.css';

type Align =
    | 'start'
    | 'end'
    | 'center'
    | 'baseline'

type Justify =
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'

type Direction =
    | 'horizontal'
    | 'vertical'

type Size =
    | 'sm'
    | 'md'
    | 'lg'

const props = withDefaults(defineProps<{
    styles?: CSSModuleClasses
    direction?: Direction,
    size?: Size | [Size, Size]
    align?: Align,
    justify?: Justify,
    inline?: boolean,
    wrap?: boolean,
}>(), {
    styles: _styles,
    direction: 'horizontal',
    size: 'sm',
    align: 'center',
    justify: 'start',
    inline: true,
    wrap: false
});

const hGap = ref<Size>();
const vGap = ref<Size>();
const vertical = computed(() => props.direction === 'vertical');

if (props.size instanceof Array) {
    hGap.value = props.size[0];
    vGap.value = props.size[1];
} else if (props.size) {
    hGap.value = vGap.value = props.size;
}
</script>
<template>
    <section
        :class="[styles.root, direction, vertical ? hGap : vGap]"
        :style="{
            display: inline ? 'inline-flex' : 'flex',
            flexDirection: direction === 'vertical' ? 'column' : 'row',
            justifyContent: ['start', 'end'].includes(justify)
                ? 'flex-' + justify
                : justify,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            alignItems: align
        }"
    >
        <slot :class="[vertical ? vGap : hGap]"></slot>
    </section>
</template>
