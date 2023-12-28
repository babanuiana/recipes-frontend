<template>
  <NuxtImg
    v-bind="{ ...$attrs, ...$props }"
    :src="$props.src.split('upload')[1]"
    provider="cloudinary"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  fit?: string;
  width?: string;
  height?: string;
}>();
</script>
