<script lang="ts">
import Button from "../components/button.vue";
import Icon from "../components/icon.vue";
import IconButtonStyle from '@cosmic-design/ui/button-icon.module.css';
export default {
  components: {
    Button, Icon
  },
  data() {
      return {
          IconButtonStyle: IconButtonStyle
      };
  }
};
</script>
<template>
<div class="content">
    <div>Cosmic Design Vue Components</div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm">Button</Button>
        <Button size="base">Button</Button>
        <Button size="lg">Button</Button>
    </div>
    <div class="button-group">
        <Button size="xs">Button</Button>
        <Button size="sm hover">Button</Button>
        <Button size="base active">Button</Button>
        <Button size="lg selected" disabled="true">Button</Button>
    </div>
    <div class="button-group">
        <Button size="xs" :styles=IconButtonStyle>
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="sm" class="hover" :styles=IconButtonStyle >
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="base" class="active" :styles=IconButtonStyle>
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
        <Button size="lg" class="selected" :styles=IconButtonStyle>
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>
            </template>
        </Button>
    </div>
    <div class="button-group">
        <Button size="base">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>Button
            </template>
        </Button>

        <Button size="base" :styles="styles">
            <template v-slot:prefix="props">
                <Icon svg="cursor" slot="prefix" :class="props.class"></Icon>Button
            </template>
        </Button>
    </div>
    
</div>
</template>
<style module="styles">
    .button {
        composes: button from '@cosmic-design/ui/button.module.css';
        background: green;
    }
    .button:hover {
        background: orange;
    }
    .prefix {
        composes: prefix from '@cosmic-design/ui/button.module.css';
    }
    .subfix {
        composes: subfix from '@cosmic-design/ui/button.module.css';
    }
</style>