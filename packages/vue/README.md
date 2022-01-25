# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Rollup/ Vite Plugin

### Usage

Usage 1:
```html
<script setup>
import Button from 'cosmic-vue/components/button.vue'
</script>
<template>
    <Button c-style="icon">
</template>

```

After PreCompile:
```html
<script setup>
import Button from 'cosmic-vue/components/button.vue'
import _ModuleCSS_1 from '@cosmic-design/ui/button-icon.module.css'
</script>
<template>
    <Button :styles="_ModuleCSS_1">
</template>

```

Usage 2:
```html
<script setup>
import Button from './button.vue'
</script>
<template>
    <Button c-style="./button-custom">
    <Button c-style="./button-custom.module.css">
</template>

```

Usage 3:
```html
<script setup>
import Button from './button.vue'
</script>
<template>
    <Button c-style="-custom">
</template>

```


### Config:

```javascript
/** vite.config.js */
import { cStyle } from 'cosmic-vue/plugin';
export default defineConfig({
    plugins: [cStyle(), vue()],
});

```