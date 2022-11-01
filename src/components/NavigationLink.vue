<template>
  <router-link
    :to="routeLink"
    active-class="bg-amber "
    class="p-2 text-white transition-colors duration-200 rounded-md"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    routeLink: String,
  },
};
</script>
