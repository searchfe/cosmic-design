<script lang="ts" setup>
import { ref, toRaw, watchEffect, nextTick, defineEmits } from 'vue';
import { computePlacement } from '../utils/style';
import { popover as _styles } from 'cosmic-ui';
import { addListener, removeListener } from '../utils/event';

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

const emits = defineEmits(['boardSwitch']);

const { visible: propsVisible } = toRaw(props);

const defaultTarget = ref(null);

const content = ref(null);

const visible = ref(propsVisible);

const style = ref({});

const  styles = _styles;

const onDocumentClick = (event: Event) => {
    const target = event.target;
    const container = defaultTarget.value as unknown as HTMLElement; 
    const contains = container?.contains(target as HTMLElement);
    if (!contains) {
        visible.value = false;
    }
};

watchEffect(() => {
    const propsVisible = props.visible;
    visible.value = propsVisible;
});

watchEffect(() => {
    const isVisible = visible.value;
    emits('boardSwitch', isVisible);
    if (isVisible) {
        addListener(document.body, 'click',  onDocumentClick, true);
        computeStyle();
    } else {
        removeListener(document.body, 'click',  onDocumentClick);
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


</script>

<template>
    <div
        ref="defaultTarget"
        class="relative"
        @click.stop="clickHandler"
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