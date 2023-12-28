<template>
  <div class="wrapper">
    <div class="hero-image">
      <ImageCloudinary
        :src="recipe.imageUri"
        :alt="recipe.name"
        fit="cover"
        class="image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from "~/types/recipe";

defineProps<{
  recipe: Recipe;
}>();
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: $extra-large-screen;
  margin: 0 auto;
  padding: 0 $spacing-5;

  @media (max-width: $small-screen) {
    padding: 0;
  }
}

.hero-image {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: $small-screen) {
    border-radius: 0;
    height: 250px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
