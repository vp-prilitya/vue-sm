<template>
  <svg
    :class="[color, size]"
    viewBox="0 0 30 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 3.5H25.5V0.5H22.5V3.5H7.5V0.5H4.5V3.5H3C1.35 3.5 0 4.85 0 6.5V30.5C0 32.15 1.35 33.5 3 33.5H27C28.65 33.5 30 32.15 30 30.5V6.5C30 4.85 28.65 3.5 27 3.5ZM27 30.5H3V14H27V30.5ZM27 11H3V6.5H27V11Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "fill-red-500",
    },
    size: {
      type: String,
      default: "w-6 h-6",
    },
  },
};
</script>
