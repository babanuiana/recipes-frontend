<template>
  <NuxtLink :href="href" :class="['tab-wrapper', { active }]">
    <div class="icon">
      <slot name="icon" />
    </div>
    <BaseTypography variant="body-05-semibold" color="neutral-08" class="title">
      <slot />
    </BaseTypography>
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  href: string;
  active?: boolean;
};

withDefaults(defineProps<Props>(), {
  active: false,
});
</script>

<style lang="scss" scoped>
.tab-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: $color-neutral-08;
  border-bottom: 2px solid transparent;
  padding: $spacing-3 0;
  transition:
    color 0.2s ease-in-out,
    border-bottom 0.2s ease-in-out;

  &:hover {
    color: $color-shade-02;
    border-bottom: 2px solid $color-neutral-08;
  }

  &.active {
    color: $color-primary-01;
    border-bottom: 2px solid $color-shade-02;

    .title {
      color: $color-shade-02;
    }
  }
}

.icon {
  width: 36px;
  height: 36px;
}

.title {
  color: inherit;
}
</style>
