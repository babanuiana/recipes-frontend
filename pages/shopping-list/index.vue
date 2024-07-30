<template>
  <div>
    <LayoutHeader>
      <CategoryTabsList />
    </LayoutHeader>
    <main class="content-container">
      <LayoutContainer>
        <!-- <h1>Shopping List</h1> -->
        <div class="input-content">
          <!-- <BaseCheckbox v-model="isAllChecked" @change="handleAllCheck" /> -->

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
          <div>
            <ul>
              <li v-for="item in shoppingList" :key="item.id">
                <span :class="{ purchased: item.isPurchased }">{{
                  item.text
                }}</span>
              </li>
            </ul>
          </div>
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
  shoppingListStore.addSampleItems();
});
const shoppingList = computed(() => shoppingListStore.shoppingList);
const newItem = ref("");

const handleAddItem = () => {
  shoppingListStore.addItem(newItem.value);
  // Clear the input field
  newItem.value = "";
};
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
.input-content {
  display: flex;
  gap: $spacing-5;
  align-items: left;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: $spacing-3;
  }

  .purchased {
    text-decoration: line-through;
  }
}
</style>
