<template>
  <BaseModal>
    <template #header>Войдите в ваш аккаунт</template>
    <form class="content" @submit.prevent>
      <BaseTypography variant="heading-01-semibold">
        Добро пожаловать!
      </BaseTypography>
      <BaseInput id="sign-in-email" type="email" placeholder="Ваш Email" />
      <BaseInput id="sign-in-password" type="password" placeholder="********" />
      <BaseTypography variant="body-05">
        Ещё не зарегистрированы?
        <BaseLink variant="body-05">Зарегистрироваться</BaseLink>
      </BaseTypography>
      <BaseButton variant="primary" size="full-width">Войти</BaseButton>
    </form>
  </BaseModal>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}
</style>
