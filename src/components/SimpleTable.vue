<template>
  <div
    class="overflow-x-auto overflow-y-auto max-height border-x border-green-500"
  >
    <table class="w-full">
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss">
table {
  @apply text-sm text-left text-gray-500 dark:text-gray-400;

  thead {
    @apply text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200;

    th {
      @apply font-medium;
    }
  }

  tbody {
    tr {
      @apply bg-white border-b dark:bg-gray-800 dark:border-gray-700;
    }
  }
}

.max-height {
  max-height: 800px;
}
</style>
