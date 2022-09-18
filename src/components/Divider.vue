<template>
  <div :class="`divider ${color}`"></div>
</template>

<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: "text-green-500",
  },

  thickness: {
    type: String,
    default: "thin",
  },
});
</script>

<style scoped lang="scss">
.divider {
  border-bottom: v-bind(thickness) solid;
}
</style>
