<template>
  <div class="flex justify-center basis-9/12 md:border-r-2">
    <arrival-info />
  </div>
  <div class="basis-full h-auto md:border-l-2 md:border-gray-400 px-10">
    <div
      v-show="!selected"
      @click="clickSelect"
      class="flex items-center border-dashed border-2 border-black justify-center bg-gray-300 h-[250px] text-center text-sm hover:cursor-pointer"
    >
      Pilih playlist untuk slot <span class="font-bold pl-1"> Arrival</span>
    </div>
    <div v-show="selected" class="w-[200px]">
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
import ArrivalInfo from "@/components/ArrivalInfoSvg.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import IconMedia from "@/components/icons/IconMedia.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import { useSidebarStore } from "@/store";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  components: {
    ArrivalInfo,
    TitleSubIcon,
    IconMedia,
    IconPlay,
  },
  setup() {
    const selected = ref(false);
    const userSidebar = useSidebarStore();

    onMounted(() => {
      userSidebar.$patch((state) => {
        state.open = true;
      });
    });

    const clickSelect = () => {
      selected.value = true;
      userSidebar.$patch((state) => {
        state.open = false;
      });
    };

    return {
      selected,
      clickSelect,
    };
  },
};
</script>
