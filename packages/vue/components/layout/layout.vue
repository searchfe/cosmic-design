<script lang="ts" setup>
import { HAS_SIDER_PROVIDER_KEY } from './types';
import { ref, provide } from 'vue';
import { layout as _styles} from 'cosmic-ui';


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
