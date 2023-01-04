<template>
  <div class="cursor-pointer">
    <CardComponent :scale="true">
      <title-sub-icon :title="segmentname" :subtitle="description">
        <IconLibaryMusic color="fill-primary" />
      </title-sub-icon>

      <div class="py-4">
        <hr />
      </div>
      <div class="flex justify-between">
        <div class="flex items-center space-x-3">
          <icon-play />
          <h3 class="text-sm text-primary">{{ totalSegment }} Segments</h3>
        </div>
        <div class="flex items-center space-x-3">
          <icon-playlist color="fill-primary" />
          <h3 class="text-sm text-primary">{{ totalPlaylist }} Playlist</h3>
        </div>
      </div>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";

export default {
  components: {
    CardComponent,
    IconLibaryMusic,
    IconPlay,
    IconPlaylist,
    TitleSubIcon,
  },
  props: {
    segmentname: String,
    description: String,
    totalSegment: String,
    totalPlaylist: String,
  },
};
</script>
