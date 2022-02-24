<script lang="ts" setup>
import { Button, Icon, Input, CSpace, Select, SelectOption } from "cosmic-vue";
import { ref, onMounted } from "vue";
const changeHandler = (event: Event) => {
    console.log(event)
}

const select = ref(null);

onMounted(() =>  {
    console.log(select.value.a)
});
const value = ref('123');
</script>
<template>
<div class="content">
    <div>Cosmic Design Vue Components</div>
    <div style="font-size: 36px">
        <i-cosmic-align />
        <i-cosmic-board />
        <i-cosmic-canvas />
        <i-cosmic-caution />
    </div>
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
    
    <div class="input-li">
        <Input size="sm" placeholder="请输入内容" :maxlength="10" :readonly="false" v-model:value="value" @onChange="changeHandler"/>
        <Input size="sm" value="14" :disabled="true"/>
        <Input size="sm" placeholder="请输入内容">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Input>
        <Input size="sm" placeholder="请输入内容" value="1212" :readonly="true" />
    </div>

    <c-space>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
    </c-space>
    <div class="input-li">
        <Select size="sm" ref='select'>
            <SelectOption size="sm" value="123" label="1212"></SelectOption>
            <SelectOption size="sm" value="2" label="34"></SelectOption>
            <SelectOption size="sm" value="3" label="523"></SelectOption>
        </Select>

        <Select size="sm" ref='select' :disabled="true">
            <SelectOption size="sm" value="123" label="1212"></SelectOption>
            <SelectOption size="sm" value="2" label="34"></SelectOption>
            <SelectOption size="sm" value="3" label="523"></SelectOption>
        </Select>
    </div>

</div>
</template>
<style module="styles">
</style>