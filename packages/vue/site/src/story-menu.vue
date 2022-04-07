<script setup lang="ts">
import { ref } from 'vue';
import {
    Button,
    Menu,
    MenuOption,
    SubMenu,
} from 'cosmic-vue';

const testSelect = ref([
    {
        label: '测试1',
        value: '1',
    },
    {
        label: '测试2',
        value: '2',
    },
    {
        label: '测试3',
        value: '3',
    },
]);
</script>

<template>
    <div class="flex">
        <div>
            <p>默认展开</p>
            <div class="h-500 w-300 border">
                <Menu
                    size="sm"
                    value="2"
                    @on-change="menuChangeHandler"
                >
                    <MenuOption v-for="data of testSelect" :key="data.value" :value="data.value" :label="data.label" :has-check="false" />
                    <sub-menu label="二级菜单" value="121">
                        <MenuOption v-for="data of testSelect" :key="data.value" :value="data.value + '1'" :label="data.label" :has-check="false" />
                    </sub-menu>
                </Menu>
            </div>
            
        </div>
        <div>
            <Menu
                size="sm"
                value="2"
                @on-change="menuChangeHandler"
            >
                <template #activator>
                    <Button size="sm">
                        menu
                    </Button>
                </template>
                <MenuOption v-for="data of testSelect" :key="data.value" :value="data.value" :label="data.label" :has-check="false" />
                <sub-menu label="二级菜单" value="121">
                    <MenuOption v-for="data of testSelect" :key="data.value" :value="data.value + '1'" :label="data.label" :has-check="false" />
                </sub-menu>
            </Menu>
        </div>
        

    </div>

    
</template>


<style>
.border {
    border: 1px solid var(--color-gray-300);
    padding: 20px
}
</style>