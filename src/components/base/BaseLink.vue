<script setup>
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: "first",
    validator(value) {
      return ["first", "second"].includes(value);
    },
  },
  verticalAlign: {
    type: String,
    default: "",
  },
});

const isActive = computed(() => {
  if (typeof props.to === "string") {
    return route.name === props.to;
  }

  return route.name === props.to.name;
});

const linkClasses = computed(() => [
  props.theme === "first"
    ? isActive.value
      ? "text-light"
      : "text-primary hover:text-light active:text-secondary"
    : isActive.value
    ? "text-primary underline"
    : "text-light hover:underline",
]);
</script>

<template>
  <router-link
    :to="{ name: props.to, params: { locale: $i18n.locale } }"
    class="flex transition-colors duration-300"
    :class="[linkClasses, props.verticalAlign]"
  >
    <slot />
  </router-link>
</template>
