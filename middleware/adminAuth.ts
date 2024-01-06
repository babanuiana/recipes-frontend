import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, token, isAdmin, fetchCurrentUser } =
    useAuthStore();

  if ((!token || (isAuthenticated && !isAdmin)) && to.path !== "/") {
    return navigateTo("/");
  }

  if (!isAuthenticated && token) {
    const { data, status } = await fetchCurrentUser();

    if (status.value === "success" && data.value?.role !== "ADMIN") {
      return navigateTo("/");
    }
  }
});
