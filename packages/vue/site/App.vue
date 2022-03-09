<script lang="ts" setup>
import { Button, Icon, Input, Select, SelectOption, Menu, MenuOption, Row, Col, Space, Table, RadioButton, RadioGroup, Steps, Step } from 'cosmic-vue';
import { ref } from 'vue';

const select = ref(null);

const value = ref('123');


const state = ref('sm');

const menuChangeHandler = () => {
    // eslint-disable-next-line no-console
    console.log(1);
};

const stepClickable = ref(true);
const changclick = (step: any) => {

    console.log('steps change:', step.value);

    if (step.value === 3) {
        stepClickable.value = false;
    }
    else if (step.value < 2 && !stepClickable.value) {
        stepClickable.value = true;
    }
};

</script>
<template>
    <div class="content box-border">
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
            <Button size="sm" class="hover" c-style="icon">
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
            <Input
                v-model:value="value"
                size="sm"
                placeholder="请输入内容"
                :maxlength="10"
                :readonly="false"
            />
            <Input size="sm" value="14" :disabled="true" />
            <Input size="sm" placeholder="请输入内容">
                <template v-slot:prefix="props">
                    <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
                </template>
            </Input>
            <Input size="sm" placeholder="请输入内容" value="1212" :readonly="true" />
        </div>

        <Space>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
            <Space direction="vertical">
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
                <Button>D</Button>
                <Space size="lg">
                    <Space direction="vertical" size="lg">
                        <Button>A</Button>
                        <Button>B</Button>
                        <Button>C</Button>
                        <Button>D</Button>
                    </Space>
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                    <Button>D</Button>
                </Space>
            </Space>
        </Space>
        <div class="input-li">
            <Select size="sm" ref="select">
                <SelectOption value="123" label="1212"></SelectOption>
                <SelectOption value="2" label="34"></SelectOption>
                <SelectOption value="3" label="523"></SelectOption>
            </Select>
            <Select size="sm" ref="select" :disabled="true">
                <SelectOption value="123" label="1212"></SelectOption>
                <SelectOption value="2" label="34"></SelectOption>
                <SelectOption value="3" label="523"></SelectOption>
            </Select>
        </div>
        <div class="menu">
            <Menu
                :size="state"
                value="2"
                @on-change="menuChangeHandler"
            >
                <template v-slot:activator>
                    <Button size="sm">Button</Button>
                </template>
                <MenuOption value="1" :label="13213" />
                <MenuOption :label="2312321" value="2" />
                <MenuOption :label="4324234" value="3" />
            </Menu>
        </div>
        <Row class="row">
            <Col class="col" :span="12">col</Col>
        </Row>
        <Row class="row">
            <Col class="col" :span="6">col-6</Col>
            <Col class="col" :span="6">col-6</Col>
        </Row>
        <Row class="row">
            <Col class="col" :span="4">col-4</Col>
            <Col class="col" :span="4">col-4</Col>
            <Col class="col" :span="4">col-4</Col>
        </Row>
        <Row class="row" :gutter="20">
            <Col :span="3">
                <section class="col">col-3</section>
            </Col>
            <Col :span="3">
                <section class="col">col-3</section>
            </Col>
            <Col :span="3">
                <section class="col">col-3</section>
            </Col>
            <Col :span="3">
                <section class="col">col-3</section>
            </Col>
        </Row>

        <div class="step">
            <Steps :current="1" @change="changclick">
                <Step :title="'测试title'" :description="'描述描述描述'" />
                <Step :title="'测试title2'" :description="'描述描述描述1'" :current-status="'error'" />
                <Step :title="'测试title3'" :description="'描述描述描述2'" :click-able="stepClickable" />
                <Step :title="'测试title4'" :description="'描述描述描述3'" />
            </Steps>

            <Steps>
                <Step :title="'测试title'" />
                <Step />
                <Step>
                    <template v-slot:icon="props">
                        <Icon svg="cursor" slot="icon" :class="props.class"></Icon>
                    </template>
                </Step>
                <Step :title="'测试title4'" />
            </Steps>
        </div>

        <Table>
            <thead>
                <tr>
                    <th v-for="i of ['A', 'B', 'C']">{{ i }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i of [
                    ['ASDF', 'BNM<', 'CVBN'],
                    ['AZXS', 'BNHG', 'CVFD']
                ]">
                    <td v-for="ii of i">{{ ii }}</td>
                </tr>
            </tbody>
        </Table>

        <RadioGroup>
            <RadioButton value="1" label="12">
                <i-cosmic-arrow-down />
            </RadioButton>
            <RadioButton value="2" label="12">
                <i-cosmic-arrow-down />
            </RadioButton>
        </RadioGroup>
    </div>
</template>
<style module="styles">
</style>
