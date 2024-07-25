<template>
  <div class="container">
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead(() => ({
  title: "Recipes",
}));
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
