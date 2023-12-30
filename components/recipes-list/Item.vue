<template>
  <NuxtLink :to="`/recipes/${recipe.id}`" class="link">
    <div class="wrapper">
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
        <BaseTypography variant="body-04" color="neutral-08">{{
          characteristicsText
        }}</BaseTypography>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

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

.wrapper {
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: $spacing-4;
}

.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-0_5;
}
</style>
