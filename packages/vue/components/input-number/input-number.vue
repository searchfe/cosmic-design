<script lang="ts" setup>
import {inputNumber as _styles} from 'cosmic-ui';
import {ref, computed, watchEffect, useSlots} from 'vue';

const props = defineProps({
    styles: {
        type: Object,
        default: _styles,
    },
    // 样式大小 xs sm md lg xl
    size: {
        type: String,
        default: 'sm',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    // 类型 percent number text
    type: {
        type: String,
        default: 'number',
    },
    placeholder: {
        type: String,
        default: '',
    },
    // 识别符
    model: {
        type: String,
        default: '',
    },
    // left center right
    align: {
        type: String,
        default: 'left',
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
    // 限制默认值不支持再次修改
    defaultMinValue: {
        type: [String, Number],
        default: '-999999',
    },
    defaultMaxValue: {
        type: [String, Number],
        default: '999999',
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
const MIN = parseFloat(ISPERCENT ? defaultPercentMinValue : defaultMinValue);
const MAX = parseFloat(ISPERCENT ? defaultPercentMaxValue : defaultMaxValue);

const defaultValue = props.type === 'percent'
    ? props.defaultPercentMaxValue
    : (props.type === 'number' ? props.defaultMaxValue : '');

const inputModel = ref('');
watchEffect(() => {
    inputModel.value = props.type === 'percent'
        ? `${getValidVal(parseFloat(props.value.toString() || defaultValue), MIN, MAX)}%`
        : (props.type === 'number' ? `${getValidVal(parseFloat(props.value.toString() || defaultValue), MIN, MAX)}` : props.value);
});

const showArrow = computed(() => ISMATH && props.controls && !props.readonly && !props.disabled);

function getValidVal(val: number | string, MIN: number, MAX: number): number {
    val = Number(val);
    return val >= MAX ? MAX : (val <= MIN ? MIN : val);
}

const isHavePrefix = !!useSlots().prefix?.();
const isHaveSuffix = !!useSlots().suffix?.();

const inputRef = ref();


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
        <span
            v-if="isHavePrefix"
            :class="styles.prefix "
            class="flex items-center justify-center"
        >
            <slot
                name="prefix"
            />
        </span>
        <input
            ref="inputRef"
            v-model="inputModel"
            :class="[styles['input'], size]"
            class="w-full"
            :style="{textAlign: align}"
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
            :class="[styles['arrow-icons'], size]"
            class="h-full flex flex-col"
        >
            <div
                :class="[styles['arrow-icon-item']]"
                class="w-full flex justify-center items-center"
                @click.stop="e => arrowFn({isUp: true, event: e})"
            >
                <i-cosmic-arrow-up :class="[styles['icon-item']]"/>
            </div>
            <div
                :class="[styles['arrow-icon-item']]"
                class="w-full flex justify-center items-center"
                @click.stop="e => arrowFn({isUp: false, event: e})"
            >
                <i-cosmic-arrow-down :class="[styles['icon-item']]"/>
            </div>
        </div>
        <span
            v-if="isHaveSuffix"
            :class="styles.suffix"
            class="flex items-center"
        >
            <slot
                name="suffix"
            />
        </span>
    </div>
</template>
