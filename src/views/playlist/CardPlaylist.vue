<template>
  <div @click="onClick" class="cursor-pointer">
    <CardComponent :scale="true">
      <title-sub-icon
        title="PL-Ads Blocking"
        subtitle="PL-Ads Blocking Playlist bloking untuk slot kedatangan dan
            keberangkatan"
      >
        <IconLibaryMusic color="fill-primary" />
      </title-sub-icon>

      <div class="py-4">
        <hr />
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <icon-play />
          <h3 class="text-md text-primary">5 Media's</h3>
        </div>
        <div class="flex items-center space-x-3">
          <icon-alarm />
          <h3 class="text-md text-primary">03:20</h3>
        </div>
        <div class="flex items-center space-x-3">
          <icon-date />
          <h3 class="text-md text-primary">20-10-2022 to 23-10-2022</h3>
        </div>
      </div>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import IconDate from "@/components/icons/IconDate.vue";
import IconAlarm from "@/components/icons/IconAlarm.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import { useSidebarStore } from "@/store";

export default {
  components: {
    CardComponent,
    IconLibaryMusic,
    IconPlay,
    IconDate,
    IconAlarm,
    TitleSubIcon,
  },
  setup() {
    const open = useSidebarStore();
    const onClick = () => {
      open.$patch((state) => {
        state.open = !state.open;
      });
    };
    return {
      onClick,
    };
  },
};
</script>
