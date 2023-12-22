import type { SignInButton } from '#build/components';
<template>
  <header class="header">
    <LayoutContainer>
      <div class="content">
        <NuxtLink class="logo" to="/">
          <Icon name="fluent:food-egg-20-regular" size="48" />
          <BaseTypography variant="heading-01-semibold" color="primary-01"
            >Recipes</BaseTypography
          >
        </NuxtLink>
        <div class="actions">
          <SignInButton />
        </div>
      </div>
    </LayoutContainer>
  </header>
  <div class="divider">
    <BaseDivider />
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: $color-shade-01;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-3;
  min-height: 80px;
  padding: $spacing-3 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  color: $color-primary-01;
  text-decoration: none;
}

.actions {
  display: flex;
  align-items: center;
  gap: $spacing-2;
  flex-shrink: 0;
}

@media (max-width: $medium-screen) {
  .divider {
    display: none;
  }
}
</style>
