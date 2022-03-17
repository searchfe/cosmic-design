<script lang="ts" setup>
import { Button } from 'cosmic-vue';
// import { buttonRounded } from 'cosmic-ui';
</script>
<template>
    <div class="font-bold text-lg mt-16">Button List</div>
    <div>Size - xs / sm / md / lg</div>
    <div class="button-group">
        <Button size="xs" class="rounded">Button</Button>
        <Button size="sm" class="rounded">Button</Button>
        <Button size="md" class="rounded">Button</Button>
        <Button size="lg" class="rounded">Button</Button>
    </div>
    <div>State - normal / hover / active / disabled</div>
    <div class="button-group">
        <Button size="xs" class="rounded">Button</Button>
        <Button size="sm" class="rounded hover">Button</Button>
        <Button size="md" class="rounded active">Button</Button>
        <Button size="lg" class="rounded" :disabled="true">Button</Button>
    </div>
    <div>Use Class .square</div>
    <div class="button-group">
        <Button size="xs" class="rounded square">
            <i-cosmic-play />
        </Button>
        <Button size="sm" class="rounded hover square">
            <i-cosmic-play/>
        </Button>
        <Button size="md" class="rounded active square">
            <i-cosmic-play />
        </Button>
        <Button size="lg" :disabled="true" class="rounded square">
            <i-cosmic-play />
        </Button>
    </div>
    <div>Use Class .rounded-none / .rounded / .rounded-1\/2 / .rounded-full</div>
    <div class="button-group pt-10">
        <Button size="lg" class="square rounded-none">
            <i-cosmic-play />
        </Button>
        <Button size="lg" class="square rounded">
            <i-cosmic-play />
        </Button>
        <Button size="lg" class="square rounded-1/2">
            <i-cosmic-play />
        </Button>
        <Button size="lg" class="square rounded-full">
            <i-cosmic-play />
        </Button>
    </div>
    <div class="button-group py-10">
        <Button size="sm" class="rounded-none">
            Button
        </Button>
        <Button size="sm" class="rounded">
            Button
        </Button>
        <Button size="sm" class="rounded-1/2">
            Button
        </Button>
        <Button size="sm" class="rounded-full">
            Button
        </Button>
    </div>
    <div>Button With Icon</div>
    <div class="button-group">
        <Button size="rounded xs" class="selected">
            <template #prefix>
                <i-cosmic-play />
            </template>
            Button
        </Button>
        <Button size="rounded sm" class="selected">
            <template #prefix>
                <i-cosmic-play />
            </template>
            Button
        </Button>
        <Button size="rounded md" class="selected">
            <template #prefix>
                <i-cosmic-play />
            </template>
            Button
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
