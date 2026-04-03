<script setup>
import { computed } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() =>
  props.active
    ? "text-light pt-1"
    : "text-light pb-1 hover:pb-0 hover:pt-1 bg-secondary",
);

const innerClass = computed(() =>
  props.active ? " bg-secondary" : "bg-primary active:bg-secondary",
);
</script>

<template>
  <button
    class="whitespace-nowrap rounded-md shrink-0 transition-all duration-300"
    :class="buttonClass"
    :disabled="props.active"
  >
    <div
      class="px-4 py-2 rounded-md transition-colors duration-300"
      :class="innerClass"
    >
      <slot />
    </div>
  </button>
</template>
