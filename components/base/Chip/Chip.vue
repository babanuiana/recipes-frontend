<template>
  <button class="chip" type="button">
    <slot name="icon" />
    <BaseTypography tag="span" variant="body-03-semibold">
      <slot />
    </BaseTypography>
  </button>
</template>

<script setup lang="ts">
// Added explicit import because of the Storybook issue
import BaseTypography from "../Typography/Typography.vue";
</script>

<style lang="scss" scoped>
.chip {
  display: flex;
  padding: $spacing-2_5 $spacing-5;
  justify-content: center;
  align-items: center;
  gap: $spacing-2;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid $color-neutral-03;
  background: $color-shade-01;
  transition:
    background 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    background: $color-neutral-01;
  }

  &:active {
    transform: scale(0.9);
    background: $color-neutral-02;
  }
}
</style>
