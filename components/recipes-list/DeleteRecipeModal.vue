<template>
  <BaseModal @close="$emit('close')">
    <template #header>
      <BaseTypography variant="body-02-semibold">
        Удалить рецепт?
      </BaseTypography></template
    >
    <div class="content">
      <BaseTypography variant="body-01-semibold">
        Вы уверенны что хотите удалить "{{ name }}"?
      </BaseTypography>
      <div class="buttons-wrapper">
        <BaseButton
          @click="$emit('close')"
          variant="tertiary"
          size="small"
          :disabled="isSubmitting"
          >Отмена</BaseButton
        >
        <BaseButton
          @click="handleDelete"
          class="delete-button"
          variant="primary"
          size="small"
          :disabled="isSubmitting"
          >Удалить</BaseButton
        >
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
const refreshData = inject("refreshData") as () => void;

const props = defineProps<{
  id: number;
  name: string;
}>();
const emit = defineEmits(["close"]);
const isSubmitting = ref(false);

const handleDelete = () => {
  isSubmitting.value = true;
  $fetch(`${useBaseUrl()}/recipes/${props.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${useAuthStore().token}`,
    },
  })
    .then(() => {
      isSubmitting.value = false;
      refreshData();
      emit("close");
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}
.buttons-wrapper {
  display: flex;
  justify-content: flex-end;
}
.delete-button {
  margin-left: $spacing-4;
}
</style>
