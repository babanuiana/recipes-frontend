<template>
  <div class="container">
    <div>
      <slot />
    </div>
    <BaseDivider />
    <div class="footer">
      <BaseTypography variant="body-02"
        >Iana Incorporated © 2024</BaseTypography
      >
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
.footer {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: $small-screen) {
    height: 50px;
  }
}
</style>
