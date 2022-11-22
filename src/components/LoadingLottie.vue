<template>
  <Vue3Lottie :animationData="AstronautJSON" :height="80" :width="80" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import AstronautJSON from "@/assets/lottie/loading.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    };
  },
};
</script>
