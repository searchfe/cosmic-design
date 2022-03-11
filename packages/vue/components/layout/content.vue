<script lang="ts" setup>
import { layout as _styles} from 'cosmic-ui';

</script>

<template>
    <main :class="[_styles.content]">
        <slot />
    </main>
</template>
