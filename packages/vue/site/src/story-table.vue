<script setup lang="ts">
import { h } from 'vue';
import { Table, type TableColumnOptions } from 'cosmic-vue';

const columns = [
    {
        type: 'selection',
    },
    {
        key: 'name',
        title: 'Name',
        render(data, index) {
            return h('section', { style: 'color: var(--color-primary)' }, `${data['name']}-${index}`);
        },
    },
    {
        key: 'age',
        title: 'Age',
    },
    {
        key: 'address',
        title: 'Address',
    },
    {
        key: 'tel',
        title: 'Tel',
    },
] as TableColumnOptions[];

const data = [
    {
        name: 'Name A',
        age: 'Age A',
        address: 'Address A',
        tel: 'Tel A',
    },
    {
        name: 'Name B',
        age: 'Age B',
        address: 'Address B',
        tel: 'Tel B',
    },
    {
        name: 'Name C',
        age: 'Age C',
        address: 'Address C',
        tel: 'Tel C',
    },
    {
        name: 'Name D',
        age: 'Age D',
        address: 'Address D',
        tel: 'Tel D',
    },
];

// eslint-disable-next-line @typescript-eslint/no-empty-function
function updateCheckedRowsHandler(_rows: Set<unknown>) {}
</script>

<template>
    <Table
        :columns="columns"
        :data="data"
        style="width: 100%;"
        :row-key="row => row.name"
        :checked-row-keys="['Name A']"
        @on-update:checked-row-keys="updateCheckedRowsHandler"
    />
</template>
