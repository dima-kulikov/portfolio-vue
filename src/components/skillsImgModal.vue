<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <img :src="`/img/certificates/${props.number}.jpg`" alt="Certificate" />
</template>

<style></style>
