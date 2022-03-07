<script lang="ts" setup>
import { inject } from 'vue';
import { HAS_SIDER_PROVIDER_KEY } from './types';

import type { HasSiderProvider } from './types';

import _styles from 'cosmic-design/layout.module.css';

const siderHook = inject<HasSiderProvider>(HAS_SIDER_PROVIDER_KEY);

siderHook?.setHasSider();
</script>

<template>
    <aside :class="[_styles.sider]">
        <slot />
    </aside>
</template>
