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
        v-model="email"
        name="email"
        type="email"
        :placeholder="
          // Your email
          $t('auth.yourEmail')
        "
      />
      <BaseInput
        id="sign-up-name"
        v-model="name"
        name="name"
        :placeholder="
          // Your name
          $t('auth.yourName')
        "
      />
      <BaseInput
        id="sign-up-password"
        v-model="password"
        name="password"
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
        :disabled="!email || !password || !name || isLoading"
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
import { useAuthStore } from "~/stores/auth";

const { t: $t } = useI18n();
const authStore = useAuthStore();

const isLoading = ref(false);

const email = ref("");
const name = ref("");
const password = ref("");

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
