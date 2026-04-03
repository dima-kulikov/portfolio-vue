<script setup>
import { ref, watch, nextTick } from "vue";
import BaseTab from "./BaseTab.vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const container = ref(null);
const buttonRefs = new Map();

function setButtonRef(component, category) {
  if (component?.$el) buttonRefs.set(category, component.$el);
}

function setCategory(category) {
  emit("update:modelValue", category);
}

function scrollToActive() {
  const el = buttonRefs.get(props.modelValue);
  const parent = container.value;

  if (!el || !parent) return;

  const elRect = el.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  const offset =
    elRect.left - parentRect.left - parentRect.width / 2 + elRect.width / 2;

  parent.scrollBy({
    left: offset,
    behavior: "smooth",
  });
}

watch(
  () => props.modelValue,
  async () => {
    await nextTick();
    scrollToActive();
  },
  { immediate: true },
);
</script>

<template>
  <div
    ref="container"
    class="flex gap-2 overflow-x-auto no-scrollbar scrollbar-custom pb-4"
  >
    <BaseTab
      v-for="category in categories"
      :key="category"
      :ref="(el) => setButtonRef(el, category)"
      @click="setCategory(category)"
      :active="modelValue === category"
    >
      {{ category }}
    </BaseTab>
  </div>
</template>
