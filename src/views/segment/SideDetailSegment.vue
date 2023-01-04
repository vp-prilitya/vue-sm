<template>
  <SidebarRight>
    <div class="px-8">
      <TitleSubIcon
        title="SGM-AQUA"
        titleColor="text-white"
        subtitleColor="text-white"
      >
        <IconLibaryMusic />
      </TitleSubIcon>

      <TittleBetween title="Segment" addClass="pt-8 pb-4">
        <router-link to="/segment/segment-detail">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>
        </router-link>
      </TittleBetween>
      <div @scroll="scrolling" class="overflow-auto h-80">
        <div class="space-y-4">
          <title-sub-icon
            title="SGM-Aqua Pagi"
            titleColor="text-white"
            subtitleColor="text-white"
            subtitle="Aqua"
            subtitle2="Playlist Aqua Pagi"
            subtitle3="00:05"
          >
            <icon-play color="fill-white" :size="'w-8 h-8'" />
          </title-sub-icon>
          <title-sub-icon
            title="PL-Aqua Siang"
            titleColor="text-white"
            subtitleColor="text-white"
            subtitle="MCM"
            subtitle2="Aqua Siang"
            subtitle3="00:05"
          >
            <icon-play color="fill-white" :size="'w-8 h-8'" />
          </title-sub-icon>
          <title-sub-icon
            title="PL-Aqua Sore"
            titleColor="text-white"
            subtitleColor="text-white"
            subtitle="MCM"
            subtitle2="Playlist Aqua Sore"
            subtitle3="00:03"
          >
            <icon-play color="fill-white" :size="'w-8 h-8'" />
          </title-sub-icon>
        </div>
      </div>
    </div>
  </SidebarRight>
</template>

<script>
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";
import SidebarRight from "@/components/SidebarRight.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import TittleBetween from "@/components/TittleBetween.vue";
import IconPlay from "@/components/icons/IconPlay.vue";

export default {
  components: {
    SidebarRight,
    TitleSubIcon,
    IconLibaryMusic,
    TittleBetween,
    IconPlay,
  },
};
</script>
