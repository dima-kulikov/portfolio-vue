<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import BaseSwiperSlide from "./BaseSwiperSlide.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  slideComponent: {
    type: Object,
    default: () => BaseSwiperSlide,
  },
  slidesPerView: {
    type: Number,
    default: 1,
  },
  spaceBetween: {
    type: Number,
    default: 50,
  },
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>

<template>
  <Swiper
    class="max-w-[1200px] h-[400px]"
    :slides-per-view="props.slidesPerView"
    :space-between="props.spaceBetween"
    :modules="[Navigation, Pagination, Autoplay]"
    :autoplay="{ delay: 6000, disableOnInteraction: false }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(item, index) in props.items" :key="index">
      <component :is="props.slideComponent" :item="item" />
    </SwiperSlide>

    <div class="swiper-button-prev hidden md:block"></div>
    <div class="swiper-button-next hidden md:block"></div>
  </Swiper>
</template>
