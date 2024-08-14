<template>
  <div class="wrapper" ref="target">
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
    <input
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      :class="['typeahead', { error: status === 'error', 'with-label': label }]"
      @input="handleInput"
    />
    <div v-if="isOpen" class="typeahead-options">
      <button
        v-for="item in filteredItems"
        :key="item"
        type="button"
        class="typeahead-option"
        @click="handleSelect(item)"
      >
        {{ item }}
      </button>
    </div>
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
  modelValue?: string;
  errorMessage?: string;
  items: string[];
};

const target = ref(null);
onClickOutside(target, () => (isOpen.value = false));

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  label: undefined,
  helperText: undefined,
  status: "default",
  errorMessage: undefined,
});

const isOpen = ref(false);

const filteredItems = computed(() => {
  return props.items.filter((item) =>
    item.toLowerCase().includes(props.modelValue.toLowerCase())
  );
});

const handleInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  emit("update:modelValue", value);
  if (value.length > 0 && filteredItems.value.length > 0) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
};

const handleSelect = (item: string) => {
  emit("update:modelValue", item);
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
}

.typeahead {
  position: relative;
  display: inline-flex;
  width: 100%;
  border-radius: 8px;
  padding: $spacing-4 $spacing-3;
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
  z-index: 1;
}

.typeahead-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: $color-shade-01;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;
}

.typeahead-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: $spacing-3;
  background-color: $color-shade-01;
  color: $color-shade-02;
  font: $font-body-02;
  border: none;
  border-radius: 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: $color-neutral-04;
  }
}

.error-message-wrapper {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  color: $color-error-02;
}
</style>
