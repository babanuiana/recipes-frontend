<template>
  <BaseCircularIconButton
    icon="ph:sign-in"
    size="small"
    variant="primary"
    @click="openModal = 'sign-in'"
  />
  <AuthSignInModal
    v-if="openModal === 'sign-in'"
    @close="openModal = null"
    @click-sign-up="openModal = 'sign-up'"
  />
  <AuthSignUpModal
    v-if="openModal === 'sign-up'"
    @close="openModal = null"
    @click-sign-in="openModal = 'sign-in'"
  />
</template>

<script setup lang="ts">
const openModal = ref<"sign-in" | "sign-up" | null>(null);
</script>
