<script lang="ts" setup>
import { Button, Input, Select, SelectOption, Menu, MenuOption, Row, Col, Space, RadioButton, RadioGroup, Steps, Step, Tree as CTree, TreeNode as CTreeNode, Layout } from 'cosmic-vue';
import { ref } from 'vue';
import { buttonRounded } from 'cosmic-ui';
import ThemePicker from './theme.vue';
import MyTable from './MyTable.vue';
import MyCard from './MyCard.vue';

const select = ref(null);

const value = ref('123');


const state = ref('sm');

const menuChangeHandler = () => {
    // eslint-disable-next-line no-console
    console.log(11);
};

const stepClickable = ref(true);
const changclick = (step: any) => {
    if (step.value === 3) {
        stepClickable.value = false;
    }
    else if (step.value < 2 && !stepClickable.value) {
        stepClickable.value = true;
    }
};

const treedata = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
];
const { Content, Header, Sider, Footer } = Layout;
</script>
<template>
    <div class="content box-border" style="padding-bottom: 100px;">
        <div>Cosmic Design Vue Components</div>
        <ThemePicker />
        <div style="font-size: 36px">
            <i-cosmic-align />
            <i-cosmic-board />
            <i-cosmic-canvas />
            <i-cosmic-caution />
        </div>
        <div class="button-group">
            <Button size="xs">Button</Button>
            <Button size="sm">Button</Button>
            <Button size="md">Button</Button>
            <Button size="lg">Button</Button>
        </div>
        <div class="button-group">
            <Button size="xs">Button</Button>
            <Button size="sm hover">Button</Button>
            <Button size="md active">Button</Button>
            <Button size="lg selected" :disabled="true">Button</Button>
        </div>
        <div class="button-group">
            <Button size="xs" :styles="buttonRounded">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
            <Button size="sm" class="hover" :styles="buttonRounded">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
            <Button size="md" class="active" :styles="buttonRounded">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
            <Button size="lg" class="selected" :styles="buttonRounded">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
            <Button size="lg" class="selected">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
        </div>
        <div class="button-group">
            <Button size="md">
                <template v-slot:prefix="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Button>
        </div>

        <div class="input-li">
            <Input
                v-model:value="value"
                size="sm"
                placeholder="请输入内容"
                @on-focus="menuChangeHandler"
                :maxlength="10"
                :readonly="false"
            />
            <Input size="sm" value="14" :disabled="true" />
            <Input size="sm" placeholder="请输入内容">
                <template v-slot:prefix>
                    <i-cosmic-caution />
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
            <!-- <Row>
                <Col :span="24">
                    <Select
                        ref="select"
                        size="sm"
                        :allow-input="true"
                    >
                        <template v-slot:prefix>
                            <i-cosmic-check />
                        </template>
                        <SelectOption value="123" label="1212"></SelectOption>
                        <SelectOption value="2" label="34"></SelectOption>
                        <SelectOption value="3" label="523"></SelectOption>
                    </Select>
                </Col>
            </Row> -->
            <Select ref="select" size="sm">
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
                        <i-cosmic-caution :class="props.class" />
                    </template>
                </Step>
                <Step :title="'测试title4'" />
            </Steps>
        </div>

        <MyTable />

        <RadioGroup>
            <RadioButton value="1" label="12">
                <i-cosmic-arrow-down />
            </RadioButton>
            <RadioButton value="2" label="12">
                <i-cosmic-arrow-down />
            </RadioButton>
        </RadioGroup>

        <MyCard />
        <div class="tree" style="width: 400px;">
            <c-tree>
                <c-tree-node key="0-0" title="parent 1">
                    <c-tree-node key="0-0-0" title="parent 1-0">
                        <c-tree-node key="0-0-0-0" title="leaf" />
                        <c-tree-node key="0-0-0-1" title="leaf" />
                        <c-tree-node key="0-0-0-2" title="leaf" />
                    </c-tree-node>
                    <c-tree-node key="0-0-1" title="parent 1-1">
                        <c-tree-node key="0-0-1-0" title="leaf" />
                    </c-tree-node>
                </c-tree-node>
            </c-tree>
        </div>

        <div class="tree" style="width: 400px;">
            <c-tree :data="treedata" />
        </div>

        <Layout>
            <Header>header</Header>
            <Layout>
                <Sider>sider</Sider>
                <Content>content</Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    </div>
</template>
<style module="styles">
</style>
