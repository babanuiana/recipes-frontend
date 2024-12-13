<template>
  <BaseChip v-if="locale === 'ru'" @click="setLocale('en')">EN</BaseChip>
  <BaseChip v-else @click="setLocale('ru')">RU</BaseChip>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
</script>
