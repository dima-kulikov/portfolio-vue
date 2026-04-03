<script setup>
import { useI18n } from "vue-i18n";

import DownloadCV from "./DownloadCV.vue";

const { t } = useI18n();

const contacts = [
  {
    href: "https://t.me/dai_skaizy",
    icon: "./img/icons/telegram.svg",
    alt: "telegram",
  },
  {
    href: "mailto:skaizy44@gmail.com",
    icon: "./img/icons/mail.svg",
    alt: "mail",
  },
  {
    href: "https://github.com/dima-kulikov",
    icon: "./img/icons/github.svg",
    alt: "github",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/dmitriy-kulikov-1373651aa/",
    icon: "./img/icons/linkedIn.svg",
    alt: "linkedin",
    target: "_blank",
  },
];
</script>

<template>
  <div class="flex flex-1">
    <div
      class="max-w-[1200px] flex justify-center flex-col py-6 px-4 mx-auto mt-20"
    >
      <h2 class="text-6xl text-primary text-center mb-4 font-bold">
        {{ t("contactsPage.title") }}
      </h2>
      <p
        class="text-dark dark:text-light text-xl text-center mb-6 max-w-[600px] mx-auto"
      >
        {{ t("contactsPage.description") }}
      </p>

      <ul class="flex flex-wrap gap-6 justify-center">
        <li
          v-for="(item, index) in contacts"
          :key="index"
          class="rounded-full p-3 border w-max bg-darkLight hover:shadow-purple transition-shadow duration-300"
        >
          <a :href="item.href" :target="item.target || null">
            <img :src="item.icon" :alt="item.alt" class="w-14 h-14" />
          </a>
        </li>
      </ul>

      <DownloadCV class="mt-10" />
    </div>
  </div>
</template>
