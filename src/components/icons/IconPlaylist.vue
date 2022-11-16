<template>
  <svg
    :class="[color, size, addClass]"
    viewBox="0 0 35 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.1013 0.75H0.375V4.33333H22.1013V0.75ZM22.1013 7.91667H0.375V11.5H22.1013V7.91667ZM0.375 18.6667H14.8592V15.0833H0.375V18.6667ZM25.7224 0.75V15.4058C25.1611 15.2088 24.5455 15.0833 23.9118 15.0833C22.4713 15.0833 21.0898 15.6496 20.0711 16.6576C19.0525 17.6656 18.4803 19.0328 18.4803 20.4583C18.4803 21.8839 19.0525 23.251 20.0711 24.259C21.0898 25.267 22.4713 25.8333 23.9118 25.8333C25.3524 25.8333 26.7339 25.267 27.7526 24.259C28.7712 23.251 29.3434 21.8839 29.3434 20.4583V4.33333H34.775V0.75H25.7224Z"
    />
  </svg>
</template>

<script>
export default {
  name: "IconPlaylist",
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
