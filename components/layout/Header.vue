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
          <NuxtLink class="logo" to="/shopping-list">
            <BaseCircularIconButton
              icon="solar:bill-list-linear"
              size="small"
              variant="primary"
          /></NuxtLink>
          <AuthButton v-if="!authStore.isAuthenticated" />
          <AuthProfile v-else :user-name="userName" />
        </div>
      </div>
    </LayoutContainer>
    <div class="divider">
      <BaseDivider />
    </div>
    <slot />
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const userName = authStore.currentUser?.name;
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-shade-01;
  box-shadow: 0 -6px 8px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
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
