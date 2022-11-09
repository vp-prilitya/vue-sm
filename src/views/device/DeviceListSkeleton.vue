<template>
  <div
    v-for="index in 4"
    :key="index"
    role="status"
    class="flex justify-center h-52 items-center max-w-sm h- bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>
