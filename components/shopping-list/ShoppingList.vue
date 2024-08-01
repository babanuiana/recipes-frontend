<template>
  <ul>
    <ShoppingListItem
      v-for="item in shoppingList"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  shoppingList: [];
}>();

console.log("shopping list", props);
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;

  @media screen and (max-width: $small-screen) {
    padding: 0 0 $spacing-12;
  }
}

.ingredient-input {
  width: 50%;
}
.add-item-wrapper {
  display: flex;
  gap: $spacing-5;
  align-items: center;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
