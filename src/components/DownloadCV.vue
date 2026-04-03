<script setup>
import BaseButton from "./base/BaseButton.vue";

const base = import.meta.env.BASE_URL;
</script>

<template>
  <div
    class="relative overflow-hidden flex flex-col gap-4 max-w-[600px] rounded-md p-1.5 items-center justify-center"
  >
    <div
      class="absolute w-[200%] h-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-primary"
    ></div>

    <div
      class="relative rounded-md w-full h-full shadow-dark bg-light dark:bg-dark p-4 flex flex-col items-center justify-center"
    >
      <p class="text-2xl dark:text-light text-darkLight text-center">
        {{ $t("downloadCV.title") }}
      </p>
      <p class="text-xl dark:text-light text-darkLight">
        {{ $t("downloadCV.description") }}
      </p>
      <div class="flex gap-2 mt-4">
        <BaseButton
          link
          target="_blank"
          :href="`${base}pdfs/Dmytro-Kylikov-CV-EN.pdf`"
          class="h-11 min-w-[100px]"
          >{{ $t("downloadCV.btn-en") }}</BaseButton
        >
        <BaseButton
          link
          target="_blank"
          :href="`${base}pdfs/Dmytro-Kylikov-CV-UA.pdf`"
          class="h-11 min-w-[100px]"
          >{{ $t("downloadCV.btn-ua") }}</BaseButton
        >
      </div>
    </div>
  </div>
</template>
