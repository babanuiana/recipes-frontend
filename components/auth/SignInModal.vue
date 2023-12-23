<template>
  <BaseModal>
    <template #header>Войдите в ваш аккаунт</template>
    <form class="content" @submit.prevent="handleSubmit">
      <BaseTypography v-if="alertText" variant="body-05" color="error-01">
        {{ alertText }}
      </BaseTypography>
      <BaseTypography variant="heading-01-semibold">
        Добро пожаловать!
      </BaseTypography>
      <BaseInput
        id="sign-in-email"
        v-model="email"
        name="email"
        type="email"
        placeholder="Ваш Email"
      />
      <BaseInput
        id="sign-in-password"
        v-model="password"
        name="password"
        type="password"
        placeholder="********"
      />
      <BaseTypography variant="body-05">
        Ещё не зарегистрированы?
        <BaseLink type="button" variant="body-05" @click="$emit('clickSignUp')"
          >Зарегистрироваться</BaseLink
        >
      </BaseTypography>
      <BaseButton
        type="submit"
        variant="primary"
        size="full-width"
        :disabled="!email || !password"
        >Войти</BaseButton
      >
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

const isLoading = ref(false);

const email = ref("");
const password = ref("");

const alertText = ref("");

const emit = defineEmits(["loggedIn", "clickSignUp"]);

const handleSubmit = () => {
  isLoading.value = true;

  authStore
    .signIn({
      email: email.value,
      password: password.value,
    })
    .then((result) => {
      if (
        result.error.value &&
        `statusCode` in result.error.value &&
        result.error.value.statusCode === 401
      ) {
        alertText.value = "Неверный email или пароль";

        return;
      }

      if (result.status.value === "success") {
        emit("loggedIn");

        return;
      }

      alertText.value = "Что-то пошло не так";
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: $spacing-5;
}
</style>
