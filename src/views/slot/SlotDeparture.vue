<template>
  <div class="flex justify-center basis-9/12 md:border-r-2">
    <departure-info />
  </div>
  <div class="basis-full h-auto md:border-l-2 md:border-gray-400 px-10">
    <div class="w-[200px]">
      <title-sub-icon
        :title="'PL-Ads Arrival'"
        :subtitle="'Arrival'"
        :subtitle2="'Media 1'"
        :subtitleColor="'text-primary'"
      >
        <icon-media />
      </title-sub-icon>
      <h1 class="text-primary text-md pt-10 pb-3">Media List</h1>
      <title-sub-icon
        :title="'COM-Aqua General'"
        :subtitle="'Aqua'"
        :subtitle2="'Commercial'"
        :subtitle3="'00:05'"
        :subtitleColor="'text-primary'"
      >
        <icon-play />
      </title-sub-icon>
    </div>
  </div>
</template>
<script>
import DepartureInfo from "@/components/DepartureInfoSvg.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import IconMedia from "@/components/icons/IconMedia.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

export default {
  components: {
    DepartureInfo,
    TitleSubIcon,
    IconMedia,
    IconPlay,
  },
};
</script>
