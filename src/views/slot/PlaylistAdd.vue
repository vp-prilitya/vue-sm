<template>
  <sidebar-right :btnClose="false">
    <div class="py-10 px-8">
      <tittle-between title="Media List" addClass="pt-8 pb-4">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
        </svg>
      </tittle-between>
      <div class="space-y-3">
        <title-sub-icon
          v-for="index in 4"
          :key="index"
          :title="'PL-Ads Arrival'"
          titleColor="text-white"
          subtitleColor="text-white"
          :subtitle="'Arrival'"
          :subtitle2="'Media 1'"
        >
          <icon-media color="fill-white" />
        </title-sub-icon>
      </div>
      <li class="text-white text-xs pt-10">Drop playlist to Slot Area</li>
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TittleBetween from "@/components/TittleBetween.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import IconMedia from "@/components/icons/IconMedia.vue";

export default {
  components: {
    SidebarRight,
    TittleBetween,
    TitleSubIcon,
    IconMedia,
  },
  setup() {
    return {};
  },
};
</script>
