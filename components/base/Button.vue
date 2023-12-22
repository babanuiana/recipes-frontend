<template>
  <button :class="['button', variant, size]" :disabled="disabled">
    <BaseTypography :variant="textVariant" :color="textColor">
      <slot />
    </BaseTypography>
  </button>
</template>

<script setup lang="ts">
type Props = {
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "full-width";
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "small",
});

const textColor = computed(() => {
  if (props.disabled) {
    return "shade-01";
  }

  return (
    {
      primary: "shade-01",
      secondary: "shade-01",
      tertiary: "shade-02",
    } as const
  )[props.variant];
});

const textVariant = computed(() => {
  return (
    {
      small: "body-04-semibold",
      "full-width": "body-02-semibold",
    } as const
  )[props.size];
});
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
}

.small {
  padding: $spacing-4 $spacing-6;
}

.full-width {
  display: flex;
  width: 100%;
  padding: $spacing-3_5 $spacing-5;
}

.primary {
  background: $color-primary-01;

  &:hover {
    background: $color-primary-03;
  }

  &:active {
    background: $color-primary-02;
  }
}

.secondary {
  background: $color-shade-02;

  &:hover {
    background: $color-shade-02;
  }

  &:active {
    background: $color-shade-02;
  }
}

.tertiary {
  background: $color-shade-01;
  border: 1px solid $color-shade-02;

  &:hover {
    background: $color-neutral-04;
  }

  &:active {
    background: $color-neutral-05;
  }
}

.button:disabled {
  background: $color-neutral-04;
  cursor: not-allowed;
}
</style>
