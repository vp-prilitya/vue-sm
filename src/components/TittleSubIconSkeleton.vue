<template>
  <div class="flex space-x-4 items-center">
    <skeleton-component
      :color="color"
      :height="iconHeight"
      :width="iconWidth"
    />
    <div class="space-y-1">
      <skeleton-component :color="color" height="h-6" width="w-44" />
      <skeleton-component :color="color" height="h-6" width="w-32" />
    </div>
  </div>
</template>

<script>
import SkeletonComponent from "./SkeletonComponent.vue";
export default {
  components: {
    SkeletonComponent,
  },

  props: {
    color: String,
    iconWidth: {
      type: String,
      default: "w-14",
    },
    iconHeight: {
      type: String,
      default: "h-14",
    },
  },
};
</script>
