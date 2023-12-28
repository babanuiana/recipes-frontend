<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: $extra-large-screen;
  margin: 0 auto;
  padding: 0 $spacing-5;
}
</style>
