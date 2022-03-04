import { type Ref, ref } from 'vue';

export function disabledToState(disabled: boolean): Ref<string> {
    return ref(disabled ? 'disabled' : 'normal');
}