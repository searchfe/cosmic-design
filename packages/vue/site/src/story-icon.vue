<script lang="ts" setup>
import { ref } from 'vue';
import Copy from './copy.vue';
function click(payload: MouseEvent) {
    // const root: HTMLElement;
    (payload.path as HTMLElement[]).forEach(p => {
        if (p.classList && p.classList.contains('bg-primary')) {
            value.value = p.parentElement?.childNodes[1].innerHTML;
        }
    });
    // console.log(payload.path);
}
const value = ref('');
</script>
<template>
    <div>
        <span class="font-bold text-lg mr-md">Icon List</span>
        <span class="text-sm opacity-30">Click to copy</span>
    </div>
    <div class="icon-list">
        <copy :value="value" />
        <div>
            <i-cosmic-align class="icon bg-primary-fit" @click="click" />
            <label>align</label>
        </div>
        <div>
            <i-cosmic-arrow-down class="icon bg-primary-fit" @click="click" />
            <label>arrow-down</label>
        </div>
        <div>
            <i-cosmic-arrow-right class="icon bg-primary-fit" @click="click" />
            <label>arrow-right</label>
        </div>
        <div>
            <i-cosmic-arrow class="icon bg-primary-fit" @click="click" />
            <label>arrow</label>
        </div>
        <div>
            <i-cosmic-board class="icon bg-primary-fit" @click="click" />
            <label>board</label>
        </div>
        <div>
            <i-cosmic-bottom-align class="icon bg-primary-fit" @click="click" />
            <label>bottom-align</label>
        </div>
        <div>
            <i-cosmic-canvas class="icon bg-primary-fit" @click="click" />
            <label>canvas</label>
        </div>
        <div>
            <i-cosmic-caution class="icon bg-primary-fit" @click="click" />
            <label>caution</label>
        </div>
        <div>
            <i-cosmic-check class="icon bg-primary-fit" @click="click" />
            <label>check</label>
        </div>
        <div>
            <i-cosmic-circleend class="icon bg-primary-fit" @click="click" />
            <label>circleend</label>
        </div>
        <div>
            <i-cosmic-circles class="icon bg-primary-fit" @click="click" />
            <label>circles</label>
        </div>
        <div>
            <i-cosmic-close class="icon bg-primary-fit" @click="click" />
            <label>close</label>
        </div>
        <div>
            <i-cosmic-collapsed class="icon bg-primary-fit" @click="click" />
            <label>collapsed</label>
        </div>
        <div>
            <i-cosmic-comp class="icon bg-primary-fit" @click="click" />
            <label>comp</label>
        </div>
        <div>
            <i-cosmic-cursor class="icon bg-primary-fit" @click="click" />
            <label>cursor</label>
        </div>
        <div>
            <i-cosmic-dark class="icon bg-primary-fit" @click="click" />
            <label>dark</label>
        </div>
        <div>
            <i-cosmic-dotted-square class="icon bg-primary-fit" @click="click" />
            <label>dotted-square</label>
        </div>
        <div>
            <i-cosmic-double-circle class="icon bg-primary-fit" @click="click" />
            <label>double-circle</label>
        </div>
        <div>
            <i-cosmic-download class="icon bg-primary-fit" @click="click" />
            <label>download</label>
        </div>
        <div>
            <i-cosmic-endpoint class="icon bg-primary-fit" @click="click" />
            <label>endpoint</label>
        </div>
        <div>
            <i-cosmic-eye-closed class="icon bg-primary-fit" @click="click" />
            <label>eye-closed</label>
        </div>
        <div>
            <i-cosmic-eye-open class="icon bg-primary-fit" @click="click" />
            <label>eye-open</label>
        </div>
        <div>
            <i-cosmic-font class="icon bg-primary-fit" @click="click" />
            <label>font</label>
        </div>
        <div>
            <i-cosmic-fuzzy class="icon bg-primary-fit" @click="click" />
            <label>fuzzy</label>
        </div>
        <div>
            <i-cosmic-grid-outline class="icon bg-primary-fit" @click="click" />
            <label>grid-outline</label>
        </div>
        <div>
            <i-cosmic-grid class="icon bg-primary-fit" @click="click" />
            <label>grid</label>
        </div>
        <div>
            <i-cosmic-group class="icon bg-primary-fit" @click="click" />
            <label>group</label>
        </div>
        <div>
            <i-cosmic-horizonal-align class="icon bg-primary-fit" @click="click" />
            <label>horizonal-align</label>
        </div>
        <div>
            <i-cosmic-horizonal-overturn class="icon bg-primary-fit" @click="click" />
            <label>horizonal-overturn</label>
        </div>
        <div>
            <i-cosmic-horizonal-width class="icon bg-primary-fit" @click="click" />
            <label>horizonal-width</label>
        </div>
        <div>
            <i-cosmic-inner-point class="icon bg-primary-fit" @click="click" />
            <label>inner-point</label>
        </div>
        <div>
            <i-cosmic-insection class="icon bg-primary-fit" @click="click" />
            <label>insection</label>
        </div>
        <div>
            <i-cosmic-iterms-center class="icon bg-primary-fit" @click="click" />
            <label>iterms-center</label>
        </div>
        <div>
            <i-cosmic-justify-center class="icon bg-primary-fit" @click="click" />
            <label>justify-center</label>
        </div>
        <div>
            <i-cosmic-left-align class="icon bg-primary-fit" @click="click" />
            <label>left-align</label>
        </div>
        <div>
            <i-cosmic-line-height class="icon bg-primary-fit" @click="click" />
            <label>line-height</label>
        </div>
        <div>
            <i-cosmic-link class="icon bg-primary-fit" @click="click" />
            <label>link</label>
        </div>
        <div>
            <i-cosmic-linked-square class="icon bg-primary-fit" @click="click" />
            <label>linked-square</label>
        </div>
        <div>
            <i-cosmic-lock class="icon bg-primary-fit" @click="click" />
            <label>lock</label>
        </div>
        <div>
            <i-cosmic-minus class="icon bg-primary-fit" @click="click" />
            <label>minus</label>
        </div>
        <div>
            <i-cosmic-more class="icon bg-primary-fit" @click="click" />
            <label>more</label>
        </div>
        <div>
            <i-cosmic-night class="icon bg-primary-fit" @click="click" />
            <label>night</label>
        </div>
        <div>
            <i-cosmic-pipette class="icon bg-primary-fit" @click="click" />
            <label>pipette</label>
        </div>
        <div>
            <i-cosmic-play class="icon bg-primary-fit" @click="click" />
            <label>play</label>
        </div>
        <div>
            <i-cosmic-plus class="icon bg-primary-fit" @click="click" />
            <label>plus</label>
        </div>
        <div>
            <i-cosmic-question class="icon bg-primary-fit" @click="click" />
            <label>question</label>
        </div>
        <div>
            <i-cosmic-refresh class="icon bg-primary-fit" @click="click" />
            <label>refresh</label>
        </div>
        <div>
            <i-cosmic-right-align class="icon bg-primary-fit" @click="click" />
            <label>right-align</label>
        </div>
        <div>
            <i-cosmic-right-turn class="icon bg-primary-fit" @click="click" />
            <label>right-turn</label>
        </div>
        <div>
            <i-cosmic-rounded-square class="icon bg-primary-fit" @click="click" />
            <label>rounded-square</label>
        </div>
        <div>
            <i-cosmic-segment class="icon bg-primary-fit" @click="click" />
            <label>segment</label>
        </div>
        <div>
            <i-cosmic-square class="icon bg-primary-fit" @click="click" />
            <label>square</label>
        </div>
        <div>
            <i-cosmic-sun class="icon bg-primary-fit" @click="click" />
            <label>sun</label>
        </div>
        <div>
            <i-cosmic-text-center class="icon bg-primary-fit" @click="click" />
            <label>text-center</label>
        </div>
        <div>
            <i-cosmic-text-even class="icon bg-primary-fit" @click="click" />
            <label>text-even</label>
        </div>
        <div>
            <i-cosmic-text-left class="icon bg-primary-fit" @click="click" />
            <label>text-left</label>
        </div>
        <div>
            <i-cosmic-text-right class="icon bg-primary-fit" @click="click" />
            <label>text-right</label>
        </div>
        <div>
            <i-cosmic-top-align class="icon bg-primary-fit" @click="click" />
            <label>top-align</label>
        </div>
        <div>
            <i-cosmic-unlock class="icon bg-primary-fit" @click="click" />
            <label>unlock</label>
        </div>
        <div>
            <i-cosmic-vertical-align class="icon bg-primary-fit" @click="click" />
            <label>vertical-align</label>
        </div>
        <div>
            <i-cosmic-vertical-height class="icon bg-primary-fit" @click="click" />
            <label>vertical-height</label>
        </div>
        <div>
            <i-cosmic-vertical-overturn class="icon bg-primary-fit" @click="click" />
            <label>vertical-overturn</label>
        </div>
        <div>
            <i-cosmic-width-auto class="icon bg-primary-fit" @click="click" />
            <label>width-auto</label>
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
}
.icon-list > div > label {
    display: none;
}
</style>