<template>
  <Teleport to="body">
    <div class="backdrop"></div>
    <div class="modal-container">
      <div :class="['modal', size]" role="dialog" aria-modal="true">
        <header class="header">
          <div class="header-content">
            <BaseTypography v-if="$slots.header" variant="body-02-medium">
              <slot name="header" />
            </BaseTypography>
          </div>
          <BaseCircularIconButton
            variant="quaternary"
            icon="uiw:close"
            @click="$emit('close')"
          />
        </header>
        <BaseDivider />
        <div class="content">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
// Added explicit import because of the Storybook issue
import BaseTypography from "../Typography/Typography.vue";
import BaseDivider from "../Divider/Divider.vue";
import BaseCircularIconButton from "../CircularIconButton/CircularIconButton.vue";

type Props = {
  size?: "small" | "medium" | "large";
};

defineEmits(["close"]);
withDefaults(defineProps<Props>(), {
  size: "small",
});
</script>

<style lang="scss" scoped>
.backdrop {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: $backdrop;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $overflow;
}

.modal {
  display: flex;
  flex-direction: column;
  background-color: $color-shade-01;
  border-radius: 12px;
  box-shadow: $elevation-01;
  max-width: 100%;
}

.small {
  width: 400px;
}

.medium {
  width: 568px;
}

.large {
  width: 768px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-2;
  padding: $spacing-6;
}

.header-content {
  flex: 1;
}

.content {
  flex: 1;
  padding: $spacing-6;
  @media screen and (max-width: $small-screen) {
    display: flex;
  }
}

@media screen and (max-width: $small-screen) {
  .modal {
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    min-width: auto;
  }
}
</style>
