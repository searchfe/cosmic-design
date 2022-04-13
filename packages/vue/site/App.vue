<script lang="ts" setup>
import {
    Input,
    InputNumber,
    Select,
    SelectOption,
    RadioButton,
    RadioGroup,
    Layout,
    Breadcrumb,
    BreadcrumbItem,
    Collapse,
    CollapseItem,
} from 'cosmic-vue';
import ArrowRight from '~icons/cosmic/arrow-right';
import { ref } from 'vue';
import StoryButton from './src/story-button.vue';
import StoryIcon from './src/story-icon.vue';
import StoryCard from './src/story-card.vue';
import StoryTable from './src/story-table.vue';
import StorySpace from './src/story-space.vue';
import StoryGrid from './src/story-grid.vue';
import ThemePicker from './src/theme-picker.vue';
import StoryVariantUtilities from './src/story-variant-classes.vue';
import StoryStep from './src/story-step.vue';
import StoryCascader from './src/story-cascader.vue';
import StoryTab from './src/story-tab.vue';
import StoryTree from './src/story-tree.vue';
import StoryDialog from './src/story-dialog.vue';
import StoryMenu from './src/story-menu.vue';

const select = ref(null);

const value = ref('123');

const menuChangeHandler = () => {
    // eslint-disable-next-line no-console
    console.log(11);
};

const { Content, Header, Sider, Footer } = Layout;

const testSelect = ref(['1', '2', '3']);

const selectValue = ref('1');


const inputNumberValue = ref('111111111.999');
const inputNumberPercent = ref('111111111.999%');
const inputControls = ref(true);

setTimeout(() => {
    inputNumberValue.value = '23.9999';
    inputNumberPercent.value = '23.9999%';
}, 3000);

setTimeout(() => {
    inputNumberValue.value = '99999999.999';
    inputNumberPercent.value = '99999999.999%';
    inputControls.value = false;
}, 6000);

</script>
<template>
    <div>
        <div class="content box-border">
            <div class="font-bold text-xl">
                Cosmic Design Vue Components
            </div>
            <theme-picker />
            <story-icon />
        </div>
        <div class="mt-md">
            <story-variant-utilities />
        </div>
        <div class="mt-md">
            <story-button />
        </div>
        <div class="mt-md">
            <div class="font-bold text-lg mt-16">
                面包屑
            </div>
            <Breadcrumb :separator-icon="ArrowRight">
                <BreadcrumbItem>首页</BreadcrumbItem>
                <BreadcrumbItem>第二页</BreadcrumbItem>
                <BreadcrumbItem>第三页</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="content box-border mt-md" style="padding-bottom: 100px;">
            <div class="input-li">
                <Input
                    v-model:value="value"
                    size="sm"
                    placeholder="请输入内容"
                    :maxlength="10"
                    :readonly="false"
                    @on-focus="menuChangeHandler"
                />
                <Input size="sm" value="14" :disabled="true" />
                <Input size="sm" placeholder="请输入内容（caution 图标过小）">
                    <template #prefix>
                        <i-cosmic-caution />
                    </template>
                </Input>
                <Input size="sm" placeholder="请输入内容">
                    <template #prefix>
                        <i-cosmic-play />
                    </template>
                </Input>
                <Input size="sm" placeholder="请输入内容" value="1212" :readonly="true" />
            </div>

            <div class="input-li">
                <InputNumber
                    size="sm"
                    placeholder="请输入内容"
                    :readonly="false"
                    :default-max-value="99999999999999999999999999"
                    :value="inputNumberValue"
                    :controls="inputControls"
                    @on-focus="menuChangeHandler"
                />
                <InputNumber
                    size="xl"
                    align="center"
                    type="percent"
                    :value="inputNumberPercent" >
                    <template #prefix>
                        <i-cosmic-play />
                    </template>
                </InputNumber>
                <InputNumber
                    align="center"
                    type="percent"
                    :value="inputNumberPercent" />
                <InputNumber />
                <InputNumber size="sm" placeholder="请输入内容（caution 图标过小）">
                    <template #prefix>
                        <i-cosmic-caution />
                    </template>
                </InputNumber>
                <InputNumber size="lg" placeholder="请输入内容" :disabled="true">
                    <template #prefix>
                        <i-cosmic-play />
                    </template>
                </InputNumber>
                <InputNumber size="sm" placeholder="请输入内容" type="text" value="readonly" :readonly="true" />
                <InputNumber size="sm" placeholder="请输入内容" type="1212" value="disabled" :disabled="true" />
            </div>

            <story-space />
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
                <Select ref="select" :value="selectValue" size="sm" allow-input>
                    <SelectOption
                        v-for="item of testSelect"
                        :key="item"
                        :value="item"
                        :label="item"
                    />
                </Select>
            </div>
            <div class="menu">
                <story-menu />
            </div>

            <story-grid />

            <story-step />

            <story-table />
            <h1>Radio</h1>
            <RadioGroup>
                <RadioButton value="1" label="12">
                    <i-cosmic-arrow-down />
                </RadioButton>
                <RadioButton value="2" label="12">
                    <i-cosmic-arrow-down />
                </RadioButton>
            </RadioGroup>

            <story-card />

            <div class="w-400 p-10">
                <story-tree />
            </div>

            <story-tab />

            <Layout>
                <Header class="h-30">header</Header>
                <Layout>
                    <Sider class="w-250">sider</Sider>
                    <Content>content</Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
            <Footer>footer</Footer>
            <Collapse
                :active-key="['aaa']"
                accordion
                :nullable="false"
                @change="log"
            >
                <collapse-item v-for="item in ['aaa', 'bbb']" :key="item" :header="item" :datakey="item">
                    <template #prefix>
                        <img
                            src="https://fe-dev.bj.bcebos.com/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%9B%BE%E6%A0%8714*14.png"
                            alt=""
                        >
                    </template>
                    <template #extra>
                        <i-cosmic-board />
                    </template>
                    collapse item {{ item }}
                </collapse-item>
            </Collapse>
            <story-cascader />
            <StoryDialog />
        </div>
    </div>
</template>
<style module="styles">
</style>
