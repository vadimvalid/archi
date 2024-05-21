<template>
  <div class="content">
    <AppHeader />
    <main></main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
}
</style>
