<template>
  <sidebar-right>
    <div class="fixed flex-row width-sidebar h-full pb-8 pt-12">
      <div class="px-8">
        <title-sub-icon
          title="PL-Ads Blocking"
          titleColor="text-white"
          subtitleColor="text-white"
          subtitle="20-10-2022 to 23-10-2022"
        >
          <icon-libary-music />
        </title-sub-icon>

        <tittle-betweent title="Media List" addClass="pt-8 pb-4">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>
        </tittle-betweent>
      </div>
      <div class="overflow-y-auto h-80">
        <div class="px-8 space-y-4">
          <title-sub-icon
            title="PL-Ads Blocking"
            titleColor="text-white"
            subtitleColor="text-white"
            subtitle="Aqua"
            subtitle2="Commersial"
            subtitle3="00:30"
            v-for="index in 10"
            :key="index"
          >
            <icon-play color="fill-white" />
          </title-sub-icon>
        </div>
      </div>
      <div class="px-8">
        <tittle-betweent title="Total media" addClass="pt-8">
          <h1 class="text-white text-md font-bold">5</h1>
        </tittle-betweent>
        <tittle-betweent title="Total duration" addClass="pt-3">
          <h1 class="text-white text-md font-bold">01:24</h1>
        </tittle-betweent>
      </div>
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import TittleBetweent from "@/components/TittleBetween.vue";
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

export default {
  components: {
    SidebarRight,
    TitleSubIcon,
    IconLibaryMusic,
    TittleBetweent,
    IconPlay,
  },
  setup() {
    return {};
  },
};
</script>
