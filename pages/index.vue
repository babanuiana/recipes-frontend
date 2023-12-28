<template>
  <div>
    <LayoutHeader>
      <CategoryTabsList />
    </LayoutHeader>
    <main class="content-container">
      <LayoutContainer>
        <RecipesListGrid v-if="data">
          <RecipesListItem
            v-for="recipe in data"
            :key="recipe.id"
            :recipe="recipe"
          />
        </RecipesListGrid>
        <LayoutPageLoader v-else />
      </LayoutContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import type { Recipe } from "~/types/recipe";

const route = useRoute();
const { token } = useAuthStore();

const category = computed(
  () => route.query.category?.toString()?.toUpperCase()
);

const { data } = useFetch<Recipe[]>("http://localhost:4000/recipes", {
  key: `recipes-${category}-token-${token}`,
  query: {
    category,
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;
}
</style>
