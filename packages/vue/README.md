# Cosmic Vue

Cosmic-vue is a implementation of cosmic, which is a meta component framework.

🚧ing...welcome to contribute!

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
    ├── dist
    │   ├── style.css           # CSS of all components
    │   ├── variables.css           # Design Tokens
    │   ├── utilities.css       # Default utilities class
    │   ├── ui.css              # Bundle CSS = style.css + variables.css + utilities.css
    │   ├── index.es.js         # exports of all css modules in es module
    │   └── index.umd.js        # exports of all css modules in umd
    └── ...

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
