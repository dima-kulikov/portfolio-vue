<script setup>
import BaseIcon from "../base/BaseIcon.vue";

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black70 overflow-auto px-4 pt-[100px] pb-10 text-center"
  >
    <div class="fixed inset-0 bg-black70 pointer-events-none"></div>

    <div class="absolute inset-0" @click="emit('close')" />
    <span class="inline-block h-full align-middle"></span>

    <div
      class="inline-block align-middle text-left w-full max-w-[600px] bg-darkLight px-4 py-8 sm:p-8 rounded-md relative"
    >
      <button class="absolute right-2 top-2" @click="emit('close')">
        <BaseIcon
          colorClass="text-light hover:text-primary"
          isNeedPointer
          name="cross"
          width="20px"
          height="20px"
        />
      </button>

      <slot />
    </div>
  </div>
</template>
