<template>
  <div
    role="status"
    class="flex justify-center items-center max-w-sm h- bg-gray-300 rounded-lg animate-pulse"
    :class="[height]"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "h-32",
    },
  },
};
</script>
