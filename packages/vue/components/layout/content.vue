<script lang="ts" setup>
import _styles from 'cosmic-design/layout.module.css';

</script>

<template>
    <main :class="[_styles.content]">
        <slot />
    </main>
</template>
