<template>
  <h1 class="text-green-500 text-center font-medium title">
    {{ msg }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style scoped>
.title {
  font-size: 2.6rem;
}
</style>
