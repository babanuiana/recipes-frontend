<template>
  <a v-if="href" v-bind="$attrs" class="link" href="href">
    <BaseTypography :variant="variant" :color="color" tag="span">
      <slot />
    </BaseTypography>
  </a>
  <button v-else v-bind="$attrs" class="link">
    <BaseTypography :variant="variant" :color="color" tag="span">
      <slot />
    </BaseTypography>
  </button>
</template>

<script setup lang="ts">
import BaseTypography from "@/components/base/Typography.vue";

type Props = {
  href?: string;
  variant:
    | "heading-01"
    | "heading-01-semibold"
    | "body-01"
    | "body-01-medium"
    | "body-01-semibold"
    | "body-02"
    | "body-02-medium"
    | "body-02-semibold"
    | "body-03"
    | "body-03-semibold"
    | "body-04"
    | "body-04-semibold"
    | "body-05"
    | "body-05-medium"
    | "body-05-semibold"
    | "micro-01";
  color?:
    | "shade-01"
    | "shade-02"
    | "shade-03"
    | "shade-04"
    | "neutral-01"
    | "neutral-02"
    | "neutral-03"
    | "neutral-04"
    | "neutral-05"
    | "neutral-06"
    | "neutral-07"
    | "neutral-08"
    | "primary-01"
    | "primary-02"
    | "error-01";
};

withDefaults(defineProps<Props>(), {
  href: undefined,
  color: "shade-02",
});
</script>

<style lang="scss" scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
