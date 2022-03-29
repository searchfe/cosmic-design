<script lang="ts" setup>
import {
    Tabs,
    TabPane,
} from 'cosmic-vue';
const switchTab = (value: string) => {
    // eslint-disable-next-line
    console.log(value);
};
</script>
<template>
    <Tabs size="sm" class="h-40" default-active-tab="1" @on-change="switchTab">
        <TabPane class="mx-6" label="图层" value="1" />
        <TabPane class="mx-6" label="规范" value="2" />
        <TabPane class="mx-6" label="资源" value="3" />
    </Tabs>
</template>