<template>
  <component :is="tag" v-bind="$attrs" :class="[variant, color]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Props = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
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
    | "primary-02";
};

withDefaults(defineProps<Props>(), {
  tag: "div",
  color: "shade-02",
});
</script>

<style lang="scss" scoped>
.shade-01 {
  color: $color-shade-01;
}

.shade-02 {
  color: $color-shade-02;
}

.shade-03 {
  color: $color-shade-03;
}

.shade-04 {
  color: $color-shade-04;
}

.neutral-01 {
  color: $color-neutral-01;
}

.neutral-02 {
  color: $color-neutral-02;
}

.neutral-03 {
  color: $color-neutral-03;
}

.neutral-04 {
  color: $color-neutral-04;
}

.neutral-05 {
  color: $color-neutral-05;
}

.neutral-06 {
  color: $color-neutral-06;
}

.neutral-07 {
  color: $color-neutral-07;
}

.neutral-08 {
  color: $color-neutral-08;
}

.primary-01 {
  color: $color-primary-01;
}

.primary-02 {
  color: $color-primary-02;
}

.heading-01 {
  font: $font-heading-01;
}

.heading-01-semibold {
  font: $font-heading-01-semibold;
}

.body-01 {
  font: $font-body-01;
}

.body-01-medium {
  font: $font-body-01-medium;
}

.body-01-semibold {
  font: $font-body-01-semibold;
}

.body-02 {
  font: $font-body-02;
}

.body-02-medium {
  font: $font-body-02-medium;
}

.body-02-semibold {
  font: $font-body-02-semibold;
}

.body-03 {
  font: $font-body-03;
}

.body-03-semibold {
  font: $font-body-03-semibold;
}

.body-04 {
  font: $font-body-04;
}

.body-04-semibold {
  font: $font-body-04-semibold;
}

.body-05 {
  font: $font-body-05;
}

.body-05-medium {
  font: $font-body-05-medium;
}

.body-05-semibold {
  font: $font-body-05-semibold;
}

.micro-01 {
  font: $font-micro-01;
}
</style>
