import { defineStore } from "pinia";

const STORE_KEY = "auth";
const COOKIE_KEY = "auth_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type User = {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
};

type AuthResponseData = {
  access_token: string;
  jwt_token_expires_in: string;
} & User;

export const useAuthStore = defineStore(STORE_KEY, () => {
  const baseURL = useBaseUrl();

  const SIGN_IN_URL = `${baseURL}/authentication/sign-in`;
  const SIGN_UP_URL = `${baseURL}/authentication/sign-up`;
  const CURRENT_USER_URL = `${baseURL}/authentication/me`;

  const token = useCookie(COOKIE_KEY, {
    maxAge: COOKIE_MAX_AGE,
  });
  const currentUser = ref<User | null>(null);

  const setCurrentUser = (user: User) => {
    currentUser.value = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  };

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error, status } = await useAsyncData<AuthResponseData>(
      `sign-in:${email}:${password}`,
      () =>
        $fetch(SIGN_IN_URL, {
          method: "POST",
          body: { email, password },
        })
    );

    if (status.value === "success" && data.value?.access_token) {
      token.value = data.value.access_token;

      setCurrentUser(data.value);
    }

    return { data, error, status };
  };

  const signUp = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const { data, error, status } = await useAsyncData<AuthResponseData>(
      `sign-up:${name}:${email}:${password}`,
      () =>
        $fetch(SIGN_UP_URL, {
          method: "POST",
          body: { name, email, password },
        })
    );

    if (status.value === "success" && data.value?.access_token) {
      token.value = data.value.access_token;

      setCurrentUser(data.value);
    }

    return { data, error, status };
  };

  const fetchCurrentUser = async () => {
    const { data, error, status } = await useAsyncData<User>(() =>
      $fetch(CURRENT_USER_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
    );

    if (status.value === "success" && data.value) {
      setCurrentUser(data.value);
    }

    return { data, error, status };
  };

  if (token.value && !currentUser.value) {
    fetchCurrentUser();
  }

  const isAuthenticated = computed(() => !!currentUser.value);

  const isAdmin = computed(() => currentUser.value?.role === "ADMIN");

  return {
    token,
    currentUser,
    signIn,
    signUp,
    isAuthenticated,
    fetchCurrentUser,
    isAdmin,
  };
});
