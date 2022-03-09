<script setup lang="ts">
import { ref, getCurrentInstance, inject, reactive, computed, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import { step as _styles } from 'cosmic-ui';

interface CSSModuleClasses {
    [key: string]: string
}

interface StepState {
  uid: number
  currentStatus: string
  setIndex: (inx: number) => void
}

interface StepsInject {
  activeStep: Ref<number>
  steps: Ref<StepState[]>
}

const props = withDefaults(defineProps<{
    styles: CSSModuleClasses,
    title: string,
    description: string,
    currentStatus: string,
    clickAble: boolean,
}>(), {
    styles: _styles,
    title: '',
    description: '',
    currentStatus: '',
    clickAble: true,
});
const index = ref(1);
const setIndex = (inx: number) => {
    index.value = inx;
};
const currentInstance = getCurrentInstance() || { uid: -1 };
const parent: StepsInject = inject('CSteps');

const stepState = reactive({
    uid: computed(() => currentInstance.uid),
    currentStatus: props.currentStatus,
    setIndex,
});
parent.steps.value = [...parent.steps.value, stepState];

onBeforeUnmount(() => {
    parent.steps.value = parent.steps.value.filter(instance => instance.uid !== currentInstance?.uid);
});

const handleClick = () => {
    if (!props.clickAble) return;
    parent.activeStep.value = index.value;
};

const getStepEnableStatus = () => {
    const enums = ['process', 'finish', 'error'];
    if(enums.includes(stepState.currentStatus)) {
        return stepState.currentStatus;
    }
    return 'finish';
};

const stateClass = computed(() => {
    if (parent.activeStep.value > index.value) {
        return getStepEnableStatus();
    }
    else if (parent.activeStep.value === index.value) {
        return 'process';
    }
    return '';
});
</script>

<template>
    <div
        :class="[styles.wrapper, stateClass]"
        @click="handleClick"
    >
        <div :class="[styles.icon]">
            <slot name="icon">
                <div :class="[styles.border]">
                    {{ index + 1 }}
                </div>
            </slot>
        </div>
        <div :class="[styles.content]">
            <div :class="[styles.title]">
                {{ title }}
            </div>
            <div
                v-if="description"
                :class="[styles.description]"
            >
                {{ description }}
            </div>
        </div>
    </div>
</template>
