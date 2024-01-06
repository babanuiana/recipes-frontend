<template>
  <BaseModal>
    <template #header>Добавить шаг</template>

    <form class="content" @submit.prevent="handleSubmit">
      <BaseTypography variant="heading-01-semibold">
        Введите описание шага
      </BaseTypography>
      <BaseTextarea
        id="description"
        v-model="description"
        name="description"
        placeholder="Подготавливаем продукты для теста. Муку обязательно просеиваем."
      />
      <BaseButton
        type="submit"
        variant="primary"
        size="full-width"
        :disabled="!description"
        >Добавить</BaseButton
      >
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
const description = ref("");

const emit = defineEmits(["confirm"]);

const handleSubmit = () => {
  emit("confirm", description.value.trim());
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}
</style>
