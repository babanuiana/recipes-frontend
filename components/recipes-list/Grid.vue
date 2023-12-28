<template>
  <div class="wrapper">
    <div class="grid">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: $spacing-10 $spacing-6;
  width: 100%;

  @media (max-width: $large-screen) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: $medium-screen) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $small-screen) {
    grid-template-columns: 1fr;
  }
}
</style>
