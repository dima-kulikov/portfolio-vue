<script setup>
import BaseButton from "./base/BaseButton.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const availableIcons = [
  "html",
  "js",
  "gulp",
  "less",
  "vite",
  "vue",
  "css",
  "sass",
  "jsx",
  "react",
];

const hasIcon = (tech) => availableIcons.includes(tech);

const iconsArray = props.project.desc
  .split(",")
  .map((t) => t.trim().toLowerCase());
</script>

<template>
  <div class="flex flex-col gap-4">
    <img
      :src="`./img/projects/${project.img}`"
      :alt="project.title"
      class="w-full rounded-md"
    />

    <p class="text-light text-2xl">{{ project.title }}</p>

    <div
      class="flex flex-col justify-center gap-2 items-center border border-primary pt-1 pb-2 rounded-md"
    >
      <p class="text-light text-xl">{{ $t("modals.projects.stack") }}</p>
      <div class="flex flex-row gap-4 justify-center items-center">
        <div
          v-for="icon in iconsArray"
          :key="icon"
          class="border border-primary p-1 rounded-md bg-light"
        >
          <template v-if="hasIcon(icon)">
            <img :src="`img/icons/${icon}.svg`" class="w-10 h-10" />
          </template>

          <template v-else>
            <span class="text-sm text-dark">
              {{ icon }}
            </span>
          </template>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-center items-center">
      <BaseButton
        class="w-full max-w-[120px]"
        :href="project.git"
        link
        target="_blank"
        >{{ $t("modals.projects.btn-git") }}</BaseButton
      >
      <BaseButton
        class="w-full max-w-[120px]"
        :href="project.site"
        link
        target="_blank"
        >{{ $t("modals.projects.btn-site") }}</BaseButton
      >
    </div>
  </div>
</template>
