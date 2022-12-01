<template>
  <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-white">{{ label }}</label>

    <VueTailwindDatePicker
      as-single
      use-range
      :formatter="formatter"
      v-model="dateValue"
      input-classes="input-blue"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import VueTailwindDatePicker from "vue-tailwind-datepicker";

export default {
  components: {
    VueTailwindDatePicker,
  },
  props: {
    label: String,
  },
  setup() {
    const formatter = ref({
      date: "DD MMM YYYY",
      month: "MMM",
    });
    return {
      formatter,
    };
  },
};
</script>
