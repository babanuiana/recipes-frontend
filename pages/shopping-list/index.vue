<template>
  <div>
    <LayoutHeader>
      <CategoryTabsList />
    </LayoutHeader>
    <main class="content-container">
      <LayoutContainer>
        <div>Ваш список покупок</div>
        <div>
          <BaseCheckbox v-model="isAllChecked" @change="handleAllCheck" />
        </div>
      </LayoutContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead(() => ({
  title: "Список покупок",
}));
</script>

<style lang="scss" scoped>
.content-container {
  padding: $spacing-8 0 $spacing-16;

  @media screen and (max-width: $small-screen) {
    padding: 0 0 $spacing-12;
  }
}
</style>
