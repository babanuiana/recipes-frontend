<template>
  <div>
    <LayoutHeader />
    <main class="content-container">
      <template v-if="data && status === 'success'">
        <div class="heading-section">
          <LayoutContainer>
            <BaseTypography tag="h1" variant="heading-01-semibold">
              {{ data.name }}
            </BaseTypography>
          </LayoutContainer>
          <RecipeDetailsHeroImage v-if="data.imageUri" :recipe="data" />
        </div>
        <LayoutContainer>
          <BaseTypography
            variant="body-04"
            color="neutral-08"
            class="characteristics-desktop"
          >
            {{ characteristicsText }}
          </BaseTypography>
          <BaseTypography tag="p" variant="body-03" class="description">
            {{ data.description }}
          </BaseTypography>
          <div class="characteristics-wrapper-mobile">
            <div class="characteristic">
              <Icon name="ep:food" class="characteristic-icon" />
              <BaseTypography
                tag="p"
                variant="body-05-semibold"
                color="neutral-08"
              >
                {{ data.recipeIngredients.length }} ингредиентов
              </BaseTypography>
            </div>
            <div v-if="data.timeToCookInMinutes" class="characteristic">
              <Icon name="ep:clock" class="characteristic-icon" />
              <BaseTypography
                tag="p"
                variant="body-05-semibold"
                color="neutral-08"
              >
                {{ data.timeToCookInMinutes }} минут
              </BaseTypography>
            </div>
          </div>
          <div class="ingredients-section">
            <BaseTypography
              tag="h2"
              variant="body-01-semibold"
              class="ingredients-heading"
            >
              Ингредиенты
            </BaseTypography>
            <ul class="ingredients-list">
              <li
                v-for="ingredient in data.recipeIngredients"
                :key="ingredient.id"
                class="ingredient"
              >
                <BaseTypography
                  tag="span"
                  variant="body-03"
                  class="ingredient-name"
                >
                  {{ ingredient.description }} -
                </BaseTypography>
                <BaseTypography
                  tag="span"
                  variant="body-04"
                  color="neutral-08"
                  class="ingredient-quantity"
                >
                  {{ ingredient.quantity }} {{ ingredient.unit }}
                </BaseTypography>
              </li>
            </ul>
          </div>
        </LayoutContainer>
      </template>
      <LayoutContainer v-else>
        <LayoutPageLoader />
      </LayoutContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import type { Recipe } from "~/types/recipe";

const { params } = useRoute();
const { token } = useAuthStore();

const { data, status } = useFetch<Recipe>(
  `http://localhost:4000/recipes/${params.id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    key: `recipe-${params.id}-token-${token}`,
  }
);

const characteristicsText = computed(() =>
  [
    data.value?.recipeIngredients.length &&
      `${data.value?.recipeIngredients.length} ingredients`,
    data.value?.timeToCookInMinutes &&
      `${data.value?.timeToCookInMinutes} minutes`,
  ]
    .filter(Boolean)
    .join(" • ")
);
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;

  @media screen and (max-width: $small-screen) {
    padding: 0 0 $spacing-12;
  }
}

.heading-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-6;
  margin-bottom: $spacing-5;

  @media screen and (max-width: $small-screen) {
    flex-direction: column-reverse;
    margin-bottom: $spacing-2;
  }
}

.description {
  margin-bottom: $spacing-5;
}

.characteristics-wrapper-mobile {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: $spacing-10;
  border: 1px solid $color-neutral-05;
  border-radius: 12px;
  padding: $spacing-4 $spacing-5;
  margin-bottom: $spacing-5;

  @media screen and (min-width: $medium-screen) {
    display: none;
  }
}

.characteristic {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-3;
}

.characteristic-icon {
  width: 48px;
  height: 48px;
  color: $color-neutral-07;
}

.characteristics-desktop {
  display: none;

  @media screen and (min-width: $medium-screen) {
    display: block;
    margin-bottom: $spacing-1;
  }
}

.ingredients-section {
  margin-bottom: $spacing-5;
}

.ingredients-heading {
  margin-bottom: $spacing-3;
}

.ingredients-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ingredient {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  margin-bottom: $spacing-2;
}
</style>
