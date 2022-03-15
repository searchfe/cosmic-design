<script setup lang="ts">
import { table as styles } from "cosmic-ui";
import { ref, type PropType, h, type VNodeChild } from "vue";

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
        default: styles
    },
    data: {
        type: Array as PropType<Array<Record<string, unknown>>>,
        default: []
    },
    columns: {
        type: Array as PropType<TableColumnOptions[]>,
        default: []
    },
    align: {
        type: String as PropType<'left' | 'right' | 'center'>,
        default: 'left',
    },
    // 模版能力弱，此处类型无法推断
    rowKey: {
        type: Function as PropType<(row: Record<string, unknown>) => unknown>,
        required: true,
    },
})

const emits = defineEmits(['on-update:checked-row-keys']);

const selectedRows = new Set();
const isSelectAllRef = ref<boolean>(props.data.length === selectedRows.size);

function changeSelect(ev: MouseEvent, data: unknown) {
    const selected = selectedRows.has(data);
    if (selected) {
        selectedRows.delete(data);
    } else {
        selectedRows.add(data);
    }

    isSelectAllRef.value = props.data.length === selectedRows.size;

    emits('on-update:checked-row-keys', selectedRows);
}

function changeSelectAll(ev: MouseEvent) {
    if (isSelectAllRef.value) {
        selectedRows.clear()
    } else {
        for (const i of props.data) {
            selectedRows.add(i);
        }
    }

    emits('on-update:checked-row-keys', selectedRows);
}
</script>

<template>
    <table :class="[styles.table, 'overflow-hidden']">
        <colgroup>
            <col
                v-for="(item, i) in columns"
                :key="i"
                :width="
                    item.width ?? item.type === 'selection' ? '40px' : ''
                "
            />
        </colgroup>

        <thead :class="[styles.thead]">
            <tr>
                <th :class="[styles.th]" v-for="(item, i) in columns" :key="i" :align="align">
                    <input
                        v-if="item.type === 'selection'"
                        type="checkbox"
                        @click="changeSelectAll"
                        v-model="isSelectAllRef"
                    />
                    <template v-else>{{ item.title }}</template>
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(dataItem, ind) in data" :class="[]" :key="ind">
                <td :class="[styles.td]" v-for="(colItem, index) in columns" :key="index" :align="align">
                    <input
                        v-if="colItem.type === 'selection'"
                        type="checkbox"
                        @click="ev => changeSelect(ev, rowKey(dataItem))"
                        :checked="isSelectAllRef || selectedRows.has(rowKey(dataItem))"
                    />
                    <component v-else-if="colItem.render" :is="colItem.render(dataItem, ind)" />
                    <template v-else>{{ dataItem[colItem.key ?? ''] }}</template>
                </td>
            </tr>
        </tbody>
    </table>
</template>
