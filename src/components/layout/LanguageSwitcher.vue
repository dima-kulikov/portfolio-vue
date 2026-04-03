<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();

const currentLang = ref(localStorage.getItem("lang") || "en");

const toggleLanguage = async () => {
  const newLang = currentLang.value === "en" ? "ua" : "en";

  currentLang.value = newLang;
  locale.value = newLang;
  localStorage.setItem("lang", newLang);

  await router.push({
    name: route.name,
    params: {
      ...route.params,
      locale: newLang,
    },
  });
};

const isEn = computed(() => currentLang.value === "en");
</script>

<template>
  <div
    class="relative dark:bg-darkLight bg-primary flex gap-2.5 py-[5px] px-px items-center rounded-full h-7 cursor-pointer w-max"
    @click="toggleLanguage"
  >
    <div
      class="absolute top-0 bg-light w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center text-xs font-semibold"
      :class="isEn ? 'left-0' : 'left-8'"
    ></div>

    <span class="relative w-6 text-center text-xs font-medium">EN</span>
    <span class="relative w-6 text-center text-xs font-medium">UA</span>
  </div>
</template>
