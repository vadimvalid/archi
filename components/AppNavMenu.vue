<template>
  <div class="app-nav-menu">
    <ul>
      <li
        v-for="link in links"
        :key="link.name"
        :class="{ hovered: link.isHovered }"
      >
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
        <NuxtImg
          :src="link.image"
          :alt="link.name"
          v-if="link.image"
          :class="{ [link.position]: link.position }"
        />
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
    name: "Interior",
    isHovered: true,
    image: "/img/interior.png",
    position: "right",
  },
  {
    to: "#",
    name: "Architecture",
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

    li {
      &.hovered {
        position: relative;

        img {
          position: absolute;
          left: 0;
          top: 0;
          width: torem(218);
          height: torem(316);
          object-fit: contain;
          opacity: 0;
          transition: all 0.3s ease;
          transform: scale(0);

          &.right {
            left: auto;
            right: 0;
          }
        }

        &:hover {
          img {
            display: block;
            transform: translateX(-150%);
            opacity: 1;

            &.right {
              transform: translateX(150%);
            }
          }
        }
      }
    }

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
