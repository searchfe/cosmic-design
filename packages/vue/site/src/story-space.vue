<script setup lang="ts">
import { Space, Button } from 'cosmic-vue';
</script>

<template>
    <Space>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
        <Space direction="vertical">
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
            <Space size="lg">
                <Space direction="vertical" size="lg">
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                    <Button>D</Button>
                </Space>
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
                <Button>D</Button>
            </Space>
        </Space>
    </Space>
</template>
