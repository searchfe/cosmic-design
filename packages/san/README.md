# cosmic san components

The san components of cosmic design
## Install
```shell
npm install cosmic-ui-san -D
```
## Config

### ts project
rollup or vite config:
```ts
import { defineConfig } from 'vite';
import path from 'path';
import { cStyle } from 'cosmic-ui-san/plugin/vanilla/rollup-plugin-san-cosmic';


export default defineConfig({
    build: {
        rollupOptions: {
            external: ['san', 'your-design-lib'],
        },
    },
    plugins: [
        cStyle({/* options */}),
    ]
});

```
### SFC project
DOING

## Options
|option|type|desc|default|
|---|---|---|---|
|target|string|component tag's attribute name|c-style|
|propName|string|the precompiled name of component tag's attribute|styles|
|basePath|string|css module's import base path|cosmic-ui|

## Usage

### Usage 1:
```ts
import { Button } from 'cosmic-san';

export class Page extends Component {

    static template = `
        <Button
            c-style="icon"
        >
            button text
        </Button>
    `;
}
```

After PreCompile:
```ts
import { Button } from 'cosmic-san';
import { ButtonIcon as _ModuleCSS_1 } from 'cosmic-ui/button-icon.module.css'

export class Page extends Component {

    static template = `
        <Button
            styles="_ModuleCSS_1"
        >
            button text
        </Button>
    `;
}
```

### Usage 2:

```ts
import { Button } from 'cosmic-san';

export class Page extends Component {

    static template = `
        <Button
            c-style="icon"
        >
            button text
        </Button>
    `;
}
```

After PreCompile:
```ts
import { Button } from 'cosmic-san';
import { ButtonIcon as _ModuleCSS_1 } from 'cosmic-ui/button-icon.module.css';

export class Page extends Component {

    static template = `
        <Button
            styles="_ModuleCSS_1"
        >
            button text
        </Button>
    `;
}
```

## Usage 3:
```ts
import { Button } from 'cosmic-san';

export class Page extends Component {

    static template = `
        <Button
            c-style="./button-custom"
        >
            button text
        </Button>
        <Button
            c-style="./button-custom.module.css"
        >
            button text
        </Button>
    `;
}
```

After PreCompile:
```ts
import { Button } from './button.ts';
import _ModuleCSS_1 from './button.custom.css';
import _ModuleCSS_2 from './button.custom.module.css';

export class Page extends Component {

    static template = `
        <Button
            styles="_ModuleCSS_1"
        >
            button text 1
        </Button>
        <Button
            styles="_ModuleCSS_2"
        >
            button text 2
        </Button>
    `;
}
```

Usage 4:
```ts
import { Button } from 'cosmic-san';

export class Page extends Component {

    static template = `
        <Button
            c-style="-custom"
        >
            button text
        </Button>
    `;
}

```

After PreCompile:
```ts
import { Button } from 'cosmic-san';
import _ModuleCSS_1 from 'custom.module.css'

export class Page extends Component {

    static template = `
        <Button
            styles="_ModuleCSS_1"
        >
            button text
        </Button>
    `;
}
```

## TODO:
1. Support san component's static components property
2. more robust import and export ability