<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="relative bg-dark h-full relative flex pt-4 md:pt-10 lg:items-center justify-start"
  >
    <div class="animate-blink">
      <div
        class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-banner bg-center bg-cover animate-rotate-banner"
      ></div>
    </div>
    <div class="animate-blink-2">
      <div
        class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-banner bg-center bg-cover animate-rotate-banner-2"
      ></div>
    </div>
    <div
      class="text-light w-full text-center px-6 md:px-10 lg:pl-20 md:pb-10 lg:text-start"
    >
      <p class="text-5xl">{{ item.title }}</p>
      <p class="text-2xl">{{ item.text1 }}</p>
      <p class="text-2xl">{{ item.text2 }}</p>
    </div>
  </div>

  <img
    :src="`./img/banners/${item.img2}.png`"
    :alt="item.title"
    class="absolute bottom-5 right-1/2 translate-x-1/2 lg:right-[60px] lg:top-1/2 transform lg:translate-x-0 lg:-translate-y-1/2 object-cover"
    :class="
      item.img2 == '5'
        ? 'w-[150px] md:w-[200px] xl:w-[300px]'
        : 'w-[200px] md:w-[300px] xl:w-[400px]'
    "
  />
</template>
