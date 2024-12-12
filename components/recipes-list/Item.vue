<template>
  <div class="wrapper">
    <NuxtLink :to="`/recipes/${recipe.id}`" class="link">
      <div class="image-wrapper">
        <ImageCloudinary
          :src="recipe.imageUri"
          :alt="recipe.name"
          fit="cover"
          width="700"
          class="image"
        />
      </div>
      <div class="content">
        <BaseTypography variant="body-02-semibold" tag="h2" class="name">{{
          recipe.name
        }}</BaseTypography>
        <BaseTypography
          variant="body-04"
          color="neutral-08"
          class="ingredients"
          >{{ characteristicsText }}</BaseTypography
        >
      </div>
    </NuxtLink>
    <BaseCircularIconButton
      v-if="authStore.isAdmin"
      icon="ph:trash"
      size="small"
      variant="quinary"
      class="delete-button"
      @click="openModal = 'delete-recipe'"
    />
    <RecipesListDeleteRecipeModal
      v-if="openModal === 'delete-recipe'"
      :id="recipe.id"
      :name="recipe.name"
      @close="openModal = null"
      @click-sign-in="openModal = 'delete-recipe'"
    />
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/recipe";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

const openModal = ref<"delete-recipe" | null>(null);

const props = defineProps<{
  recipe: Recipe;
}>();

const characteristicsText = computed(() =>
  [
    props.recipe.recipeIngredients.length &&
      `${props.recipe.recipeIngredients.length} ингридиентов`,
    props.recipe.timeToCookInMinutes &&
      `${props.recipe.timeToCookInMinutes} минут`,
  ]
    .filter(Boolean)
    .join(" • ")
);
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: inherit;

  &:hover .name {
    text-decoration: underline;
  }
}
.ingredients {
  text-decoration: none;
}
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.delete-button {
  position: absolute;
  top: 158px;
  right: $spacing-2;
  z-index: 1;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  user-select: none;
}

.content {
  margin-top: $spacing-4;
  display: flex;
  flex-direction: column;
  gap: $spacing-0_5;
}
</style>
