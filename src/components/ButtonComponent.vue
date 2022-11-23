<template>
  <button
    type="submit"
    :class="[vClass]"
    class="[&>svg]:mr-2 [&>svg]:text-center [&>svg]:inline-flex [&>svg]:items-center [&>svg]:justify-center text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
      default: "btn-darkBlue",
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
