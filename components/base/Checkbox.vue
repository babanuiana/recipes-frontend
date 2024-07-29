<template>
  <label class="checkbox">
    <input class="checkbox-input" type="checkbox" v-model="model" />
    <span class="checkmark" />
  </label>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.checkmark {
  display: block;
  position: relative;
  height: 24px;
  width: 24px;
  background-color: $color-shade-01;
  border: 1px solid $color-neutral-04;
  border-radius: 4px;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.checkbox-input:checked ~ .checkmark {
  background-color: $color-primary-01;
  border-color: $color-primary-01;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-input:checked ~ .checkmark:after {
  display: block;
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
  top: calc(50% - 1px);
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 6px;
  height: 12px;
  border: solid $color-shade-01;
  border-width: 0 2px 2px 0;
}
</style>
