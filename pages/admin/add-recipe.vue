<template>
  <div>
    <LayoutHeader />
    <main class="content-container">
      <LayoutContainer>
        <form class="form-content" @submit.prevent="handleSubmit">
          <BaseTypography variant="heading-01-semibold">
            Добавить рецепт
          </BaseTypography>
          <div class="image-upload">
            <ImageCloudinary
              v-if="imageUrl"
              :src="imageUrl"
              alt="Image preview"
              class="image-preview"
            />
            <BaseInput
              id="add-recipe-image"
              name="image"
              value="imageFile"
              type="file"
              label="Изображение"
              accept="image/*"
              @update:model-value="handleImageChange"
            />
          </div>
          <BaseInput
            id="add-recipe-name"
            v-model="name"
            name="name"
            type="text"
            label="Название рецепта"
            placeholder="Хачапури"
          />
          <BaseTextarea
            id="add-recipe-description"
            v-model="description"
            label="Описание"
            placeholder="Очень вкусный хачапури"
          />
          <BaseDropdown
            id="add-recipe-category"
            v-model="category"
            label="Категория"
          >
            <option value="SALAD">Салаты</option>
            <option value="SAUCE">Соусы</option>
            <option value="PASTA">Паста</option>
            <option value="SOUP">Супы</option>
            <option value="APPETIZER">Закуски</option>
            <option value="MEXICAN">Мексиканские</option>
            <option value="SUSHI">Суши</option>
            <option value="PIZZA">Пицца</option>
          </BaseDropdown>
          <BaseInput
            id="add-recipe-time-to-cook"
            v-model="timeToCook"
            name="timeToCook"
            type="number"
            label="Время приготовления"
            placeholder="60"
          />
          <div class="ingredients-section">
            <BaseTypography variant="body-01-semibold">
              Ингредиенты
            </BaseTypography>
            <ul class="ingredients-list">
              <li
                v-for="(recipeIngredient, index) in ingredients"
                :key="`${recipeIngredient.ingredient}-${index}`"
                class="ingredient-item"
              >
                <div class="ingredient-item-content">
                  <BaseTypography tag="span" variant="body-03">
                    {{ recipeIngredient.ingredient }}
                  </BaseTypography>
                  <BaseTypography
                    v-if="
                      recipeIngredient.description &&
                      recipeIngredient.ingredient !==
                        recipeIngredient.description
                    "
                    tag="span"
                    variant="body-03"
                  >
                    ({{ recipeIngredient.description }})
                  </BaseTypography>
                  <BaseTypography
                    v-if="recipeIngredient.quantity"
                    tag="span"
                    variant="body-04"
                    color="neutral-08"
                  >
                    {{
                      ` ${recipeIngredient.quantity} ${
                        recipeIngredient.unit || ""
                      }`
                    }}
                  </BaseTypography>
                </div>
                <div class="ingredient-item-actions">
                  <BaseCircularIconButton
                    variant="primary"
                    icon="mdi:remove"
                    size="small"
                    @click="handleRemoveIngredient(recipeIngredient)"
                  />
                </div>
              </li>
            </ul>

            <BaseButton
              variant="tertiary"
              size="small"
              class="add-ingredient-button"
              @click="isAddIngredientModalOpen = true"
            >
              Добавить ингредиент
            </BaseButton>
          </div>
          <div class="steps-section">
            <BaseTypography variant="body-01-semibold">
              Процесс приготовления
            </BaseTypography>
            <ul class="steps-list">
              <li
                v-for="(step, index) in steps"
                :key="`${step}-${index}`"
                class="step"
              >
                <div>
                  <BaseTypography
                    tag="span"
                    variant="micro-01"
                    color="shade-01"
                    class="step-number"
                  >
                    {{ index + 1 }}
                  </BaseTypography>
                  <BaseTypography tag="p" variant="body-03" class="step-text">
                    {{ step }}
                  </BaseTypography>
                </div>
                <div class="step-actions">
                  <BaseCircularIconButton
                    variant="primary"
                    icon="mdi:remove"
                    size="small"
                    @click="handleRemoveStep(step)"
                  />
                </div>
              </li>
            </ul>
            <BaseButton
              variant="tertiary"
              size="small"
              class="add-step-button"
              @click.prevent="isAddStepModalOpen = true"
            >
              Добавить шаг
            </BaseButton>
          </div>
          <BaseButton
            type="submit"
            variant="primary"
            size="full-width"
            :disabled="isSubmitting"
            >Сохранить
          </BaseButton>
        </form>
      </LayoutContainer>
    </main>
    <EditRecipeAddIngredientModal
      v-if="isAddIngredientModalOpen"
      @close="isAddIngredientModalOpen = false"
      @confirm="handleAddIngredient"
    />
    <EditRecipeAddStepModal
      v-if="isAddStepModalOpen"
      @close="isAddStepModalOpen = false"
      @confirm="handleAddStep"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

