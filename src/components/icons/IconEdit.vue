<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    :class="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.998749 19.0013H4.74875L15.8087 7.94128L12.0587 4.19128L0.998749 15.2513V19.0013ZM2.99875 16.0813L12.0587 7.02128L12.9787 7.94128L3.91875 17.0013H2.99875V16.0813Z"
    />
    <path
      d="M16.3687 1.29128C15.9787 0.901279 15.3487 0.901279 14.9587 1.29128L13.1287 3.12128L16.8787 6.87128L18.7087 5.04128C19.0987 4.65128 19.0987 4.02128 18.7087 3.63128L16.3687 1.29128Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "fill-primary",
    },
  },
};
</script>
