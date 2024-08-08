<template>
  <div class="wrapper">
    <BaseTypography class="profile-name" variant="body-01-medium">
      {{ userName }}
    </BaseTypography>

    <BaseCircularIconButton
      icon="carbon:user-avatar-filled"
      size="small"
      variant="primary"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  userName: string | undefined;
};

withDefaults(defineProps<Props>(), {
  userName: "",
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
}
.profile-name {
  margin-right: 8px;

  @media screen and (max-width: $small-screen) {
    display: none;
  }
}
</style>
