<template>
  <div
    v-for="index in 3"
    :key="index"
    role="status"
    class="flex justify-center h-32 items-center max-w-sm h- bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>
