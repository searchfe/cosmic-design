<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { tabs as _styles } from 'cosmic-ui';

const props = defineProps({
    styles: {
        type: Object,
        default: _styles,
    },
    size: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    selected: {
        type: Boolean,
        default: false,
    },
});

const emits = defineEmits(['onChange', 'onActiveTabUpdated']);

const state = ref(props.disabled ? 'disabled' : 'normal');

const changeHandler = () => {
    emits('onChange', { label: props.label, value: props.value });
};

const self = ref(null);
onUpdated(() => {
    const {selected} = props;
    selected && emits('onActiveTabUpdated', getCenter());
});

onMounted(() => {
    const {selected} = props;
    selected && emits('onActiveTabUpdated', getCenter());
});

const getCenter = () => {
    const $self = self.value;
    return $self ? ($self as HTMLElement).offsetLeft + ($self as HTMLElement).offsetWidth / 2 : 0;
};

</script>

<template>
    <div
        ref="self"
        :class="[styles['tab-pane'], state, size, selected ? 'active' : '']"
        class="flex"
        @mousedown="changeHandler"
    >
        <span :class="[styles.label]">
            <slot>{{ label }}</slot>
        </span>
    </div>
</template>