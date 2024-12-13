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
import SoupIcon from "./icon/soup";
import AppetizerIcon from "./icon/appetizer";
import MexicanIcon from "./icon/mexican";
import SushiIcon from "./icon/sushi";
import PizzaIcon from "./icon/pizza";

const route = useRoute();
const { t: $t } = useI18n();

const CATEGORIES = computed(() => [
  {
    // Salads
    id: 1,
    title: $t("categories.salads"),
    icon: SaladIcon,
    category: "salad",
  },
  {
    // Sauces
    id: 2,
    title: $t("categories.sauces"),
    icon: SauceIcon,
    category: "sauce",
  },
  {
    // Pasta
    id: 3,
    title: $t("categories.pasta"),
    icon: PastaIcon,
    category: "pasta",
  },
  {
    // Soups
    id: 4,
    title: $t("categories.soups"),
    icon: SoupIcon,
    category: "soup",
  },
  {
    // Appetizers
    id: 5,
    title: $t("categories.appetizers"),
    icon: AppetizerIcon,
    category: "appetizer",
  },
  {
    // Mexican
    id: 6,
    title: $t("categories.mexican"),
    icon: MexicanIcon,
    category: "mexican",
  },
  {
    // Sushi
    id: 7,
    title: $t("categories.sushi"),
    icon: SushiIcon,
    category: "sushi",
  },
  {
    // Pizza
    id: 8,
    title: $t("categories.pizza"),
    icon: PizzaIcon,
    category: "pizza",
  },
]);
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
