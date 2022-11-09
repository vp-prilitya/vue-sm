<template>
  <div class="flex">
    <div class="main">
      <header-title title="Playlist">
        <icon-playlist color="fill-primary" />
      </header-title>
      <main-content>
        <div class="flex-wrap flex flex-col sm:flex-row justify-center mx-auto">
          <card-icon title="Arrival">
            <IconArrival />
          </card-icon>
          <card-icon title="Center">
            <CenterIcon />
          </card-icon>
          <card-icon title="Departurer">
            <DepartureIcon />
          </card-icon>
        </div>
        <div class="pt-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 pb-5">
          <card-playlist
            v-show="result.data?.length"
            v-for="db in result.data"
            :key="db.playlistid"
            :playlistname="db.playlistname"
            :description="db.description"
            :totalMedia="db.total_media"
            :totalTime="db.total_time"
          />

          <skeleton-component
            v-show="result.loading"
            height="h-64"
            v-for="index in 3"
            :key="index"
          />

          <alert-error-component
            v-if="result.error"
            :message="result.error.response.data.message"
          />
        </div>
      </main-content>
    </div>
    <media-playlist></media-playlist>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import IconArrival from "@/components/icons/IconArrival.vue";
import CardIcon from "@/components/CardIcon.vue";
import CenterIcon from "@/components/icons/CenterIcon.vue";
import DepartureIcon from "@/components/icons/DepartureIcon.vue";
import SkeletonComponent from "@/components/SkeletonComponent.vue";
import CardPlaylist from "../../components/CardPlaylist.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import MediaPlaylist from "./MediaPlaylist.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
import { usePlaylistStore } from "@/store";
import { storeToRefs } from "pinia";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "PlaylistView",
  components: {
    HeaderTitle,
    MainContent,
    IconArrival,
    CardIcon,
    CenterIcon,
    DepartureIcon,
    CardPlaylist,
    IconPlaylist,
    MediaPlaylist,
    AlertErrorComponent,
    SkeletonComponent,
  },
  setup() {
    const playlistStore = usePlaylistStore();

    const { result } = storeToRefs(playlistStore);

    onMounted(() => playlistStore.playlistGetAll());

    return {
      result,
    };
  },
};
</script>
