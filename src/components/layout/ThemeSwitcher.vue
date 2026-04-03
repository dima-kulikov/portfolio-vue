<script setup>
import { onMounted, ref, computed } from "vue";

import BaseIcon from "../base/BaseIcon.vue";

const theme = ref(localStorage.getItem("theme") || "light");

const toogleTheme = () => {
  if (theme.value === "dark") {
    document.documentElement.classList.remove("dark");
    theme.value = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    theme.value = "dark";
    localStorage.setItem("theme", "dark");
  }
};

const isLight = computed(() => {
  return theme.value === "light";
});

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    theme.value = "dark";
  }
  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    theme.value === "light";
  }
});
</script>

<template>
  <div
    class="relative dark:bg-darkLight bg-primary flex gap-4 p-[5px] items-center rounded-full h-7 cursor-pointer w-max"
    @click="toogleTheme"
  >
    <div
      class="absolute top-0 bg-light w-7 h-7 rounded-full transition-all duration-300"
      :class="isLight ? 'left-0' : 'left-8'"
    ></div>

    <BaseIcon name="sun" width="16px" height="16px" />

    <BaseIcon name="moon" width="16px" height="16px" />
  </div>
</template>
