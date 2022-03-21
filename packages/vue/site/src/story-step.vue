<script lang="ts" setup>
import { ref } from 'vue';
import { Steps, Step } from 'cosmic-vue';

const stepClickable = ref(true);
const stepCurrent = ref(1);

function addStep() {
    stepCurrent.value = stepCurrent.value + 1;
}
function changclick(step: any) {
    stepCurrent.value = step.value;
    if (step.value === 3) {
        stepClickable.value = false;
    } else if (step.value < 2 && !stepClickable.value) {
        stepClickable.value = true;
    }
}
</script>

<template>
    <div class="step">
        <Steps :current="stepCurrent" @change="changclick">
            <Step :title="'测试title'" :description="'描述描述描述'" />
            <Step :title="'测试title2'" :description="'描述描述描述1'" :current-status="'error'" />
            <Step :title="'测试title3'" :description="'描述描述描述2'" :click-able="stepClickable" />
            <Step :title="'测试title4'" :description="'描述描述描述3'" />
        </Steps>
        <Button style="width: 200px" @click="addStep">增加step</Button>
        <br>
        <Steps>
            <Step :title="'测试title'" />
            <Step />
            <Step>
                <template #icon="props">
                    <i-cosmic-caution :class="props.class" />
                </template>
            </Step>
            <Step :title="'测试title4'" />
        </Steps>
    </div>
</template>

<style scoped>
.step {
    margin: 20px 0;
}
</style>
