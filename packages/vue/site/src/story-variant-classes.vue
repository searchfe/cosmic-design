<script lang="ts" setup>
import utility from './story-variant-class.vue';
const colors = ['-v-color-dark', '-v-color-primary', '-v-color-dark-primary'];
const backgrounds = ['-v-bg-primary', '-v-bg-inapparent', '-v-bg-inapparent-primary', '-v-bg-light','-v-bg-heavy'];
const borders = ['-v-border-none', '-v-border-inapparent', '-v-border-apparent', '-v-border-apparent-primary', '-v-border-dark'];
</script>
<template>
    <div class="font-bold text-lg mt-16">
        Variant Classes
    </div>
    <div class="font-bold mt-10">
        Color
        <span class="text-sm opacity-30">default / disbaled</span>
    </div>
    <div class="flex flex-row">
        <div v-for="item in colors" :key="item">
            <utility :type="item" class="m-10" />
        </div>
    </div>
    <div class="font-bold mt-10">
        Background Color
        <span class="text-sm opacity-30">default / disbaled</span>
    </div>
    <div class="flex flex-row">
        <div v-for="item in backgrounds" :key="item">
            <utility :type="item" class="m-10" />
        </div>
    </div>
    <div class="font-bold mt-10">
        Border Color
        <span class="text-sm opacity-30">default / disbaled</span>
    </div>
    <div class="flex flex-row">
        <div v-for="item in borders" :key="item">
            <utility :type="item" class="m-10" />
        </div>
    </div>
</template>