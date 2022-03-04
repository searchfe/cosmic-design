<script setup lang="ts">
import { ref, reactive, useSlots, computed, toRaw, watchEffect } from 'vue';
import _styles from 'cosmic-design/select.module.css';
import { default as Option } from './option.vue';
import { Select } from 'cosmic-common';
import { type Size } from './types/idnex';

const props = withDefaults(
    defineProps<{
        value: unknown,
        size: Size,
        multiple: boolean,
        disabled: boolean,
        placeholder: string,
        clearable: boolean,
    }>(), {
        value: void 0, 
        size: 'base',
        disabled: false,
        multiple: false,
        placeholder: '',
        clearable: false,
    },
);

const emits = defineEmits(['onChange', 'onSelect', 'onClear', 'onFocus', 'onBlur', 'onBoardSwitch']);

const styles = _styles;

// 获取childre
const children = useSlots().default?.() || [];

const renderList = computed(() => children.map(item => toRaw(item.props)));

const isOpen = ref(false);

const container = ref(null);

const select = reactive(new Select(props.value));

// init select list
select.setSelectList(children.map(item => ({label: item.props.label, value: item.props.value})));

select.setSelection(props.value);

watchEffect(() => {
    emits('onBoardSwitch', isOpen.value);
});

const state = ref(props.disabled ? 'disabled' : 'normal');

const clickHhandle = () =>  {
    if (props.disabled) return;
    if (!isOpen.value) isOpen.value = true;
}

const selectChange = (data) => {
    emits('onSelect', data);
    select.setSelection(data);
    emits('onChange', data);
    isOpen.value = false;
};

const focus = () => {
    emits('onFocus');
};

const selectChange = (data) => {
    emits('onSelect', data);
    select.setSelection(data);
    emits('onChange', data);
    isOpen.value = false;
};

const focus = () => {
    emits('onFocus');
};

const blur = () => {
    emits('onBlur');
    isOpen.value = false;
};

</script>

<template>
    <div
        ref="container"
        tabindex="0"
        hidefocus="true"
        :class="[styles.root, size, state, isOpen ? 'active' : '']"
        @click.stop="clickHhandle"
        @focus="focus"
        @blur="blur"
    >
        <div :class="[styles.label]">
            <span a-if="placeholder && !select.label">{{ placeholder }}</span>
            <span a-else>{{ select.label }}</span>
        </div>
        <span :class="[styles.arrow, styles.icon, isOpen ? styles.open : '']">
            <slot name="suffix">
                <i-cosmic-arrow-down />
            </slot>
        </span>
    </div>
    <div
        :class="[styles.dropdown]"
        v-if="isOpen"
    >
        <ul :class="[styles.ul, size]">
            <Option 
                v-for="item of renderList" 
                :key="item.value"
                :size="size" 
                :value="item.value" 
                :label="item.label"
                :selected="select.selected(item)"
                @on-change="selectChange"
            />
        </ul>
    </div>
</template>
