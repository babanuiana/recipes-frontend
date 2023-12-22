<template>
  <BaseCircularIconButton
    icon="ph:sign-in"
    size="small"
    variant="primary"
    @click="isModalOpen = true"
  />
  <SignInModal v-if="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
const isModalOpen = ref(false);
</script>
