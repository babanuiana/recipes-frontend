<template>
  <button :class="['button', variant, buttonSize]">
    <Icon :name="icon" :size="iconSize" />
  </button>
</template>

<script setup lang="ts">
type Props = {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  icon: string;
  size?: "small" | "medium" | "large";
};

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "small",
});

const buttonSize = computed(() => {
  return (
    {
      small: "button-small",
      medium: "button-medium",
      large: "button-large",
    } as const
  )[props.size];
});

const iconSize = computed(() => {
  return (
    {
      small: "16",
      medium: "24",
      large: "32",
    } as const
  )[props.size];
});
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
}

.button-small {
  width: 32px;
  height: 32px;
}

.button-medium {
  width: 48px;
  height: 48px;
}

.button-large {
  width: 64px;
  height: 64px;
}

.primary {
  background-color: $color-shade-01;
  color: $color-shade-02;
  border: 1px solid $color-shade-02;

  &:hover {
    background-color: $color-shade-02;
    color: $color-shade-01;
  }
}

.secondary {
  background-color: $color-shade-02;
  color: $color-shade-01;
}

.tertiary {
  background-color: $color-primary-01;
  color: $color-shade-01;

  &:hover {
    background-color: $color-primary-02;
  }

  &:active {
    background-color: $color-primary-03;
  }
}

.quaternary {
  background-color: $color-shade-01;
  color: $color-shade-02;

  &:hover {
    background-color: $color-neutral-03;
  }

  &:active {
    background-color: $color-neutral-04;
  }
}
</style>
