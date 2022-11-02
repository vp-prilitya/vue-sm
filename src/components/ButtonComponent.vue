<template>
  <button
    type="submit"
    :class="[vClass]"
    class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
    :disabled="loading"
  >
    <loading-button v-if="loading" />
    <slot v-else />
  </button>
</template>

<script>
import LoadingButton from "@/components/LoadingButton.vue";

export default {
  components: {
    LoadingButton,
  },
  props: {
    vClass: {
      type: String,
      default: "bg-blue-800 hover:bg-blue-900 focus:ring-blue-300",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>
