<template>
  <svg
    :class="[size]"
    viewBox="0 0 34 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.5 0.25H3.5C1.85 0.25 0.5 1.6 0.5 3.25V22.75C0.5 24.4 1.85 25.75 3.5 25.75H30.5C32.15 25.75 33.5 24.4 33.5 22.75V3.25C33.5 1.6 32.15 0.25 30.5 0.25ZM3.5 22.75V3.25H15.5V22.75H3.5ZM30.5 22.75H18.5V3.25H30.5V22.75ZM20 8.5H29V10.75H20V8.5ZM20 12.25H29V14.5H20V12.25ZM20 16H29V18.25H20V16Z"
      fill="#073265"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "w-9 h-9",
    },
  },
};
</script>
