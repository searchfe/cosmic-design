<!-- cascader -->
<template>
    <div
        ref="cascader"
        v-click-outside="close"
        :class="[styles['cos-cascader']]"
    >
        <div
            :class="[styles['cos-trigger'], popoverVisible ? 'trigger-active' : '']"
            @click="togglePopover"
        >
            <span :class="[styles['cos-trigger-input']]">
                <input type="text" :value="result || '&nbsp;'">
            </span>
            <!-- 一开始如果没有，否则会导致css有一些问题,所以用&nbsp;占位 -->
            <i-cosmic-arrow-down v-if="!result"/>
            <i-cosmic-close v-if="result && selected.length > 0" @click="delResult"/>
        </div>
        <div
            v-if="popoverVisible"
            :class="[styles['cos-popover-wrapper']]"
        >
            <cascader-items
                :items="source"
                class="popover"
                :popover-height="popoverHeight"
                :style="{height: popoverHeight}"
                :selected="selected"
                :load-data="loadData"
                :loading-item="loadingItem"
                @update:selected="onUpdateSelected"
            />
        </div>
    </div>
</template>


<script setup lang="ts">
import { cascader as styles } from 'cosmic-ui';
import { ref, computed, reactive } from 'vue';
import CascaderItems from './cascader-items.vue';
interface Source {
    key: string;
    title: string;
    name: string;
    children?: Source[];
} 

const props = withDefaults(defineProps<{
    source: Source[],
    popoverHeight: string,
    selected: Source[],
    loadData?: () => void,
    styles?: CSSModuleClasses
    size?: string;
}>(), {
    styles,
    size: 'xs',
});
const popoverVisible = ref(false);
const loadingItem = reactive({});
let callback = ref([]);
document.addEventListener('click', e => {
    callback.value.forEach(item => {
        if (item.el === e.target || item.el.contains(e.target)) {
            return;
        } else {
            item.callback();
        }
    });
});
const result = computed(() => {
    return props.selected.map(v => v.name).join('/');
});
const emits = defineEmits(['update:selected']);
function open() {
    popoverVisible.value = true;
}

function close() {
    popoverVisible.value = false;
}

function togglePopover() {
         
    if (popoverVisible.value) {
        close();
    } else {
        open();
    }
}
function onUpdateSelected(selectedCopy: Source[]) {
    const len = selectedCopy.length;
    if (len > 0) {
        if (!selectedCopy[len - 1].children) {
            close();
        }
    }
    emits('update:selected', selectedCopy);
}
function delResult () {
    emits('update:selected', []);
}
const vClickOutside = {
    mounted(el, binding) {
        callback.value.push({ el, callback: binding.value });
    },
};
</script>


