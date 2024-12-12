<template>
  <BaseModal>
    <template #header>{{
      // Login to your account
      $t("auth.loginToYourAccount")
    }}</template>
    <form class="content" @submit.prevent="handleSubmit">
      <BaseTypography v-if="alertText" variant="body-05" color="error-01">
        {{ alertText }}
      </BaseTypography>
      <BaseTypography variant="heading-01-semibold">
        {{
          // Welcome
          $t("auth.welcomeMessage")
        }}
      </BaseTypography>
      <BaseInput
        id="sign-in-email"
        v-model="email"
        name="email"
        type="email"
        :placeholder="
          // Your email
          $t('auth.yourEmail')
        "
      />
      <BaseInput
        id="sign-in-password"
        v-model="password"
        name="password"
        type="password"
        placeholder="********"
      />
      <BaseTypography variant="body-05">
        {{
          // Not registered yet
          $t("auth.notRegisteredYet")
        }}
        <BaseLink type="button" variant="body-05" @click="$emit('clickSignUp')">
          {{
            // Register
            $t("auth.register")
          }}
        </BaseLink>
      </BaseTypography>
      <BaseButton
        type="submit"
        variant="primary"
        size="full-width"
        :disabled="!email || !password"
        >{{
          // Login
          $t("auth.login")
        }}</BaseButton
      >
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const { t: $t } = useI18n();
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
        // Wrong email or password
        alertText.value = $t("auth.wrongEmailOrPassword");

        return;
      }

      if (result.status.value === "success") {
        emit("loggedIn");

        return;
      }
      // Something went wrong
      alertText.value = $t("auth.genericError");
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
