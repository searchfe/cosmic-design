<script setup lang="ts">
import { table as styles } from 'cosmic-ui';
import { ref, toRef, watch, type PropType, type VNodeChild } from 'vue';

export interface TableColumnOptions {
    type?: 'selection'
    key?: string
    title?: string
    width?: string
    render?(data: any, index: number): VNodeChild
}

const props = defineProps({
    styles: {
        type: Object as PropType<CSSModuleClasses>,
        default: styles,
    },
    data: {
        type: Array as PropType<Array<Record<string, unknown>>>,
        default: () => [],
    },
    columns: {
        type: Array as PropType<TableColumnOptions[]>,
        default: () => [],
    },
    align: {
        type: String as PropType<'left' | 'right' | 'center'>,
        default: 'left',
    },
    rowKey: {
        type: Function as PropType<(row: any) => string>,
        required: true,
    },
    checkedRowKeys: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
});

const emits = defineEmits(['on-update:checked-row-keys']);

const checkedRowKeysRef = ref(new Set(props.checkedRowKeys));
const isAllCheckedRef = ref(false);

watch([
    toRef(props.data, 'length'),
    toRef(checkedRowKeysRef.value, 'size'),
], ([size, checkedSize]) => {
    isAllCheckedRef.value = size === checkedSize;
});

function doCheck(_ev: MouseEvent, key: string) {
    const selected = checkedRowKeysRef.value.has(key);
    if (selected) {
        checkedRowKeysRef.value.delete(key);
    } else {
        checkedRowKeysRef.value.add(key);
    }

    emits('on-update:checked-row-keys', Array.from(checkedRowKeysRef.value.keys()));
}

function doCheckAll(_ev: MouseEvent) {
    if (isAllCheckedRef.value) {
        checkedRowKeysRef.value.clear();
    } else {
        for (const i of props.data) {
            checkedRowKeysRef.value.add(props.rowKey(i));
        }
    }

    emits('on-update:checked-row-keys', Array.from(checkedRowKeysRef.value.keys()));
}
</script>

<template>
    <table :class="[styles.table, 'overflow-hidden']">
        <colgroup>
            <col
                v-for="(item, i) in columns"
                :key="i"
                :width="
                    item.width ?? (item.type === 'selection' ? '40px' : '')
                "
            >
        </colgroup>

        <thead :class="[styles.thead]">
            <tr>
                <th v-for="(item, i) in columns" :key="i" :class="[styles.th]" :align="align">
                    <input
                        v-if="item.type === 'selection'"
                        v-model="isAllCheckedRef"
                        type="checkbox"
                        @click="doCheckAll"
                    >
                    <template v-else>{{ item.title }}</template>
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(dataItem, ind) in data" :key="ind" :class="[]">
                <td
                    v-for="(colItem, index) in columns"
                    :key="index"
                    :class="[styles.td]"
                    :align="align"
                >
                    <input
                        v-if="colItem.type === 'selection'"
                        type="checkbox"
                        :checked="isAllCheckedRef || checkedRowKeysRef.has(rowKey(dataItem))"
                        @click="ev => doCheck(ev, rowKey(dataItem))"
                    >
                    <component :is="colItem.render(dataItem, ind)" v-else-if="colItem.render" />
                    <template v-else>{{ dataItem[colItem.key ?? ''] }}</template>
                </td>
            </tr>
        </tbody>
    </table>
</template>
