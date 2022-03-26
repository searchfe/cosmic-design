<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, Button } from 'cosmic-vue';


const open = ref(false);

function onShowDialog() {
    console.log(Dialog)
    open.value = true;
}

function onClickButton() {
    open.value = false;
}
</script>

<template>
    <Button @click="onShowDialog">show dialog</Button>
    <Dialog :open="open">
        <template #title>
            弹窗标题
        </template>
        内容
        <template #actions>
            <Button @click="onClickButton">取消</Button>
            <Button  @click="onClickButton">确认</Button>
        </template>
    </Dialog>
</template>
