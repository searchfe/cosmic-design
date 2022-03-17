<script lang="ts" setup>
import { Button } from 'cosmic-vue';
import { buttonRounded } from 'cosmic-ui';
</script>
<template>
    <div class="font-bold text-lg mt-16">Button List</div>
    <div>Size - xs / sm / md / lg</div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
    </div>
    <div>State - normal / hover / active / disabled</div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm" class="hover">Button</Button>
        <Button size="md" class="active">Button</Button>
        <Button size="lg" :disabled="true">Button</Button>
    </div>
    <div>ButtonRounded</div>
    <div class="button-group">
        <Button size="xs" :styles="buttonRounded">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
        </Button>
        <Button size="sm" class="hover" :styles="buttonRounded">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
        </Button>
        <Button size="md" class="active" :styles="buttonRounded">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
        </Button>
        <Button size="lg" :disabled="true" :styles="buttonRounded">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
        </Button>
    </div>
    <div class="button-group">
        <Button size="xs" class="selected">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
            hahah
        </Button>
        <Button size="sm" class="selected">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
            hahah
        </Button>
        <Button size="md" class="selected">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
            hahah
        </Button>
        <Button size="lg" class="selected">
            <template v-slot:prefix="props">
                <i-cosmic-play :class="props.class" />
            </template>
            hahah
        </Button>
    </div>
    <div class="button-group">
        <Button size="xs">
            <i-cosmic-play class="mr-4" /> No Slot Version <i-cosmic-play class="ml-4" />
        </Button>
    </div>
</template>
<style>
.button-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.button-group > div {
    margin-right: var(--spacing-10);
}
</style>
