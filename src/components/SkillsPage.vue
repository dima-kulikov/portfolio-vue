<script setup>
import { useI18n } from "vue-i18n";

import { useModal } from "@/composables/useModal";
import skillsImgModal from "./skillsImgModal.vue";
import BaseModal from "./base/BaseModal.vue";

const { t } = useI18n();
const modal = useModal();

function openImgtModal(number) {
  modal.open({
    component: skillsImgModal,
    props: { number },
  });
}

const skills = [
  "HTML",
  "CSS",
  "SASS",
  "LASS",
  "JavaScript",
  "Vue",
  "Pinia",
  "Vite",
  "Vue Router",
  "Gulp",
  "Webpack",
  "GitHub",
  "GitLab",
  "Bootstrap",
  "Photoshop",
  "Figma",
  "Tailwind",
  "Vuex",
  "TypeScript",
  "React",
];
</script>

<template>
  <div class="max-w-[1200px] mx-auto pt-10 pb-16 px-4">
    <h2 class="text-4xl text-dark dark:text-light text-center mb-6">
      {{ t("skillsPage.title") }}
    </h2>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-10">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="min-w-20 bg-primary p-1 rounded-md"
      >
        <p class="text-center text-light">{{ skill }}</p>
      </div>
    </div>

    <div>
      <p class="text-4xl text-dark dark:text-light text-center mb-6">
        {{ t("skillsPage.certificates") }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
        <img
          v-for="number in 7"
          :key="number"
          :src="`/img/certificates/${number}.jpg`"
          alt="Certificate"
          @click="openImgtModal(number)"
          class="cursor-pointer"
        />
      </div>
    </div>

    <BaseModal v-if="modal.isOpen.value" @close="modal.close">
      <component :is="modal.component?.value" v-bind="modal.props?.value" />
    </BaseModal>
  </div>
</template>
