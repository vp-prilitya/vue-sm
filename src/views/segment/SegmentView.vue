<template>
  <div class="main">
    <HeaderTitle title="Segment"> </HeaderTitle>
    <MainContent>
      <div class="pt-2 flex justify-end">
        <button-component vClass="btn-gray text-md text-primary">
          <icon-playlist color="fill-blueSide" size="w-5 h-5" />
          Add new segment
        </button-component>
      </div>
      <div class="pt-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 pb-5">
        <CardSegment
          segmentname="SGM-Aqua"
          description="Segment untuk playlist Aqua"
          :totalPlaylist="3"
          :totalSegment="3"
          @click="clickDetail"
        />
        <CardSegment
          segmentname="SGM-Aqua"
          description="Segment untuk playlist Aqua"
          :totalPlaylist="3"
          :totalSegment="3"
          @click="clickDetail"
        />
        <CardSegment
          segmentname="SGM-Aqua"
          description="Segment untuk playlist Aqua"
          :totalPlaylist="3"
          :totalSegment="3"
          @click="clickDetail"
        />
      </div>
    </MainContent>
  </div>
  <SideDetailSegment />
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import CardSegment from "@/components/CardSegment.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import SideDetailSegment from "./SideDetailSegment.vue";
import { useSidebarStore } from "@/store";

export default {
  components: {
    HeaderTitle,
    MainContent,
    CardSegment,
    ButtonComponent,
    IconPlaylist,
    SideDetailSegment,
  },
  setup() {
    const sidebarStore = useSidebarStore();

    const clickDetail = () => {
      sidebarStore.open = true;
    };

    return {
      clickDetail,
    };
  },
};
</script>
