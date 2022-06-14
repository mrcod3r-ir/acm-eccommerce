<template>
  <div class="flex flex-col space-y-3 justify-center items-center">
    <h1>my base components</h1>
    <app-button :variant="ButtonVariantEnum.primary">button</app-button>
    <app-modal title="some">modal</app-modal>
  </div>
</template>

<script lang="ts">
import { ButtonVariantEnum } from "~~/types";

export default {
  setup() {
    return { ButtonVariantEnum };
  },
};
</script>

<style lang="scss" scoped></style>
