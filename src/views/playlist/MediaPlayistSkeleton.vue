<template>
  <div>
    <div class="px-8">
      <title-sub-icon-skeleton :color="color" />
      <div class="pt-8 pb-4">
        <skeleton-component :color="color" height="h-6" width="w-44" />
      </div>
    </div>
    <div class="">
      <div class="px-8 space-y-4">
        <title-sub-icon-skeleton
          iconHeight="h-10"
          iconWidth="w-10"
          :color="color"
          v-for="index in 5"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonComponent from "@/components/SkeletonComponent.vue";
import TitleSubIconSkeleton from "@/components/TittleSubIconSkeleton.vue";

export default {
  components: {
    TitleSubIconSkeleton,
    SkeletonComponent,
  },
  setup() {
    const color = "bg-primary";
    return {
      color,
    };
  },
};
</script>
