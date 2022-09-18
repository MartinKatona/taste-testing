<template>
  <div class="text-center">
    <toggle v-model="darkMode" class="dense"></toggle>
    <!-- <label id="toggle-label" class="text-green-500"> Dark mode </label> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

let darkMode = ref<boolean>(localStorage.theme === "dark");
if (darkMode.value) document.documentElement.classList.add("dark");

watch(darkMode, () => {
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});
</script>
