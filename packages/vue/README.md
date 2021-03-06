# Cosmic Vue

Cosmic-vue is a implementation of cosmic, which is a meta component framework.

π§ing...welcome to contribute!

[Story Book](https://searchfe.github.io/cosmic-design/vue/)

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

## Import UI CSS

Default Cosmic UI packages provides the following:

    .
    βββ dist
    β   βββ style.css           # CSS of all components
    β   βββ variables.css           # Design Tokens
    β   βββ utilities.css       # Default utilities class
    β   βββ ui.css              # Bundle CSS = style.css + variables.css + utilities.css
    β   βββ index.es.js         # exports of all css modules in es module
    β   βββ index.umd.js        # exports of all css modules in umd
    βββ ...

Generally, you should import `ui.css` in your project.

If you need to decide some design token yourself, you can import them separately:

```css
@import 'cosmic-ui/style.css';
@import 'cosmic-ui/utilities.css';
@import './your-variables.css';
```

It is not necessary to import `utilities.css` if using utility-first CSS framework (Windi Css / Tailwind CSS) in your project.


## Replace UI for Component Instance

```html
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
