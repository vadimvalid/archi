<template>
  <footer class="footer">
    <div class="container">
      <ul>
        <AppNavLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          :name="link.name"
        />
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  {
    to: "#",
    name: "Facebook",
  },
  {
    to: "#",
    name: "Vkontakte",
  },
  {
    to: "#",
    name: "Behance",
  },
];
</script>

<style scoped lang="scss">
.footer {
  padding-bottom: torem(60);
}

ul {
  display: flex;
  align-items: center;
  gap: torem(35);
  padding: 0;
}
</style>
