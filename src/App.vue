<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheSideBar from "./components/layout/TheSideBar.vue";

import { useSidebar } from "@/composables/useSidebar";
const { isOpen } = useSidebar();
</script>

<template>
  <div>
    <TheSideBar />

    <div class="main-layout dark:bg-darkLight bg-light overflow-hidden">
      <TheHeader />

      <main class="flex-1">
        <router-view></router-view>
      </main>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>
