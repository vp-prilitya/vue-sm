<template>
  <div class="mb-6">
    <label
      :for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
    <Field
      :as="as"
      :type="type"
      :id="name"
      :name="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg transition duration-300 block w-full p-2.5"
      :placeholder="placeholder"
      :class="{
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500':
          error,
        'focus:ring-blue-800 focus:border-red-800': !error,
      }"
    />
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ error }}</p>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
  },
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    name: String,
    error: String,
    as: String,
  },
};
</script>
