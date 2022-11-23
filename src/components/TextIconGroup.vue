<template>
  <div
    class="inline-flex space-x-3 items-center"
    :class="textWhite ? '[&>svg]:fill-white' : '[&>svg]:fill-primary'"
  >
    <slot />
    <h3 :class="[textWhite ? 'text-white' : 'text-gray-500', textSize]">
      {{ text }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    textWhite: {
      type: Boolean,
      default: false,
    },
    textSize: {
      type: String,
      default: "text-sm",
    },
  },
  setup() {
    return {};
  },
};
</script>
