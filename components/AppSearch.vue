<template>
  <div class="app-search" :class="{ 'app-search--open': isOpen }">
    <input v-model="searchStr" :placeholder="placeholder" @input="onInput" />
    <button @click="isOpen = !isOpen">
      <img
        src="/img/icon-search.svg"
        width="20"
        height="20"
        alt="search icon"
      />
    </button>
  </div>
</template>

<script setup lang="ts" generic="T">
import { useSearch } from "~/utils/useSearch";
import type { AppSearchEmitType } from "~/types/commons";

const props = defineProps<{
  searchList: Array<T>;
  placeholder?: string;
}>();

const emits = defineEmits<{
  onInput: [res: AppSearchEmitType<T>];
}>();

const { searchString } = useSearch();
const searchStr = ref<string>("");

const onInput = () => {
  const list = [...props.searchList];
  const res = searchString<T>(searchStr.value, list);

  emits("onInput", {
    isInputClear: searchStr.value.length === 0,
    searchList: res,
  });
};

const isOpen = ref<boolean>(false);
</script>

<style scoped lang="scss">
.app-search {
  position: relative;
  height: torem(38);
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

  input {
    width: 0;
    padding: 0;
    border: none;
    border-radius: $mainBorderRadius;
  }

  button {
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 1;
    transform: translate(-100%, -50%);
  }

  &--open {
    padding-right: torem(20);

    input {
      width: 100%;
      padding: torem(6) torem(16);
      border: 1px solid $grey;
    }

    button {
      right: torem(20);
    }
  }
}
</style>
