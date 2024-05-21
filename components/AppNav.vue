<template>
  <nav>
    <ul>
      <AppNavLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        :name="link.name"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = [
  {
    to: "#",
    name: "Abous us",
  },
  {
    to: "#",
    name: "Architecture",
  },
  {
    to: "#",
    name: "Interior",
  },
  {
    to: "#",
    name: "Contact",
  },
  {
    to: "#",
    name: "Shop",
  },
];
</script>

<style scoped lang="scss">
nav {
  flex: 1;

  ul {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: torem(40);
    padding: 0;
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
}
</style>
