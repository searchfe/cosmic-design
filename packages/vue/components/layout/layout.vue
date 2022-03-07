<script lang="ts" setup>
import { HAS_SIDER_PROVIDER_KEY } from './types';
import { ref, provide } from 'vue';
import _styles from 'cosmic-design/layout.module.css';


const hasSider = ref(false);

provide(HAS_SIDER_PROVIDER_KEY, {
    setHasSider() {
        hasSider.value = true;
    },
    hasSider,
});

</script>

<template>
    <section :class="[_styles.layout, hasSider ? _styles['has-sider'] : '']">
        <slot />
    </section>
</template>
