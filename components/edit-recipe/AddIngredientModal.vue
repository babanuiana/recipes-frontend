<template>
  <BaseModal>
    <template #header>Добавить ингредиент</template>

    <form class="content" @submit.prevent="handleSubmit">
      <BaseTypography v-if="alertText" variant="body-05" color="error-01">
        {{ alertText }}
      </BaseTypography>
      <BaseTypography variant="heading-01-semibold">
        Введите ингредиент
      </BaseTypography>
      <BaseTypeahead
        id="select-ingredient"
        v-model="ingredient"
        name="ingredient"
        placeholder="Помидоры"
        label="Ингредиент"
        :items="allIngredients || []"
      />
      <BaseInput
        id="description"
        v-model="description"
        name="description"
        placeholder="Мелко нарезанные помидоры"
        label="Описание (опционально)"
      />
      <BaseInput
        id="quantity"
        v-model="quantity"
        name="quantity"
        type="number"
        label="Количество (опционально)"
      />
      <BaseInput
        id="unit"
        v-model="unit"
        name="unit"
        placeholder="шт."
        label="Единица измерения (опционально)"
      />
      <BaseButton
        type="submit"
        variant="primary"
        size="full-width"
        :disabled="!ingredient"
        >Далее</BaseButton
      >
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import type { Ingredient } from "~/types/recipe";

const ingredient = ref("");
const description = ref("");
const quantity = ref(0);
const unit = ref("");

const { data } = await useFetch<Ingredient[]>(`${useBaseUrl()}/ingredients`);

const allIngredients = computed(() => data.value?.map((item) => item.name));

const alertText = ref("");

const emit = defineEmits(["confirm"]);

const handleSubmit = () => {
  if (!ingredient.value) {
    alertText.value = "Пожалуйста, введите ингредиент";
    return;
  }

  const newIngredient = {
    ingredient: ingredient.value.trim(),
    description: description.value.trim() || null,
    quantity: +quantity.value || null,
    unit: unit.value.trim() || null,
  };

  emit("confirm", newIngredient);
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}
</style>
