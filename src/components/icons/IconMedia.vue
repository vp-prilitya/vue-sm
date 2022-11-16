<template>
  <svg
    :class="[size, color]"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 21H9V3H27V21ZM15.75 19.5C17.82 19.5 19.5 17.82 19.5 15.75V7.5H24V4.5H18V12.765C17.37 12.285 16.605 12 15.75 12C13.68 12 12 13.68 12 15.75C12 17.82 13.68 19.5 15.75 19.5ZM3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "w-7 h-7",
    },
    color: {
      type: String,
      default: "fill-primary",
    },
  },
};
</script>
