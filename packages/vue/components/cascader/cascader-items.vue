<!-- cascader-item -->
<template>
    <div :class="[styles['cos-cascader-items']]">
        <div :class="[styles['cos-left']]">
            <div
                v-for="item in items"
                :key="item.name"
                :class="[styles['cos-label'], selected.some(v => v.name === item.name) ? styles['active'] : '']"
                @click="updateSelected(item)"
            >
                <span :class="[styles['cos-name']]">{{ item.name }}</span>
                <!-- 动态加载的话，根据后台数据是否isLeaf字段判断是否显示箭头  / 非动态加载的，根据childre能判断-->
                <div :class="[styles['cos-icons']]">
                    <template v-if="loadingItem && item.name === loadingItem.name">
                        <i-cosmic-refresh/>
                    </template>
                    <template v-else>
                        <i-cosmic-arrow-right v-if="rightArrowVisible(item)"/>
                    </template>
                </div>
            </div>
        </div>
        <div
            v-if="rightItems"
            :class="[styles['cos-right']]"
        >
            <cascader-items
                :items="rightItems"
                :popover-height="popoverHeight"
                :style="{height: popoverHeight}"
                :selected="selected"
                :level="level+1"
                :load-data="loadData"
                :loading-item="loadingItem"
                @update:selected="onUpdateSelected"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { cascader as styles } from 'cosmic-ui';
import { computed } from 'vue';
interface Source {
    key: string;
    title: string;
    name: string;
    isLeaf?: boolean;
    children?: Source[];
} 

const props = withDefaults(defineProps<{
    items: Source[],
    popoverHeight: string,
    selected: Source[],
    loadingItem: Source,
    level?: number,
    loadData?: () => void,
    styles?: CSSModuleClasses
    size?: string;
}>(), {
    styles,
    level: 0,
    size: 'xs',
});

const emits = defineEmits(['update:selected']);
const rightItems = computed(() => {
    // 根据items(也就是source) / selected / level计算属性 rightItems的显示
    let selectedItem = props.selected[props.level as number];
    if (selectedItem) {
        if (
            selectedItem &&
          selectedItem.children &&
          selectedItem.children.length > 0
        ) {
            return selectedItem.children;
        }
    }
    return null;
});
function onUpdateSelected(selectedCopy: Source[]) {
    emits('update:selected', selectedCopy);
}
function rightArrowVisible(item: Source) {
    return props.loadData ? !item.isLeaf : item.children;
}
function updateSelected(item: Source) {
    // 如果用户点击的item，是之前已经点击过的item，那么就return掉，不再发起ajax请求
    if (props.selected.map(item => item.name).includes(item.name)) return;

    const selectedCopy = JSON.parse(JSON.stringify(props.selected)) as Source[];
    // 因为是先深拷贝，后赋值，所以这个item实际上并没有被深拷贝，反倒方便了之后我们寻找lastItem  是一个hack
    selectedCopy[props.level as number] = item;
    selectedCopy.splice((props.level as number) + 1);
      
    emits('update:selected', selectedCopy);
}
</script>

