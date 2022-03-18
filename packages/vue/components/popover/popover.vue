<script lang="ts" setup>
import { ref, toRaw, watchEffect, nextTick } from 'vue';
import { computePlacement } from '../utils/style';
import { popover as _styles } from 'cosmic-ui';
const  props = withDefaults(defineProps<{
    target?: any,
    trigger?: 'hover' | 'focus' | 'click',
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom',
    visible: boolean
}>(), {
    trigger: 'click',
    placement: 'leftTop',
    visible: false,
});

const { visible: propsVisible } = toRaw(props);

const defaultTarget = ref(null);

const content = ref(null);

const visible = ref(propsVisible);

const style = ref({});

const  styles = _styles;

watchEffect(() => {
    const propsVisible = props.visible;
    visible.value = propsVisible;
});

watchEffect(() => {
    const isVisible = visible.value;
    if (isVisible) {
        computeStyle();
    } else {
        style.value = {};
    }
});

const computeStyle = async () => {
    await nextTick();
    const target = props.target || defaultTarget.value;
    style.value = computePlacement(target, content.value as unknown as HTMLElement, props.placement) as unknown as Record<string, string>;
};

const clickHandler = () => {
    visible.value = true;
};

const blur = () => {
    visible.value = false;
};

</script>

<template>
    <div
        ref="defaultTarget"
        class="relative"
        tabindex="0"
        hidefocus="true"
        @blur="blur"
        @click="clickHandler"
    >
        <slot />
        <div 
            v-if="visible"
            ref="content"
            class="absolute"
            :class="[styles.dropdown]"
            :style="style"
        >
            <slot name="content" />
        </div>
    </div>
</template>