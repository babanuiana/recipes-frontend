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
        v-model="v$.email.$model"
        name="email"
        type="email"
        :status="v$.email.$error ? 'error' : 'default'"
        :error-message="v$.email.$errors[0]?.$message?.toString()"
        :placeholder="
          // Your email
          $t('auth.yourEmail')
        "
      />
      <BaseInput
        id="sign-in-password"
        v-model="v$.password.$model"
        name="password"
        :status="v$.password.$error ? 'error' : 'default'"
        :error-message="v$.password.$errors[0]?.$message?.toString()"
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
        :disabled="v$.$invalid || isLoading"
        >{{
          // Login
          $t("auth.login")
        }}</BaseButton
      >
    </form>
  </BaseModal>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email as emailValidator,
  helpers,
} from "@vuelidate/validators";
import { useAuthStore } from "~/stores/auth";

const { t: $t } = useI18n();
const authStore = useAuthStore();

const isLoading = ref(false);
const formFields = ref({ email: "", password: "" });
const { email, password } = toRefs(formFields.value);

const rules = {
  email: {
    required: helpers.withMessage(() => $t("auth.emailRequired"), required),
    email: helpers.withMessage(() => $t("auth.emailInvalid"), emailValidator),
  },
  password: {
    required: helpers.withMessage(() => $t("auth.passwordRequired"), required),
    valid: helpers.withMessage(
      () => $t("auth.passwordInvalid"),
      validatePassword
    ),
  },
};

const v$ = useVuelidate(rules, formFields);

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
