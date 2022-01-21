<script lang="ts">
    import _styles from '@cosmic-design/ui/button.module.css';
    import { State, Size } from '@cosmic-design/ui/button';
    export default {
        components: {},
        props: {
            styles: {
                type: Object,
                default: _styles,
            },
            size: {
                type: String,
                default: 'xs'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
                        console.log(this.styles);
            return {}
        },
        computed: {
            state() {
                return this.disabled? "disabled": "normal";
            }
        },
    }

</script>
<template>
<div :class="[styles.button, state, size]" >
<slot name='prefix' :class="[styles.prefix, size]"></slot>
<slot :class="[styles.label]"></slot>
<slot name='subfix' :class="[styles.subfix , size]"></slot>
</div>
</template>
