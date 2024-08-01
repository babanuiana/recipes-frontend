<template>
  <li>
    <div class="list-item-wrapper">
      <div class="checkbox-wrapper">
        <BaseCheckbox v-model="isAllChecked" @change="handleAllCheck" />

        <BaseTypography
          class="text-wrapper"
          :class="{ purchased: item.isPurchased }"
          variant="body-02"
        >
          {{ item.text }}
        </BaseTypography>
      </div>

      <div>
        <BaseCircularIconButton
          icon="bytesize:edit"
          size="small"
          variant="primary"
        />
        <BaseCircularIconButton
          class="delete-button"
          icon="material-symbols-light:delete-outline"
          size="small"
          variant="tertiary"
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: Object;
}>();

console.log(props);
</script>
<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;

  @media screen and (max-width: $small-screen) {
    padding: 0 0 $spacing-12;
  }
}

.ingredient-input {
  width: 50%;
}

li {
  display: flex;
  align-items: center;
  gap: $spacing-3;
}

.purchased {
  text-decoration: line-through;
}
.list-item-wrapper {
  display: flex;
  align-items: row;
  justify-content: space-between;
  width: 100%;
}

.text-wrapper {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: $spacing-3;
}
.checkbox-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.delete-button {
  margin-left: $spacing-3;
}
</style>
