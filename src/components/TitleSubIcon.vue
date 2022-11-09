<template>
  <div class="flex items-center">
    <div>
      <slot />
    </div>
    <div class="pl-6">
      <h1 class="text-1xl font-bold" :class="[titleColor]">
        {{ title }}
      </h1>
      <p class="text-xs" :class="[subtitleColor]">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    titleColor: {
      default: "text-primary",
      type: String,
    },
    subtitleColor: {
      default: "text-gray-400",
      type: String,
    },
  },
};
</script>
