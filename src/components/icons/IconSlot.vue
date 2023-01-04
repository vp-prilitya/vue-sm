<template>
  <svg
    :class="[color, size, addClass]"
    viewBox="0 0 39 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.375 5.04167V35.9583H4.625V5.04167H34.375ZM38.625 0.625H0.375V40.375H38.625V0.625ZM30.125 31.5417H8.875V29.3333H30.125V31.5417ZM30.125 27.125H8.875V24.9167H30.125V27.125ZM30.125 20.5H8.875V9.45833H30.125V20.5Z"
    />
  </svg>
</template>

<script>
export default {
  name: "IconSlot",
  props: {
    color: {
      type: String,
      default: "fill-white",
    },
    size: {
      type: String,
      default: "w-7 h-7",
    },
    addClass: String,
  },
};
</script>