type FormRecipeIngredient = {
  description: string | null;
  quantity: number | null;
  unit: string | null;
  ingredient: string;
};

const runtimeConfig = useRuntimeConfig();
const router = useRouter();

definePageMeta({
  middleware: "admin-auth",
});

const isAddIngredientModalOpen = ref(false);
const isAddStepModalOpen = ref(false);
const isSubmitting = ref(false);

const imageUrl = ref<string | null>(null);
const imageFile = ref<File | null>(null);
const name = ref("");
const description = ref("");

const category = ref<
  | "SALAD"
  | "SAUCE"
  | "PASTA"
  | "SOUP"
  | "APPETIZER"
  | "MEXICAN"
  | "SUSHI"
  | "PIZZA"
>("SALAD");
const timeToCook = ref(0);
const ingredients = ref<Array<FormRecipeIngredient>>([]);
const steps = ref<Array<string>>([]);

const handleSubmit = () => {
  isSubmitting.value = true;

  const recipe = {
    name: name.value.trim(),
    description: description.value.trim(),
    category: category.value,
    timeToCookInMinutes: +timeToCook.value || null,
    recipeIngredients: ingredients.value,
    steps: steps.value,
    imageUri: imageUrl.value,
    tags: [],
  };

  $fetch(`${useBaseUrl()}/recipes`, {
    method: "POST",
    body: recipe,
    headers: {
      Authorization: `Bearer ${useAuthStore().token}`,
    },
  })
    .then(() => {
      isSubmitting.value = false;
      router.push("/");
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};

const handleAddIngredient = (ingredient: FormRecipeIngredient) => {
  ingredients.value.push(ingredient);
  isAddIngredientModalOpen.value = false;
};

const handleRemoveIngredient = (ingredient: FormRecipeIngredient) => {
  ingredients.value = ingredients.value.filter(
    (item) => item.ingredient !== ingredient.ingredient
  );
};

const handleAddStep = (step: string) => {
  steps.value.push(step);
  isAddStepModalOpen.value = false;
};

const handleRemoveStep = (step: string) => {
  steps.value = steps.value.filter((item) => item !== step);
};

const handleImageChange = (file: File) => {
  imageFile.value = file;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "recipe-image");
  formData.append("api_key", runtimeConfig.public.CLOUDINARY_API_KEY);

  $fetch("https://api.cloudinary.com/v1_1/denisveleaev/image/upload", {
    method: "POST",
    body: formData,
  }).then((data: any) => {
    imageUrl.value = data.secure_url;
  });
};
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}

.ingredients-section {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
  margin-top: $spacing-8;
  margin-bottom: $spacing-14;
  padding: $spacing-5 $spacing-5 $spacing-8;
  box-shadow: $elevation-02;
  border-radius: 12px;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-3;
}

.ingredient-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-3 $spacing-4;
  border-radius: 12px;
  background-color: $color-neutral-01;
}

.add-ingredient-button {
  margin-top: $spacing-8;
  align-self: flex-start;

  @media screen and (max-width: $small-screen) {
    align-self: stretch;
  }
}

.steps-section {
  margin-bottom: $spacing-20;
  display: flex;
  flex-direction: column;
  gap: $spacing-10;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-10;
}

.step {
  display: flex;
  gap: $spacing-5;
  align-items: baseline;
  justify-content: space-between;
  background: $color-neutral-01;
  padding: $spacing-5;
  border-radius: 12px;
  position: relative;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: $color-primary-01;
  box-shadow: $elevation-02;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -12px;
  left: -14px;
}

.step-text {
  flex: 1;
}

.add-step-button {
  margin-top: $spacing-4;
  align-self: flex-start;

  @media screen and (max-width: $small-screen) {
    align-self: stretch;
  }
}

.image-upload {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  background-color: $color-neutral-01;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}

.image-upload input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  opacity: 0;
  cursor: pointer;
}
</style>
