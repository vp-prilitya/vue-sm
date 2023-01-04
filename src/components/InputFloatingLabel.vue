<template>
  <div>
    <div class="relative z-0 w-full mb-6 group">
      <input
        :type="type"
        :name="name"
        :id="name"
        placeholder=" "
        class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer rounded-md"
        required
        autocomplete="off"
      />
      <label
        class="peer-focus:font-medium peer-focus:bg-white peer-focus:z-50 peer-focus:ml-3 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:px-1 bg-white ml-3 px-1 font-medium peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-placeholder-shown:-z-10"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: String,
    label: String,
  },
};
</script>
