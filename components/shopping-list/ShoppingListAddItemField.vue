<template>
  <div>
    <div class="add-item-wrapper">
      <BaseInput
        id="ingredient"
        class="ingredient-input"
        label="Ingredient"
        type="text"
        v-model="newItem"
      />
      <BaseCircularIconButton
        icon="material-symbols:add"
        size="small"
        variant="tertiary"
        @click="handleAddItem"
        :disabled="!newItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShoppingListStore } from "~/stores/shoppingList";

const shoppingListStore = useShoppingListStore();
const newItem = ref("");

const handleAddItem = () => {
  shoppingListStore.addItem(newItem.value);
  newItem.value = "";
};
</script>
<style lang="scss" scoped>
.ingredient-input {
  width: 100%;
}
.add-item-wrapper {
  display: flex;
  gap: $spacing-5;
  align-items: center;
  width: 100%;
}
</style>
