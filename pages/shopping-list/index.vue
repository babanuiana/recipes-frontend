<template>
  <div>
    <LayoutHeader>
      <CategoryTabsList />
    </LayoutHeader>
    <main class="content-container">
      <LayoutContainer>
        <div class="centered-container">
          <div class="delete-all-wrapper">
            <BaseTypography class="add-to-list" variant="body-01-semibold">
              Список покупок
            </BaseTypography>
            <BaseCircularIconButton
              class="delete-all-button-mobile"
              icon="material-symbols:delete-sweep-outline"
              size="small"
              variant="primary"
              @click="shoppingListStore.deleteAllItems"
            />
          </div>
          <ShoppingList class="shopping-list" :shopping-list="shoppingList" />
          <BaseTypography class="add-to-list" variant="body-03-semibold">
            Добавить в список
          </BaseTypography>
          <ShoppingListAddItemField />
        </div>
      </LayoutContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useShoppingListStore } from "~/stores/shoppingList";
useHead(() => ({
  title: "Список покупок",
}));
const shoppingListStore = useShoppingListStore();
const shoppingList = computed(() => shoppingListStore.shoppingList);
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;

  @media screen and (max-width: $small-screen) {
    padding: 0 0 $spacing-12;
  }
}
.centered-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: $small-screen) {
    align-self: stretch;
    width: 100%;
    padding: $spacing-8 0 $spacing-16;
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
.delete-all-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.shopping-list {
  margin: $spacing-8 0 $spacing-8 0;
  width: 100%;
}
</style>
