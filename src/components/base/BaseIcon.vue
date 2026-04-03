<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "60px",
  },
  height: {
    type: String,
    default: "60px",
  },
  rotate: {
    type: String,
    default: "0",
  },
  colorClass: {
    type: String,
    default: "",
  },
  isNeedPointer: {
    type: Boolean,
    default: false,
  },
});

const name = defineAsyncComponent(() =>
  import(`../../assets/icons/${props.name}.svg`),
);
</script>

<template>
  <component
    :is="name"
    class="transition-colors duration-300"
    :class="[props.colorClass, { 'cursor-pointer': props.isNeedPointer }]"
    :style="{ width, height, transform: `rotate(${props.rotate}deg)` }"
  />
</template>
