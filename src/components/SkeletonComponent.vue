<template>
  <div
    role="status"
    class="flex justify-center items-center h- rounded-lg animate-pulse"
    :class="[height, width, color]"
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
    width: {
      type: String,
      default: "max-w-sm",
    },
    color: {
      type: String,
      default: "bg-gray-300",
    },
  },
};
</script>
