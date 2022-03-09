# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Setting Default UI

You should set `resolve.alias` option in your vite.config.js or other build config, such as:

```javascript
// vite.config.js
{
    resolve: {
        alias: {
            'cosmic-ui': 'cosmic-ui-alpha', // default ui of cosmic
            // 'cosmic-ui': resolve('../local-ui-folder'),
        }
    }
}
```

## Replace UI for Component Instance

```vue
<script>
    import { button, buttonRouned } from 'cosmic-ui';
    import { buttonCustomed } from './button-customed.css';
</script>
<template>
    <Button />
    <Button :styles="button" />
    <Button :styles="buttonRouned" />
    <Button :styles="buttonCustomed" />
<template>
```