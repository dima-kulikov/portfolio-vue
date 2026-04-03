<script setup>
const emit = defineEmits(["open"]);

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

function handleClick() {
  emit("open", props.project);
}
</script>

<template>
  <div
    class="w-full hover:shadow-purple dark:hover:shadow-purple shadow-dark dark:shadow-light rounded-md overflow-hidden bg-darkLight dark:bg-dark transition-shadow duration-300 cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="`./img/projects/${project.img}`"
      :alt="project.title"
      class="w-full aspect-[4/3]"
    />
    <div class="p-3">
      <h3 class="text-xl font-bold text-light">{{ project.title }}</h3>
    </div>
  </div>
</template>
