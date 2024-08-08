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
            <BaseButton
              class="delete-all-button"
              variant="tertiary"
              size="small"
              >Удалить все</BaseButton
            >
          </div>
          <ShoppingList class="shopping-list" :shoppingList="shoppingList" />
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
onMounted(() => {
  shoppingListStore.loadList();
});
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
  width: 50%;
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
  .button {
    padding: $spacing-2 $spacing-6;
    border-radius: 30px;
  }
}
.shopping-list {
  margin: $spacing-8 0 $spacing-8 0;
  width: 100%;
}
</style>
