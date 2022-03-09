<script lang="ts" setup>
import { layout as _styles} from 'cosmic-ui';

</script>

<template>
    <header :class="[_styles.layout, _styles.header]">
        <slot />
    </header>
</template>
