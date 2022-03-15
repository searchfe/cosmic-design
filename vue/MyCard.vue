<script setup lang="ts">
import { Card } from 'cosmic-vue';
</script>

<template>
    <Card title="卡片插槽示例">
        <template #header-extra>#header-extra</template>
        卡片内容
        <template #footer>#footer</template>
        <template #action>#action</template>
    </Card>
</template>
