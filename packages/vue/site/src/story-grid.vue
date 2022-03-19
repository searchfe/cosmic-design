<script setup lang="ts">
import { Row, Col } from 'cosmic-vue';
</script>

<template>
    <Row class="row">
        <Col class="col" :span="12">col</Col>
    </Row>
    <Row class="row">
        <Col class="col" :span="6">col-6</Col>
        <Col class="col" :span="6">col-6</Col>
    </Row>
    <Row class="row">
        <Col class="col" :span="4">col-4</Col>
        <Col class="col" :span="4">col-4</Col>
        <Col class="col" :span="4">col-4</Col>
    </Row>
    <Row class="row" :gutter="20" :spans="12">
        <Col v-for="i in 4" :key="i" :span="3">
            <section class="col">col-3</section>
        </Col>
    </Row>
</template>

<style scoped>
.row > .col:nth-child(2n + 1),
.row > :nth-child(2n + 1) .col {
    background-color: var(--color-primary-400);
}

.row .col {
    background-color: var(--color-primary-600);
    min-height: 30px;
    margin: 8px 0;
    padding: 16px 0;
    text-align: center;
    color: var(--color-white);
    font-size: 14px;
}
</style>
