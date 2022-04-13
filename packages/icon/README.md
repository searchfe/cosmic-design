<div id="top"></div>


<!-- PROJECT SHIELDS -->
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Cosmic Design Icon</h3>
  <p align="center">
    The Icon set for all the Cosmic Design components lib
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Cosmic-design supports many frameworks, e.g. vue、san. This project provide the  icon set for them.

### Features

* Universal. Powered by Iconify and unplugin, suport importing knowned sets and combinning them.
* Easy to Customize(DOING). You can totally use your own's icons by put in svg or config json data server
* On-demand. Only bundle the icons you really use, while having all the options.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [iconify](https://nextjs.org/)
* [unplugin-icons](https://github.com/antfu/unplugin-icons)
* [vite](https://vuejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* if you develop cosmic-design, use pnpm
  ```sh
  npm install pnpm@latest -g
  ```

### Installation

For non cosmic-design project:
```sh
npm install cosmic-design-icon
```
cosmic-design use pnpm workspace feature to import cosmic-design-icon locally

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

### build tools config
It has the same using way with unplugin-icons, e.g. vite config:
```typescript
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import vue from '@vitejs/plugin-vue';
import { cosmicCollectionFactory } from './index';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';


export default defineConfig({
    plugins: [
        vue(),
        Icons({
            compiler: 'vue3',
            customCollections: {
                ...cosmicCollectionFactory(),
            },
        }),
        Components({
            dts: true,
            resolvers: [
                IconsResolver({
                    customCollections: ['cosmic'],
                }),
            ],
        }),
    ],
    server: {
        open: '/site/index.html',
    },
});
```

### refer icons in your components
Above config supporting [Auto Import](https://github.com/antfu/unplugin-icons#auto-importing), more use case refer to [unplugin-icons](https://github.com/antfu/unplugin-icons) , default name conversion is:

```
{prefix}-{collection}-{icon}
```

and use the icon in vue:


```vue
<template>
    <div>Cosmic Icon</div>
    <i-cosmic-test />
</temp  late>
```

### add more icons
In cosmic-design, just put svg file in the [svg](./svg) folder and run in [cosmic icon folder](./):

```
pnpm run build
```

then commit your changes.

Other project config support is Doing.


### examples
For living examples, please refer to the [site folder](./site)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Config option
- [ ] JSON Data Server
- [ ] Mode: data-url、inline
- [ ] auto preview new file
- [ ] normalize svg files in ./svg folder
- [ ] remove tsnode
- [ ] split json

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement"(Note: please use pnpm and git-cz).
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (cd to root folder and `pnpm run commit`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/searchfe/cosmic-design.svg?style=for-the-badge
[license-url]: https://github.com/searchfe/cosmic-design/blob/master/LICENSE
