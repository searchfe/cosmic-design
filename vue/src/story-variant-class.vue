<script lang="ts" setup>
defineProps({
    type: String,
});
</script>
<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-row items-end">
            <i-cosmic-circles :class="['w-40 h-40 mr-10', type]" style="border-radius: 6px;" />
            <i-cosmic-circles :class="['w-32 h-32 disabled', type]" style="border-radius: 6px;" />
        </div>
        <span>{{ type }}</span>
    </div>
</template>