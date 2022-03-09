<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { steps as _styles } from 'cosmic-ui';

interface CSSModuleClasses {
    [key: string]: string
}

const props = withDefaults(defineProps<{
    styles: CSSModuleClasses,
    current: number | string,
}>(), {
    styles: _styles,
    current: 0,
});

const emits = defineEmits('change');
const steps = ref([]);

const activeStep = ref(+props.current || 0);

watch(steps, () => {
    steps.value.forEach((instance, index) => {
        instance?.setIndex(index);
    });
});

watch(activeStep, () => {
    emits('change', activeStep);
});

provide('CSteps', { steps, activeStep });
</script>

<template>
    <div :class="[styles.steps]">
        <slot />
    </div>
</template>
