<script lang="ts" setup>
import _styles from 'cosmic-design/layout.module.css';

</script>

<template>
    <header :class="[_styles.layout, _styles.header]">
        <slot />
    </header>
</template>
