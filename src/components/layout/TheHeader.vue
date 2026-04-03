<script setup>
import { useI18n } from "vue-i18n";

import BaseLink from "../base/BaseLink.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import BaseIcon from "../base/BaseIcon.vue";

import { useSidebar } from "@/composables/useSidebar";
const { open } = useSidebar();

const { t } = useI18n();
</script>

<template>
  <header
    class="header fixed top-0 left-0 right-0 p-5 dark:bg-dark bg-darkLight border-b border-b-primary"
  >
    <div class="max-w-[1200px] flex md:flex-row justify-between mx-auto">
      <BaseIcon
        colorClass=" sm:hidden text-light hover:text-primary"
        isNeedPointer
        name="burger-menu"
        width="30px"
        height="30px"
        @click="open()"
      />

      <div class="flex gap-4">
        <BaseLink verticalAlign="items-end" to="main">
          <div class="text-light text-2xl">{{ $t("header.logo") }}</div>
        </BaseLink>

        <div class="flex-row gap-4 hidden sm:flex">
          <BaseLink verticalAlign="items-end" to="main">
            {{ $t("header.home") }}
          </BaseLink>

          <BaseLink verticalAlign="items-end" to="skills">
            {{ $t("header.skills") }}
          </BaseLink>

          <BaseLink verticalAlign="items-end" to="contacts">
            {{ $t("header.contacts") }}
          </BaseLink>
        </div>
      </div>

      <div class="hidden sm:flex gap-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
