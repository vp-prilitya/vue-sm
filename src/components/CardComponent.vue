<template>
  <div
    class="p-6 max-w-sm rounded-lg bg-cardColor border border-blueSide shadow-md transition duration-300"
    :class="[
      { 'hover:scale-105': scale },
      addClass,
      { 'bg-blueSide': selected },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    scale: {
      type: Boolean,
      default: false,
    },
    addClass: [Array, String],
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
