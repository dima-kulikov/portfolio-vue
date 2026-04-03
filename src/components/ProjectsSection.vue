<script setup>
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import { useProjectsStore } from "@/stores/projects";
import { useModal } from "@/composables/useModal";

import ProjectCard from "./ProjectCard.vue";
import BaseTabs from "./base/BaseTabs.vue";
import ProjectModalContent from "./ProjectModalContent.vue";

import BaseModal from "./base/BaseModal.vue";

const store = useProjectsStore();
const { t } = useI18n();
const route = useRoute();
const modal = useModal();

function openProjectModal(project) {
  modal.open({
    component: ProjectModalContent,
    props: { project },
  });
}

onMounted(() => store.loadProjects(route.params.locale));

watch(
  () => route.params.locale,
  (newLocale) => {
    store.loadProjects(newLocale);
    store.setActiveCategory("All");
  },
);
</script>

<template>
  <section class="max-w-[1200px] mx-auto p-5 flex flex-col gap-4 min-h-[100vh]">
    <h2 class="text-4xl text-dark dark:text-light">
      {{ $t("projects.title") }}
    </h2>

    <BaseTabs
      class="-mx-5 px-5"
      :categories="store.categoriesArray"
      :modelValue="store.activeCategory"
      @update:modelValue="store.setActiveCategory"
    />
    <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
      <ProjectCard
        v-for="(project, i) in store.filteredProjects"
        :key="project.title + i"
        :project="project"
        @open="openProjectModal"
      />
    </div>

    <BaseModal v-if="modal.isOpen.value" @close="modal.close">
      <component :is="modal.component?.value" v-bind="modal.props?.value" />
    </BaseModal>
  </section>
</template>
