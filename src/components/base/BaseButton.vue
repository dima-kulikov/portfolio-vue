<script setup>
import { computed } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: null,
  },
});

const buttonClass = computed(() =>
  props.active
    ? "text-light pt-1"
    : "text-light pb-1 hover:pb-0 hover:pt-1 bg-secondary",
);

const innerClass = computed(() =>
  props.active ? "bg-secondary" : "bg-primary active:bg-secondary",
);
</script>

<template>
  <component
    :is="props.link ? 'a' : 'button'"
    :href="props.href"
    target="_blank"
    class="whitespace-nowrap rounded-md shrink-0 transition-all duration-300"
    :class="buttonClass"
    :disabled="!props.href && props.active"
  >
    <div
      class="px-4 py-2 rounded-md transition-colors duration-300 text-center"
      :class="innerClass"
    >
      <slot />
    </div>
  </component>
</template>
