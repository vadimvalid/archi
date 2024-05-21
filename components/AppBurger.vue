<template>
  <button
    @click="emit('open'), (isOpen = !isOpen)"
    class="app-burger"
    :class="{ 'app-burger--open': isOpen }"
  >
    <p>Close</p>
    <div class="wrapper">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);

const emit = defineEmits<{
  (e: "open"): void;
}>();
</script>

<style scoped lang="scss">
.app-burger {
  display: flex;
  align-items: center;
  gap: torem(14);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  > p {
    display: none;
    font-weight: 600;
    color: #000;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: torem(4);
    width: torem(26);

    span {
      width: 100%;
      height: 2px;
      background: $darkBlack;
      border-radius: $mainBorderRadius;
      transition: all 0.3s ease;

      &:last-child {
        width: torem(18);
      }
    }
  }

  &--open {
    > p {
      display: block;
    }

    .wrapper {
      width: torem(20);

      span {
        &:first-child {
          transform: rotate(45deg);
          transform-origin: top left;
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(100%);
        }

        &:last-child {
          width: 100%;
          transform: rotate(-45deg) translate(1px, -6px);
        }
      }
    }
  }
}
</style>
