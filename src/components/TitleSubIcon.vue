<template>
  <div class="flex items-center" :class="[addClass]">
    <div>
      <slot />
    </div>
    <div class="pl-5 w-full">
      <h1 class="text-1xl font-bold" :class="[titleColor]">
        {{ title }}
      </h1>
      <div class="flex justify-between">
        <div>
          <p class="text-xs" :class="[subtitleColor]">
            {{ subtitle }}
          </p>
        </div>
        <div>
          <p class="text-xs" :class="[subtitleColor]">
            {{ subtitle2 }}
          </p>
        </div>
        <div>
          <p class="text-xs font-bold" :class="[subtitleColor]">
            {{ subtitle3 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    subtitle2: String,
    subtitle3: String,
    titleColor: {
      default: "text-primary",
      type: String,
    },
    subtitleColor: {
      default: "text-gray-400",
      type: String,
    },
    addClass: String,
  },
};
</script>
