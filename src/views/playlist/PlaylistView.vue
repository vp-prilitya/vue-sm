<template>
  <div class="flex">
    <div class="main">
      <header-title title="Playlist">
        <icon-playlist color="fill-primary" />
      </header-title>
      <main-content>
        <menu-componet
          :arrivalLink="'slot'"
          :centerLink="'slot'"
          :departurerLink="'slot'"
        />
        <div
          class="pt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 pb-5"
          :class="open ? 'lg:grid-cols-2' : 'lg:grid-cols-3 '"
        >
          <card-playlist
            v-show="result.data?.length"
            v-for="db in result.data"
            @click="onClick(db)"
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
        <!-- <div v-show="result.data?.length" class="flex justify-center p-8">
          <button-component
            @click="loadMore"
            :vClass="'w-[200px] bg-btnGray hover:bg-gray-300 rounded-full focus:ring-gray-300 '"
          >
            Load more
          </button-component>
        </div> -->
      </main-content>
    </div>
    <media-playlist></media-playlist>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import SkeletonComponent from "@/components/SkeletonComponent.vue";
import MenuComponet from "@/components/MenuComponent.vue";
import CardPlaylist from "../../components/CardPlaylist.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import MediaPlaylist from "./MediaPlaylist.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
// import ButtonComponent from "@/components/ButtonComponent.vue";
import {
  usePlaylistDetailStore,
  usePlaylistStore,
  useSidebarStore,
} from "@/store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "PlaylistView",
  components: {
    HeaderTitle,
    MainContent,
    MenuComponet,
    CardPlaylist,
    IconPlaylist,
    MediaPlaylist,
    AlertErrorComponent,
    SkeletonComponent,
    // ButtonComponent,
  },
  setup() {
    const playlistStore = usePlaylistStore();
    const detail = usePlaylistDetailStore();
    const sidebarStore = useSidebarStore();

    const offset = ref(0);

    const onClick = (value) => {
      sidebarStore.$patch((state) => {
        if (!state.open) {
          state.open = !state.open;
        }

        if (state.id != value.playlistid) {
          detail.playlistDetailGetAll({ playlistid: value.playlistid });
          state.id = value.playlistid;
          state.data = value;
        }
      });
    };

    const { result } = storeToRefs(playlistStore);
    const { open } = storeToRefs(sidebarStore);

    const loadMore = () => {
      playlistStore.playlistGetAll({
        offset: offset.value + 1,
        loadmore: true,
      });
    };

    onMounted(() => {
      playlistStore.playlistGetAll({ offset: offset.value });
    });

    return {
      onClick,
      result,
      open,
      loadMore,
    };
  },
};
</script>
