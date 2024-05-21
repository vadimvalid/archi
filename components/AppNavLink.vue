<template>
  <li>
    <NuxtLink :to="to" class="app-nav-link">{{ name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
  name: string;
}>();
</script>

<style scoped lang="scss">
a {
  color: $darkBlack;
  font-weight: 600;
}
</style>
