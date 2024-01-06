export default function useBaseUrl() {
  const runtimeConfig = useRuntimeConfig();

  return runtimeConfig.public.BASE_URL;
}
