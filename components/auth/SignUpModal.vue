<template>
  <BaseModal>
    <template #header>
      {{
        // Registration
        $t("auth.registration")
      }}
    </template>
    <form class="content" @submit.prevent="handleSubmit">
      <BaseTypography v-if="alertText" variant="body-05" color="error-01">
        {{ alertText }}
      </BaseTypography>
      <BaseTypography variant="heading-01-semibold">
        {{
          // Create account
          $t("auth.createAccount")
        }}
      </BaseTypography>
      <BaseInput
        id="sign-up-email"
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
        id="sign-up-name"
        v-model="v$.name.$model"
        name="name"
        :status="v$.name.$error ? 'error' : 'default'"
        :error-message="v$.name.$errors[0]?.$message?.toString()"
        :placeholder="
          // Your name
          $t('auth.yourName')
        "
      />
      <BaseInput
        id="sign-up-password"
        v-model="v$.password.$model"
        name="password"
        :status="v$.password.$error ? 'error' : 'default'"
        :error-message="v$.password.$errors[0]?.$message?.toString()"
        type="password"
        placeholder="********"
      />
      <BaseTypography variant="body-05">
        {{
          // Already have an account
          $t("auth.alreadyHaveAccount")
        }}
        <BaseLink type="button" variant="body-05" @click="$emit('clickSignIn')"
          >{{
            // Login
            $t("auth.login")
          }}
        </BaseLink>
      </BaseTypography>
      <BaseButton
        type="submit"
        variant="primary"
        size="full-width"
        :disabled="v$.$invalid || isLoading"
      >
        {{
          // Register
          $t("auth.register")
        }}
      </BaseButton>
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

const formFields = ref({ email: "", name: "", password: "" });
const { email, name, password } = toRefs(formFields.value);

const rules = {
  email: {
    required: helpers.withMessage(() => $t("auth.emailRequired"), required),
    email: helpers.withMessage(() => $t("auth.emailInvalid"), emailValidator),
  },
  name: {
    required: helpers.withMessage(() => $t("auth.nameRequired"), required),
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

const emit = defineEmits(["signedUp", "clickSignIn"]);

const handleSubmit = () => {
  isLoading.value = true;

  authStore
    .signUp({
      email: email.value,
      name: name.value,
      password: password.value,
    })
    .then((result) => {
      if (result.status.value === "success") {
        emit("signedUp");
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
