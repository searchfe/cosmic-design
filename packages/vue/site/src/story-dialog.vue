<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, Button } from 'cosmic-vue';


const open = ref(false);

function onShowDialog() {
    open.value = true;
}
</script>

<template>
    <Button @click="onShowDialog">show dialog</Button>
    <Dialog v-model:visible="open" :show-close-icon="false" title="弹窗标题">
        内容
    </Dialog>
</template>
