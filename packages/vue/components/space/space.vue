<script setup lang="ts">
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
  | number

withDefaults(defineProps<{
  styles?: Record<string, unknown>,
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

</script>
<template>
  <div
    :class="[styles.space, size]"
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
    <slot />
  </div>
</template>
