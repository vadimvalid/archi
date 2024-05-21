<template>
  <ul class="app-lang">
    <li v-for="l in lang" :key="l.code" :class="{ active: l.isActive }">
      <a href="#">{{ l.code }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const lang = ref([
  {
    name: "Русский",
    code: "RUS",
    flag: "ru",
  },
  {
    name: "English",
    code: "ENG",
    flag: "us",
    isActive: true,
  },
]);
</script>

<style scoped lang="scss">
.app-lang {
  display: flex;
  align-items: center;
  gap: torem(20);

  li {
    color: $lightBlack;

    &.active {
      padding: torem(6) torem(6) torem(3);
      border-radius: $mainBorderRadius;
      background: $lightGreen;
      color: $black;
      font-weight: 600;
    }

    a {
      color: currentColor;
    }
  }
}
</style>
