<template>
  <input
    :type="type"
    @focus="($event.target as HTMLInputElement).select()"
    v-model="input"
  />
</template>

<script lang="ts">
import { useModelWrapper } from "@/utils/model";

export default {
  props: {
    // v-model
    modelValue: [String, Number],
    type: { type: String, default: "text" },
  },

  setup(props: any, { emit }: any) {
    return {
      input: useModelWrapper(props, emit),
    };
  },
};
</script>
