<script setup>
import { watch } from "vue";

import BaseIcon from "../base/BaseIcon.vue";
import BaseLink from "../base/BaseLink.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

import { useSidebar } from "@/composables/useSidebar";
const { close, sidebarClasses, isOpen } = useSidebar();

watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});
</script>

<template>
  <div
    class="fixed z-[900] inset-0 bg-black80 overflow-auto px-4 pt-[100px] pb-10 transition-opacity duration-1000"
    @click="close()"
    :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
  >
    <div
      class="absolute flex flex-col z-[900] left-0 top-0 h-screen w-[260px] dark:bg-dark bg-darkLight p-6 transition-transform duration-1000 ease-out"
      :class="sidebarClasses"
      @click.stop
    >
      <button class="absolute right-4 top-4" @click="close()">
        <BaseIcon
          colorClass="text-light hover:text-primary"
          isNeedPointer
          name="cross"
          width="20px"
          height="20px"
        />
      </button>

      <div class="text-dark dark:text-light text-4xl mb-10">
        {{ $t("header.logo") }}
      </div>

      <div class="flex flex-col gap-4">
        <BaseLink verticalAlign="items-end" to="main" class="text-2xl">
          {{ $t("header.home") }}
        </BaseLink>

        <BaseLink verticalAlign="items-end" to="skills" class="text-2xl">
          {{ $t("header.skills") }}
        </BaseLink>

        <BaseLink verticalAlign="items-end" to="contacts" class="text-2xl">
          {{ $t("header.contacts") }}
        </BaseLink>
      </div>

      <div class="flex mt-auto justify-between gap-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>
