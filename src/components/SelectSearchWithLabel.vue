<template>
  <div class="mb-6">
    <label
      :for="name"
      class="block mb-2 text-sm font-medium"
      :class="[labelColor]"
      >{{ label }}</label
    >
    <SelectSearch
      :data="data"
      :optionsValue="optionsValue"
      :optionsKey="optionsKey"
      :formControlName="formControlName"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import SelectSearch from "./SelectSearch.vue";

export default {
  components: {
    SelectSearch,
  },
  props: {
    labelColor: {
      type: String,
      default: "text-gray-900",
    },
    name: String,
    label: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    placeholder: String,
    optionsValue: {
      type: String,
      required: true,
    },
    optionsKey: String,
    formControlName: [String, Number],
  },
};
</script>
