<template>
  <div class="app-logo">
    <NuxtLink to="/"
      ><img :src="logo" alt="ar.chi logo" width="84" height="32"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo: string;
}>();
</script>

<style scoped lang="scss">
.app-logo {
  position: relative;
  padding-right: torem(40);

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: torem(19);
    transform: translateY(-50%);
    background-color: $grey;
  }
}
</style>
