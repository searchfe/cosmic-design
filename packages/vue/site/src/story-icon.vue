<script lang="ts" setup>
import { ref } from 'vue';
import Copy from './copy.vue';
function click(payload: MouseEvent) {
    // const root: HTMLElement;
    (payload.path as HTMLElement[]).forEach(p => {
        if (p.classList && p.classList.contains('icon')) {
            value.value = p.parentElement?.childNodes[1].innerHTML;
        }
    });
    // console.log(payload.path);
}
const value = ref('');
</script>
<template>
    <div>
        <span class="font-bold text-lg mr-10">Icon List</span>
        <span class="text-sm opacity-30">Click to copy</span>
    </div>
    <div class="icon-list">
        <copy :value="value" />
        <div>
            <i-cosmic-arrow-up class="icon -v-bg-primary" @click="click" />
            <label>arrow-up</label>
        </div>
        <div>
            <i-cosmic-arrow-down class="icon -v-bg-primary" @click="click" />
            <label>arrow-down</label>
        </div>
        <div>
            <i-cosmic-arrow-left class="icon -v-bg-primary" @click="click" />
            <label>arrow-left</label>
        </div>
        <div>
            <i-cosmic-arrow-right class="icon -v-bg-primary" @click="click" />
            <label>arrow-right</label>
        </div>
        <div>
            <i-cosmic-atom class="icon -v-bg-primary" @click="click" />
            <label>atom</label>
        </div>
        <div>
            <i-cosmic-board class="icon -v-bg-primary" @click="click" />
            <label>board</label>
        </div>
        <div>
            <i-cosmic-border class="icon -v-bg-primary" @click="click" />
            <label>border</label>
        </div>
        <div>
            <i-cosmic-bottom-align class="icon -v-bg-primary" @click="click" />
            <label>bottom-align</label>
        </div>
        <div>
            <i-cosmic-canvas class="icon -v-bg-primary" @click="click" />
            <label>canvas</label>
        </div>
        <div>
            <i-cosmic-category class="icon -v-bg-primary" @click="click" />
            <label>category</label>
        </div>
        <div>
            <i-cosmic-caution class="icon -v-bg-primary" @click="click" />
            <label>caution</label>
        </div>
        <div>
            <i-cosmic-check class="icon -v-bg-primary" @click="click" />
            <label>check</label>
        </div>
        <div>
            <i-cosmic-circleend class="icon -v-bg-primary" @click="click" />
            <label>circleend</label>
        </div>
        <div>
            <i-cosmic-circles class="icon -v-bg-primary" @click="click" />
            <label>circles</label>
        </div>
        <div>
            <i-cosmic-close class="icon -v-bg-primary" @click="click" />
            <label>close</label>
        </div>
        <div>
            <i-cosmic-collapsed class="icon -v-bg-primary" @click="click" />
            <label>collapsed</label>
        </div>
        <div>
            <i-cosmic-color-outline class="icon -v-bg-primary" @click="click" />
            <label>color-outline</label>
        </div>
        <div>
            <i-cosmic-color class="icon -v-bg-primary" @click="click" />
            <label>color</label>
        </div>
        <div>
            <i-cosmic-comp class="icon -v-bg-primary" @click="click" />
            <label>comp</label>
        </div>
        <div>
            <i-cosmic-contain class="icon -v-bg-primary" @click="click" />
            <label>contain</label>
        </div>
        <div>
            <i-cosmic-corner class="icon -v-bg-primary" @click="click" />
            <label>corner</label>
        </div>
        <div>
            <i-cosmic-cursor class="icon -v-bg-primary" @click="click" />
            <label>cursor</label>
        </div>
        <div>
            <i-cosmic-dark class="icon -v-bg-primary" @click="click" />
            <label>dark</label>
        </div>
        <div>
            <i-cosmic-dotted-square class="icon -v-bg-primary" @click="click" />
            <label>dotted-square</label>
        </div>
        <div>
            <i-cosmic-double-circle class="icon -v-bg-primary" @click="click" />
            <label>double-circle</label>
        </div>
        <div>
            <i-cosmic-download class="icon -v-bg-primary" @click="click" />
            <label>download</label>
        </div>
        <div>
            <i-cosmic-endpoint class="icon -v-bg-primary" @click="click" />
            <label>endpoint</label>
        </div>
        <div>
            <i-cosmic-expand class="icon -v-bg-primary" @click="click" />
            <label>expand</label>
        </div>
        <div>
            <i-cosmic-eye-closed class="icon -v-bg-primary" @click="click" />
            <label>eye-closed</label>
        </div>
        <div>
            <i-cosmic-eye-open class="icon -v-bg-primary" @click="click" />
            <label>eye-open</label>
        </div>
        <div>
            <i-cosmic-feedback class="icon -v-bg-primary" @click="click" />
            <label>feedback</label>
        </div>
        <div>
            <i-cosmic-flip class="icon -v-bg-primary" @click="click" />
            <label>flip</label>
        </div>
        <div>
            <i-cosmic-font class="icon -v-bg-primary" @click="click" />
            <label>font</label>
        </div>
        <div>
            <i-cosmic-fuzzy class="icon -v-bg-primary" @click="click" />
            <label>fuzzy</label>
        </div>
        <div>
            <i-cosmic-grid-outline class="icon -v-bg-primary" @click="click" />
            <label>grid-outline</label>
        </div>
        <div>
            <i-cosmic-grid class="icon -v-bg-primary" @click="click" />
            <label>grid</label>
        </div>
        <div>
            <i-cosmic-h class="icon -v-bg-primary" @click="click" />
            <label>h</label>
        </div>
        <div>
            <i-cosmic-height-auto class="icon -v-bg-primary" @click="click" />
            <label>height-auto</label>
        </div>
        <div>
            <i-cosmic-horizonal-align class="icon -v-bg-primary" @click="click" />
            <label>horizonal-align</label>
        </div>
        <div>
            <i-cosmic-horizonal-width class="icon -v-bg-primary" @click="click" />
            <label>horizonal-width</label>
        </div>
        <div>
            <i-cosmic-inner-point class="icon -v-bg-primary" @click="click" />
            <label>inner-point</label>
        </div>
        <div>
            <i-cosmic-input class="icon -v-bg-primary" @click="click" />
            <label>input</label>
        </div>
        <div>
            <i-cosmic-insection class="icon -v-bg-primary" @click="click" />
            <label>insection</label>
        </div>
        <div>
            <i-cosmic-intersection class="icon -v-bg-primary" @click="click" />
            <label>intersection</label>
        </div>
        <div>
            <i-cosmic-iterms-center class="icon -v-bg-primary" @click="click" />
            <label>iterms-center</label>
        </div>
        <div>
            <i-cosmic-justify-center class="icon -v-bg-primary" @click="click" />
            <label>justify-center</label>
        </div>
        <div>
            <i-cosmic-layout class="icon -v-bg-primary" @click="click" />
            <label>layout</label>
        </div>
        <div>
            <i-cosmic-left-align class="icon -v-bg-primary" @click="click" />
            <label>left-align</label>
        </div>
        <div>
            <i-cosmic-line-height class="icon -v-bg-primary" @click="click" />
            <label>line-height</label>
        </div>
        <div>
            <i-cosmic-line-width class="icon -v-bg-primary" @click="click" />
            <label>line-width</label>
        </div>
        <div>
            <i-cosmic-link-circles class="icon -v-bg-primary" @click="click" />
            <label>link-circles</label>
        </div>
        <div>
            <i-cosmic-link class="icon -v-bg-primary" @click="click" />
            <label>link</label>
        </div>
        <div>
            <i-cosmic-linked-square class="icon -v-bg-primary" @click="click" />
            <label>linked-square</label>
        </div>
        <div>
            <i-cosmic-lock class="icon -v-bg-primary" @click="click" />
            <label>lock</label>
        </div>
        <div>
            <i-cosmic-minus class="icon -v-bg-primary" @click="click" />
            <label>minus</label>
        </div>
        <div>
            <i-cosmic-more class="icon -v-bg-primary" @click="click" />
            <label>more</label>
        </div>
        <div>
            <i-cosmic-night class="icon -v-bg-primary" @click="click" />
            <label>night</label>
        </div>
        <div>
            <i-cosmic-pipette class="icon -v-bg-primary" @click="click" />
            <label>pipette</label>
        </div>
        <div>
            <i-cosmic-play class="icon -v-bg-primary" @click="click" />
            <label>play</label>
        </div>
        <div>
            <i-cosmic-plus class="icon -v-bg-primary" @click="click" />
            <label>plus</label>
        </div>
        <div>
            <i-cosmic-question class="icon -v-bg-primary" @click="click" />
            <label>question</label>
        </div>
        <div>
            <i-cosmic-refresh class="icon -v-bg-primary" @click="click" />
            <label>refresh</label>
        </div>
        <div>
            <i-cosmic-reverse class="icon -v-bg-primary" @click="click" />
            <label>reverse</label>
        </div>
        <div>
            <i-cosmic-right-align class="icon -v-bg-primary" @click="click" />
            <label>right-align</label>
        </div>
        <div>
            <i-cosmic-right-turn class="icon -v-bg-primary" @click="click" />
            <label>right-turn</label>
        </div>
        <div>
            <i-cosmic-rounded-square class="icon -v-bg-primary" @click="click" />
            <label>rounded-square</label>
        </div>
        <div>
            <i-cosmic-scale class="icon -v-bg-primary" @click="click" />
            <label>scale</label>
        </div>
        <div>
            <i-cosmic-search class="icon -v-bg-primary" @click="click" />
            <label>search</label>
        </div>
        <div>
            <i-cosmic-segment class="icon -v-bg-primary" @click="click" />
            <label>segment</label>
        </div>
        <div>
            <i-cosmic-shadow class="icon -v-bg-primary" @click="click" />
            <label>shadow</label>
        </div>
        <div>
            <i-cosmic-square class="icon -v-bg-primary" @click="click" />
            <label>square</label>
        </div>
        <div>
            <i-cosmic-sun class="icon -v-bg-primary" @click="click" />
            <label>sun</label>
        </div>
        <div>
            <i-cosmic-text-center class="icon -v-bg-primary" @click="click" />
            <label>text-center</label>
        </div>
        <div>
            <i-cosmic-text-even class="icon -v-bg-primary" @click="click" />
            <label>text-even</label>
        </div>
        <div>
            <i-cosmic-text-left class="icon -v-bg-primary" @click="click" />
            <label>text-left</label>
        </div>
        <div>
            <i-cosmic-text-right class="icon -v-bg-primary" @click="click" />
            <label>text-right</label>
        </div>
        <div>
            <i-cosmic-text class="icon -v-bg-primary" @click="click" />
            <label>text</label>
        </div>
        <div>
            <i-cosmic-top-align class="icon -v-bg-primary" @click="click" />
            <label>top-align</label>
        </div>
        <div>
            <i-cosmic-unlock class="icon -v-bg-primary" @click="click" />
            <label>unlock</label>
        </div>
        <div>
            <i-cosmic-vertical-align class="icon -v-bg-primary" @click="click" />
            <label>vertical-align</label>
        </div>
        <div>
            <i-cosmic-vertical-height class="icon -v-bg-primary" @click="click" />
            <label>vertical-height</label>
        </div>
        <div>
            <i-cosmic-w class="icon -v-bg-primary" @click="click" />
            <label>w</label>
        </div>
        <div>
            <i-cosmic-width-auto class="icon -v-bg-primary" @click="click" />
            <label>width-auto</label>
        </div>
        <div>
            <i-cosmic-x class="icon -v-bg-primary" @click="click" />
            <label>x</label>
        </div>
        <div>
            <i-cosmic-y class="icon -v-bg-primary" @click="click" />
            <label>y</label>
        </div>
        <div>
            <i-cosmic-trash class="icon -v-bg-primary" @click="click" />
            <label>y</label>
        </div>
    </div>
</template>
<style>
.icon-list > div {
    margin: 10px;
    display: inline-block;
}
.icon-list > div > .icon {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
    user-select: none;
}
.icon-list > div > label {
    display: none;
}
</style>
