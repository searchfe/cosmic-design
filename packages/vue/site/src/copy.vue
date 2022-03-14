<script lang="ts" setup>
import { ref, watch } from 'vue';
const iconCopy = ref();
const props = defineProps({
    value: String,
});
watch(props, ({value}) => {
    value =  `<i-cosmic-${value} />`;
    iconCopy.value.value = value;
    iconCopy.value.select();
    document.execCommand('copy');
    alert(`copied: ${value}`);
});
</script>
<template>
    <input ref="iconCopy" class="icon-copy" />
</template>
<style>
.icon-copy {
    position: fixed;
    opacity: 0;
    top: -100px;
    left: -100px;
    /* width: 1px;
    height: 1px; */
}
</style>