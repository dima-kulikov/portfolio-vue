<script setup>
import { useI18n } from "vue-i18n";

import BaseLink from "../base/BaseLink.vue";

import viteImg from "../../assets/images/vite.png";
import vueImg from "../../assets/images/vue.png";
import piniaImg from "../../assets/images/pinia.png";

const { t } = useI18n();
</script>

<template>
  <div class="dark:bg-dark bg-darkLight p-8 md:p-20 md:pb-10">
    <div class="max-w-[1200px] mx-auto flex flex-wrap gap-6 justify-between">
      <div class="flex gap-4 flex-col">
        <p class="text-light text-2xl">{{ t("footer.sections.contacts") }}</p>
        <div class="flex gap-4">
          <a href="https://github.com/dimakotov" target="_blank">
            <img src="/img/icons/github.svg" alt="github" class="w-10 h-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/dmitriy-kulikov-1373651aa/"
            target="_blank"
          >
            <img
              src="/img/icons/linkedIn.svg"
              alt="linkedIn"
              class="w-10 h-10"
            />
          </a>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <p class="text-light text-2xl">{{ t("footer.sections.builtWith") }}</p>
        <div class="flex gap-4">
          <img :src="viteImg" alt="vite" class="w-10 h-10" />
          <img :src="vueImg" alt="vue" class="w-10 h-10" />
          <img :src="piniaImg" alt="pinia" class="w-10 h-10" />
        </div>
        <div class="flex gap-4">
          <p class="text-xl text-light p-1 border border-primary rounded-md">
            i18n
          </p>
          <p class="text-xl text-light p-1 border border-primary rounded-md">
            vue-router
          </p>
        </div>
      </div>

      <div class="flex flex-col">
        <p class="text-light text-2xl mb-2">{{ t("footer.nav.title") }}</p>
        <ul class="text-gray400">
          <li>
            <BaseLink to="main">
              {{ t("footer.nav.home") }}
            </BaseLink>
          </li>

          <li>
            <BaseLink to="skills">
              {{ t("footer.nav.skills") }}
            </BaseLink>
          </li>

          <li>
            <BaseLink to="contacts">
              {{ t("footer.nav.contact") }}
            </BaseLink>
          </li>
        </ul>
      </div>

      <div class="max-w-[300px] flex flex-col">
        <p class="text-light text-xl mb-2">{{ t("footer.name") }}</p>
        <p class="text-gray400">
          {{ t("footer.description") }}
        </p>
      </div>
    </div>
    <div class="text-center text-gray500 mt-10 mx-auto">
      {{ t("footer.copyright") }}
    </div>
  </div>
</template>
