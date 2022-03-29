<script lang="ts" setup>
import Button from '../button/button.vue';
import { dialog as _styles, buttonLight } from 'cosmic-ui';


interface DialogOptions {
    cancelText: string;
    okText: string;
    showCloseIcon: boolean;
    title: string;
    visible: boolean;
    width: string;
    height: string;
    zIndex: number;
    styles: typeof _styles;
}

withDefaults(defineProps<DialogOptions>(), {
    cancelText: '取消',
    okText: '确认',
    showCloseIcon: true,
    title: '',
    visible: false,
    width: 'auto',
    height: 'auto',
    zIndex: 9999,
    styles: () => _styles,
});

const emits = defineEmits(['update:visible', 'cancel', 'ok']);

function onOK() {
    emits('update:visible', false);
    emits('ok');
}

function onCancel() {
    emits('update:visible', false);
    emits('cancel');
}

</script>

<template>
    <div
        :class="styles.dialog"
        :style="{
            width,
            height,
            zIndex,
            display: visible ? 'block' : 'none',
        }"
    >
        <div :class="styles.close" :style="{ display: showCloseIcon ? 'block' : 'none' }" @click="onCancel">
            <slot name="icon">
                <i-cosmic-close />
            </slot>
        </div>
        <slot name="title">
            <div class="text-xl font-bold">
                {{ title }}
            </div>
        </slot>
        <slot />
        <div class="w-full flex justify-center items-center">
            <slot name="actions">
                <div class="flex items-end justify-center">
                    <Button class="w-120 h-40 mr-10 rounded-full" :styles="buttonLight" @click.stop="onCancel">
                        {{ cancelText }}
                    </Button>
                    <Button class="w-120 h-40 rounded-full" @click.stop="onOK">
                        {{ okText }}
                    </Button>
                </div>
            </slot>
        </div>
    </div>
</template>

