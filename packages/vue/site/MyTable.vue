<script setup lang="ts">
import { Table, type TableColumnOptions } from 'cosmic-vue';

const columns = [
    {
        type: 'selection'
    },
    {
        key: 'name',
        title: 'Name'
    },
    {
        key: 'age',
        title: 'Age'
    },
    {
        key: 'address',
        title: 'Address'
    },
    {
        key: 'tel',
        title: 'Tel'
    }
] as TableColumnOptions[]

const data = [
    {
        name: "Name A",
        age: "Age A",
        address: "Address A",
        tel: "Tel A"
    },
    {
        name: "Name B",
        age: "Age B",
        address: "Address B",
        tel: "Tel B"
    },
    {
        name: "Name C",
        age: "Age C",
        address: "Address C",
        tel: "Tel C"
    },
    {
        name: "Name D",
        age: "Age D",
        address: "Address D",
        tel: "Tel D"
    }
]

function updateCheckedRowsHandler(rows: Set<unknown>) {
    console.log(rows);
}
</script>

<template>
    <Table
        :columns="columns"
        :data="data"
        style="width: 100%;"
        @on-update:checked-rows="updateCheckedRowsHandler"
    ></Table>
</template>
