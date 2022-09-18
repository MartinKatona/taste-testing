<template>
  <button :class="`p-2 inline-flex items-center ${btnClasses}`" v-primary>
    <mdicon :name="icon" v-bind="$attrs" :height="20" :width="20" />
    <span v-if="text != ''" class="ml-1"> {{ text }} </span>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  icon: { type: String, default: "plus" },
  text: { type: String, default: "" },
  btnClasses: { type: String, default: "" },
});
</script>
