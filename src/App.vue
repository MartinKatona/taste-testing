<template>
  <header>
    <div class="wrapper">
      <DarkMode />
      <h1 class="text-green-500 text-center font-medium text-5xl">
        Taste testing
      </h1>
      <nav class="pt-4">
        <RouterLink to="/">Protein list</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </nav>
    </div>

    <divider></divider>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import DarkMode from "./components/DarkMode.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
@import "@/assets/base.scss";
</style>
