<script lang="ts" setup>
import {inputNumber as styles} from 'cosmic-ui';
import {ref, computed, useSlots} from 'vue';

const props = defineProps({
    id: {
        type: String,
        default: '',
    },
    class: {
        type: String,
        default: 'input',
    },
    size: {
        type: String,
        default: 'md',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'number',
    },
    placeholder: {
        type: String,
        default: '',
    },
    model: {
        type: String,
        default: '',
    },
    value: {
        type: [String, Number],
        default: '0',
    },
    // 数字、百分比是否显示增减按钮
    controls: {
        type: Boolean,
        default: true,
    },
    defaultMinValue: {
        type: [String, Number],
        default: -99999,
    },
    defaultMaxValue: {
        type: [String, Number],
        default: 99999,
    },
    defaultPercentMinValue: {
        type: String,
        default: '0%',
    },
    defaultPercentMaxValue: {
        type: String,
        default: '100%',
    },
});


const PERCENT_PATT = /(^(-|[1-9])([0-9])*%$)|(^0%$)/;
const ISPERCENT = props.type === 'percent';
const ISMATH = props.type === 'percent' || props.type === 'number';

const defaultPercentMinValue = props.defaultPercentMinValue.toString();
const defaultMinValue = props.defaultMinValue.toString();
const defaultPercentMaxValue = props.defaultPercentMaxValue.toString();
const defaultMaxValue = props.defaultMaxValue.toString();
// 保留一位小数
const MIN = parseFloat(ISPERCENT ? defaultPercentMinValue : defaultMinValue);
const MAX = parseFloat(ISPERCENT ? defaultPercentMaxValue : defaultMaxValue);

function getValidVal(val: number, MIN: number, MAX: number): number {
    return val >= MAX ? MAX : (val <= MIN ? MIN : val);
}

const className = ref(props.class || '');
const inputModel = ref(props.value.toString() || '0');
const showArrow = ref(ISMATH && props.controls && (!props.readonly && !props.disabled));
const inputRef = ref();
const isHavePrefix = !!useSlots().prefix?.();

const uniqueId = computed(
    () => {
        return `${props.id ? props.id + '-' : ''}input-${(Math.random() * 10000000).toString(16).replace('.', '-')}`;
    },
);

const emits = defineEmits(['onChange', 'onInput', 'onKeydown', 'onFocus', 'onBlur']);

const changeHandler = (event: Event) => {
    emits('onChange', {event});
};

const inputHandler = (event: InputEvent) => {
    let val = event.target.value.toString();
    if (ISMATH) {
        let oriVal = event.target.value.toString();
        const valIsPercent = val.match(PERCENT_PATT);
        val = parseFloat(val);
        if (!val) {
            val = '';
        } else if (oriVal === '-') {
            val = '-';
        } else {
            val = getValidVal(val, MIN, MAX);
            val = `${val}${valIsPercent && ISPERCENT ? '%' : ''}`;
        }
    }
    inputModel.value = val;
    const args = {
        value: val,
        event,
        model: props.model,
    };
    args[props.model] = val;
    emits('onInput', args);
};

const keydownHandler = (event: KeyboardEvent) => {
    const {keyCode} = event;
    // inputRef.value.select();
    switch (keyCode) {
    case 40:
        arrowFn({isUp: false, event});
        break;
    case 38:
        arrowFn({isUp: true, event});
        break;
    }
};

const focusHandler = (event: FocusEvent) => {
    inputRef.value.select();
    emits('onFocus', {event});
};

const blurHandler = (event: FocusEvent) => {
    let val: string | number = inputModel.value;
    if (ISMATH) {
        val = parseFloat(inputModel.value) || 0;
        if (ISPERCENT) {
            val = `${getValidVal(val, MIN, MAX)}%`;
        } else {
            val = getValidVal(val, MIN, MAX).toString();
        }
    }
    inputModel.value = val;
    const args = {
        value: val,
        event,
        model: props.model,
    };
    args[props.model] = val;
    emits('onBlur', args);
};

function arrowFn({isUp, event}: { isUp: boolean, event: KeyboardEvent | PointerEvent }) {
    if (props.readonly || props.disabled) {
        return;
    }
    let val: string | number = parseFloat(inputModel.value) || 0;
    val = isUp ? val + 1 : val - 1;
    if (ISPERCENT) {
        val = `${getValidVal(val, MIN, MAX)}%`;
    } else {
        val = getValidVal(val, MIN, MAX).toString();
    }
    inputModel.value = val;
    const args = {
        value: val,
        event,
        target: inputRef,
        model: props.model,
    };
    args[props.model] = val;
    setTimeout(() => {
        inputRef.value.select();
    });
    emits('onInput', args);
    emits('onKeydown', args);
}
</script>

<template>
    <div
        :class="[styles['input-text'], size]"
        class="flex w-full"
    >
        <slot
            name="customPrefix"
        />
        <label v-if="isHavePrefix" :for="uniqueId">
            <div :class="[styles['icon'], 'flex items-center justify-center']">
                <slot name="prefix"/>
            </div>
        </label>
        <input
            :id="uniqueId"
            ref="inputRef"
            v-model="inputModel"
            :class="[className, styles['input'], size, isHavePrefix ? styles['input-padding'] : '']"
            class="w-full"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            type="string"
            @change="changeHandler"
            @input="inputHandler"
            @keydown.stop="keydownHandler"
            @focus="focusHandler"
            @blur="blurHandler"
        >

        <div
            v-if="showArrow"
            :class="[styles['arrow-icons']]"
        >
            <div
                :class="[styles['arrow-icon-up']]"
                class="flex justify-center items-center"
                @click.stop="e => arrowFn({isUp: true, event: e})"
            >
                <i-cosmic-arrow-up :class="[styles['icon-item']]"/>
            </div>
            <div
                :class="[styles['arrow-icon-down']]"
                class="flex justify-center items-center"
                @click.stop="e => arrowFn({isUp: false, event: e})"
            >
                <i-cosmic-arrow-down :class="[styles['icon-item']]"/>
            </div>
        </div>
        <slot
            name="suffix"
        />
    </div>
</template>
