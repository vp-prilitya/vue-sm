<template>
  <sidebar-right>
    <div v-if="result.data?.length">
      <div class="px-8">
        <title-sub-icon
          :title="dataPlaylist.playlistname"
          titleColor="text-white"
          subtitleColor="text-white"
          :subtitle="dataPlaylist.description"
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
      <div @scroll="scrolling" class="overflow-auto h-80">
        <div class="px-8 space-y-4">
          <title-sub-icon
            v-for="db in result.data"
            :key="db.playlist_detail_id"
            :title="db.media.name"
            titleColor="text-white"
            subtitleColor="text-white"
            :subtitle="db.media.vendor?.name"
            :subtitle2="db.media.adstype?.name"
            :subtitle3="secondToString(db.media.duration_insecond)"
          >
            <icon-play color="fill-white" :size="'w-8 h-8'" />
          </title-sub-icon>

          <loading-lottie v-if="result.loading" />
        </div>
      </div>
      <div class="px-8">
        <tittle-betweent title="Total media" addClass="pt-8">
          <h1 class="text-white text-md font-bold">
            {{ dataPlaylist.total_media }}
          </h1>
        </tittle-betweent>
        <tittle-betweent title="Total duration" addClass="pt-3">
          <h1 class="text-white text-md font-bold">
            {{ dataPlaylist.total_time }}
          </h1>
        </tittle-betweent>
      </div>
    </div>
    <media-playlist-skeleton v-if="result.loading && !result.data?.length" />
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import TittleBetweent from "@/components/TittleBetween.vue";
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";
import LoadingLottie from "@/components/LoadingLottie.vue";
import MediaPlaylistSkeleton from "./MediaPlayistSkeleton.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import { usePlaylistDetailStore, useSidebarStore } from "@/store";
import { storeToRefs } from "pinia";
import { secondToString } from "@/utils/helper";
import { computed, ref } from "@vue/runtime-core";

export default {
  components: {
    SidebarRight,
    TitleSubIcon,
    IconLibaryMusic,
    TittleBetweent,
    IconPlay,
    MediaPlaylistSkeleton,
    LoadingLottie,
  },
  setup() {
    const detailStore = usePlaylistDetailStore();
    const sidebar = useSidebarStore();
    const dataPlaylist = computed(() => sidebar.getData);
    const bottom = ref(false);
    const { result } = storeToRefs(detailStore);

    const scrolling = (e) => {
      const clientHeight = e.target.clientHeight;
      const scrollHeight = e.target.scrollHeight;
      const scrollTop = e.target.scrollTop;

      if (scrollTop + clientHeight >= scrollHeight) {
        detailStore.$patch((state) => {
          if (
            state.result.data?.length &&
            !state.result.loading &&
            state.result.data?.length < state.result.count
          ) {
            loadMore();
          }
        });
      }
    };

    const loadMore = () => {
      sidebar.data.offset++;
      bottom.value = false;
      detailStore.playlistDetailGetAll({
        playlistid: sidebar.id,
        offset: sidebar.data.offset,
        loadmore: true,
      });
    };

    return {
      secondToString,
      result,
      dataPlaylist,
      scrolling,
    };
  },
};
</script>
