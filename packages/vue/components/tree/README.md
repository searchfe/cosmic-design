## tree

a component to show tree data

## usage

There are two ways to use the component. The API are similar.

### json data

```vue
<template>
    <c-tree :data="treeData" />
</template>

<script setup>
import { Tree as CTree } from 'cosmic-vue';

const data = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
];
</script>
```

### treenode

```vue
<script setup>
import { Tree as CTree } from 'cosmic-vue';
</script>

<template>
    <c-tree>
        <c-tree-node key="0-0" title="parent 1">
            <c-tree-node key="0-0-0" title="parent 1-0">
                <c-tree-node key="0-0-0-0" title="leaf" />
                <c-tree-node key="0-0-0-1" title="leaf" />
                <c-tree-node key="0-0-0-2" title="leaf" />
            </c-tree-node>
            <c-tree-node key="0-0-1" title="parent 1-1">
                <c-tree-node key="0-0-1-0" title="leaf" />
            </c-tree-node>
        </c-tree-node>
    </c-tree>
</template>
```

### API

#### Tree props

| param           | description                                                  | type           | default               |
| --------------- | ------------------------------------------------------------ | -------------- | --------------------- |
| data            | tree nodes data, which is taken precedence over node nesting | object[]       | []                    |
| data.key        | node key                                                     | string         | auto generated string |
| data.title      | node title                                                   | string         | ''                    |
| data.children   | node subtree                                                 | object[]       | []                    |
| data.indentStep | node indent, number use px, string for other unit            | string、number | 16                    |
| data.treeIcon   | tree icon name                                               | string         | ''                    |
| data.leafIcon   | leaf icon name                                               | string         | ''                    |
| data.extra      | extra icon name                                              | string         | ''                    |

#### TreeNode

| param    | description     | type     | default               |
| -------- | --------------- | -------- | --------------------- |
| key      | node key        | string   | auto generated string |
| title    | node title      | string   | ''                    |
| children | node subtree    | object[] | []                    |
| treeIcon | tree icon name  | slot     |                       |
| leafIcon | leaf icon name  | slot     |                       |
| extra    | extra icon name | slot     |                       |

#### event

| name       | description         | callback interface                                                         |
| ---------- | ------------------- | -------------------------------------****------------------------------------- |
| expand     | event on toggle     | (data: { expandedKeys: string[], key: string, expanded: boolean }) => void |
| extraClick | event on clickExtra | (data: { key: string }) => void                                            |

> note: set custom indentStep by style
