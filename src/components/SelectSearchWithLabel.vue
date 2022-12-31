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
      v-model:formControlName="formName"
      :placeholder="placeholder"
      :loading="loading"
      @onSelectChange="changeData"
      :theme="theme"
    />
  </div>
</template>

<script>
import SelectSearch from "./SelectSearch.vue";
import { computed } from "@vue/runtime-core";

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
    loading: Boolean,
    theme: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const formName = computed({
      get() {
        return props.formControlName;
      },
      set(value) {
        emit("update:formControlName", value);
      },
    });

    const changeData = (value) => {
      emit("onSelectChange", value);
    };

    return {
      formName,
      changeData,
    };
  },
};
</script>
