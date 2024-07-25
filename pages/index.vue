<template>
  <div>
    <LayoutHeader>
      <CategoryTabsList />
    </LayoutHeader>
    <main class="content-container">
      <LayoutContainer>
        <div v-if="data && status === 'success'" class="grid-wrapper">
          <div class="grid-header">
            <BaseTypography
              tag="h1"
              variant="heading-01-semibold"
              class="heading"
            >
              Рецепты
            </BaseTypography>
            <div class="recipes-actions">
              <BaseCircularIconButton
                v-if="useAuthStore().isAdmin"
                icon="ic:baseline-plus"
                variant="primary"
                @click="$router.push('/admin/add-recipe')"
              />
              <!-- <BaseChip>
                <template #icon><Icon name="ion:filter" /></template>
                <span>Фильтр</span>
              </BaseChip> -->
            </div>
          </div>
          <RecipesListGrid>
            <RecipesListItem
              v-for="recipe in data"
              :key="recipe.id"
              :recipe="recipe"
            />
          </RecipesListGrid>
        </div>
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
const baseUrl = useBaseUrl();

const category = computed(() =>
  route.query.category?.toString()?.toUpperCase()
);

const { data, status, refresh } = useFetch<Recipe[]>(`${baseUrl}/recipes`, {
  query: {
    category,
  },
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

provide("refreshData", refresh);
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;
}

.grid-wrapper {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $spacing-4;
  flex-wrap: wrap;
}

.recipes-actions {
  display: flex;
  align-items: center;
  gap: $spacing-4;
}
</style>
