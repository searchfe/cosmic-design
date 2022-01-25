<script lang="ts" setup>
import Button from "cosmic-vue/components/button.vue";
import Icon from "cosmic-vue/components/icon.vue";
</script>
<template>
<div class="content">
    <div>Cosmic Design Vue Components</div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="base">Button</Button>
        <Button size="lg">Button</Button>
    </div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm hover">Button</Button>
        <Button size="base active">Button</Button>
        <Button size="lg selected" :disabled="true">Button</Button>
    </div>
    <div class="button-group">
        <Button size="xs" c-style="icon">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="sm" class="hover" c-style="icon" >
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="base" class="active" c-style="icon">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="lg" class="selected" c-style="icon">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="lg" class="selected">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
    </div>
    <div class="button-group">
        <Button size="base">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>Button
            </template>
        </Button>
    </div>
    
</div>
</template>
<style module="styles">
</style>