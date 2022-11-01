<template>
  <svg
    :class="[color, size]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 46 32"
    stroke="currentColor"
  >
    <path
      d="M7.66667 4H42.1667V0H7.66667C5.55833 0 3.83333 1.8 3.83333 4V26H0V32H26.8333V26H7.66667V4ZM44.0833 8H32.5833C31.5292 8 30.6667 8.9 30.6667 10V30C30.6667 31.1 31.5292 32 32.5833 32H44.0833C45.1375 32 46 31.1 46 30V10C46 8.9 45.1375 8 44.0833 8ZM42.1667 26H34.5V12H42.1667V26Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "fill-white",
    },
    size: {
      type: String,
      default: "w-7 h-7",
    },
  },
};
</script>
