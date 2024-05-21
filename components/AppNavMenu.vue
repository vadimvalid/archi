<template>
  <div class="app-nav-menu">
    <ul>
      <li v-for="link in links" :key="link.name">
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
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
    isHovered: true,
    image: "/img/interior.png",
  },
  {
    to: "#",
    name: "Interior",
    isHovered: true,
    image: "/img/architecture.png",
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
.app-nav-menu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%);
  transition: all 0.5s ease;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(torem(20), 3vw, torem(40));

    a {
      font-family: "Playfair Display", serif;
      font-weight: 400;
      font-size: clamp(torem(30), 3vw, torem(48));
      color: rgba(68, 68, 68, 0.4);
      transition: all 0.3s ease;

      &:hover {
        color: $green;
      }
    }
  }
}
</style>
