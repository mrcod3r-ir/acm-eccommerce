<template>
  <div class="flex flex-col space-y-3 justify-center items-center">
    <h1>my base components</h1>
    <app-button :variant="ButtonVariantEnum.primary">button</app-button>
    <app-button :variant="ButtonVariantEnum.accent" @click="modal = !modal"
      >show modal</app-button
    >
    <app-modal title="title of modal" v-model="modal"
      ><h1>hi from modal</h1></app-modal
    >
  </div>
</template>

<script lang="ts">
import { ButtonVariantEnum } from "~~/types";

export default {
  setup() {
    const modal = ref(false);
    return { ButtonVariantEnum, modal };
  },
};
</script>

<style lang="scss" scoped></style>
