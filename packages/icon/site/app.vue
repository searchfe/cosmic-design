<template>
    <div class="content">
        <div style="margin-bottom: 10px">Cosmic Icon</div>
        <!-- add your icon following to preview -->
        <div class="icon-list">
            __ICON_SHOW_CASES__
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.icon-list > div {
    margin: 10px;
    display: inline-block;
}
.icon-list > div > .icon {
    display: block;
    font-size: 36px;
    background-color: purple;
    width: 100px;
    height: 100px;
    color: white;
}
.icon-list > div > label {
    font-size: 14px;
}
</style>