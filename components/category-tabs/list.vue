<template>
  <div class="wrapper">
    <CategoryTabsItem
      v-for="(category, index) in CATEGORIES"
      :key="index"
      :href="`/?category=${category.category}`"
      :active="route.query.category === category.category"
    >
      <template #icon><component :is="category.icon"></component></template
      >{{ category.title }}
    </CategoryTabsItem>
  </div>
</template>

<script setup lang="ts">
import SaladIcon from "./icon/salad";
import SauceIcon from "./icon/sauce";
import PastaIcon from "./icon/pasta";

const route = useRoute();

const CATEGORIES = [
  {
    id: 1,
    title: "Салаты",
    icon: SaladIcon,
    category: "salad",
  },
  {
    id: 2,
    title: "Соусы",
    icon: SauceIcon,
    category: "sauce",
  },
  {
    id: 3,
    title: "Паста",
    icon: PastaIcon,
    category: "pasta",
  },
];
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: $spacing-5;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  width: 100%;
  max-width: $extra-large-screen;
  margin: 0 auto;
  padding: 0 $spacing-5;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
