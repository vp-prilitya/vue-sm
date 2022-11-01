<template>
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
    <div class="pt-5 flex flex-wrap">
      <card-playlist />
    </div>
  </main-content>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import IconArrival from "@/components/icons/IconArrival.vue";
import CardIcon from "@/components/CardIcon.vue";
import CenterIcon from "@/components/icons/CenterIcon.vue";
import DepartureIcon from "@/components/icons/DepartureIcon.vue";
import CardPlaylist from "./CardPlaylist.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";

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
  },
};
</script>
