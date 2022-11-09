<template>
  <div class="flex justify-between" :class="[addClass]">
    <h1 class="text-white text-1xl font-bold">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    addClass: {
      type: String,
      default: "",
    },
  },
};
</script>
