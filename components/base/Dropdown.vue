<template>
  <div class="wrapper">
    <div class="label-wrapper">
      <BaseTypography
        v-if="label"
        tag="label"
        :for="id"
        variant="body-05"
        :color="status === 'error' ? 'error-01' : 'neutral-07'"
        >{{ label }}</BaseTypography
      >
    </div>
    <select
      v-bind="$attrs"
      :id="id"
      :class="['select', { error: status === 'error', 'with-label': label }]"
      @input="
        $emit('update:modelValue', ($event.target as HTMLSelectElement)?.value)
      "
    >
      <slot />
    </select>
    <BaseTypography
      v-if="helperText && status !== 'error'"
      variant="body-02"
      color="neutral-07"
      >{{ helperText }}</BaseTypography
    >
    <div v-if="status === 'error'" class="error-message-wrapper">
      <Icon name="jam:alert-f" size="16" />
      <BaseTypography variant="body-02" color="error-01">{{
        errorMessage
      }}</BaseTypography>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  id: string;
  label?: string;
  helperText?: string;
  status?: "default" | "error";
  errorMessage?: string;
};

defineEmits(["update:modelValue"]);

withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: undefined,
  helperText: undefined,
  status: "default",
  errorMessage: undefined,
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
}

.select {
  display: inline-flex;
  width: 100%;
  border-radius: 8px;
  padding: $spacing-4 $spacing-2;
  border: 1px solid $color-neutral-04;
  background-color: $color-shade-01;
  color: $color-shade-02;
  font: $font-body-02;
  box-sizing: border-box;
  transition:
    border-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  outline: none;

  &::placeholder {
    font: $font-body-02;
    color: $color-neutral-05;
  }

  &:focus {
    border-color: $color-shade-02;
  }

  &.error {
    background-color: $color-error-01;
    border-color: $color-error-02;
  }

  &.with-label {
    padding-top: $spacing-8;
  }
}

.label-wrapper {
  position: absolute;
  top: $spacing-3;
  left: $spacing-3;
}

.error-message-wrapper {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  color: $color-error-02;
}
</style>
