<script setup>
import { useBannersStore } from "@/stores/banners";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import BaseSwiper from "./base/BaseSwiper.vue";
import BaseSwiperSlide from "./base/BaseSwiperSlide.vue";
import DownloadCV from "./DownloadCV.vue";

import ProjectsSection from "./ProjectsSection.vue";

const storeBanner = useBannersStore();
const route = useRoute();

onMounted(() => storeBanner.loadBanners(route.params.locale));

watch(
  () => route.params.locale,
  (newLocale) => {
    storeBanner.loadBanners(newLocale);
  },
);
</script>

<template>
  <BaseSwiper
    :slideComponent="BaseSwiperSlide"
    :items="storeBanner.allBanners"
  />

  <div class="w-full px-4">
    <DownloadCV class="mt-10 mx-auto" />
  </div>

  <ProjectsSection />
</template>
