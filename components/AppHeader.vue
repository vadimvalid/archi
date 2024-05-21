<template>
  <header class="header" :class="{ 'header--open': isOpen }">
    <div class="container">
      <div class="wrapper">
        <AppLogo :logo />
        <AppLang />
        <AppNav />
        <AppSearch :searchList="[]" :searchIcon="true" />
        <AppBurger @open="toggleHeader" />
        <AppNavMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const logo = "/img/logo.svg";

const isOpen = ref<boolean>(false);

const toggleHeader = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  height: 100dvh;
  padding: torem(34) 0 torem(10);
  overflow: hidden;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: torem(20);
  }

  &--open {
    nav,
    .app-search {
      visibility: hidden;
    }

    .app-nav-menu {
      transform: translate(-50%, -50%);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/img/menu-bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: -1;
    }
  }
}
</style>
