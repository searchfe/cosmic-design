<script lang="ts" setup>
const themes = ['theme-red', 'theme-orange', 'theme-cyan'];
function changeTheme(theme: string) {
    document.body.classList.remove(...themes);
    if (theme) document.body.classList.add(theme);
}
function changeMode(mode: string) {
    if (mode) {
        document.body.classList.add(mode);
    } else {
        document.body.classList.remove('mode-dark');
    }
}
</script>
<template>
    <section class="wrapper">
        <div class="primary">
            <div class="default" @click="changeTheme('')"/>
            <div class="theme-red" @click="changeTheme('theme-red')" />
            <div class="theme-orange" @click="changeTheme('theme-orange')" />
            <div class="theme-cyan" @click="changeTheme('theme-cyan')" />
        </div>
        <div class="theme">
            <i-cosmic-sun class="light" @click="changeMode('')" />
            <i-cosmic-dark class="dark" @click="changeMode('mode-dark')" />
        </div>
    </section>
</template>
<style scoped>
.wrapper {
    position: absolute;
    top: 2rem;
    right: 1rem;
}
.primary > div{
    display: inline-block;
    cursor: pointer;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 0.5rem;
    background-color: var(--color-primary);
    margin-right: 0.5rem;
    opacity: var(--opacity-70);
        vertical-align: middle;
}
.primary > div:hover {
    opacity: 1;
}
.primary , .theme{
    display: inline-block;
    margin-right: 1rem;
}
.theme > * {
    cursor: pointer;
    font-size: 2.2rem;
    border-radius: 0.5rem;
    opacity: var(--opacity-70);
    margin-right: 0.5rem;
    vertical-align: middle;
}
.theme > *:hover {
    opacity: 1;
}
.dark {
    color: var(--color-background);
    background: var(--color-text);
}
.mode-dark .dark {
    color: var(--color-text);
    background: var(--color-background);
}
.default {
    --color-primary: #546BFF;
}
.mode-dark .light{
    color: var(--color-background);
    background: var(--color-text);
}
</style>