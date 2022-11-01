<template>
  <a
    href="#"
    class="py-6 px-9 m-3 md:w-1/6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
  >
    <div class="flex flex-col items-center justify-center text-center">
      <slot />
      <h5 class="pt-2 font-bold text-gray-900">{{ title }}</h5>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
