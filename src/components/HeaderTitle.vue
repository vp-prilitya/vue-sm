<template>
  <header class="flex items-center space-x-4 md:space-x-0">
    <slot />
    <h1 class="text-2xl text-primary font-bold px-2">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: String,
  },
};
</script>
