<template>
  <div class="main">
    <header-title title="Device Detail">
      <icon-device color="fill-primary" />
    </header-title>
    <main-content>
      <div class="flex flex-col md:flex-row pt-5">
        <div class="basis-11/12">
          <CardDevice
            :deviceid="'GA-A1'"
            :groupname="'KRL-JR105'"
            :firmware="'v1.1.0'"
            :hdcapacity="32"
            :blueCard="true"
            @click="clickInfo"
          />
        </div>
        <div class="basis-full md:pl-8 justify-between">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h1 class="text-lg pb-1">Volume</h1>
              <div class="mb-4 w-full h-4 bg-gray-400 rounded-full">
                <div
                  class="h-4 bg-red-500 rounded-full"
                  style="width: 45%"
                ></div>
              </div>
            </div>
            <div class="flex space-x-3">
              <button-component vClass="btn-gray w-full text-md text-primary">
                <icon-schedule />
                Schedule
              </button-component>
              <button-component vClass="btn-gray w-full  text-md text-primary ">
                <icon-playlist color="fill-blueSide" />
                Playlist
              </button-component>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-14">
        <device-information />
      </div>
    </main-content>
  </div>
  <device-info> </device-info>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import IconDevice from "@/components/icons/IconDevice.vue";
import IconSchedule from "@/components/icons/IconShedule.vue";
import CardDevice from "@/components/CardDevice.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import DeviceInformation from "@/components/DeviceInformationSvg.vue";
import DeviceInfo from "./DeviceInfo.vue";
import { onMounted } from "@vue/runtime-core";
import { useSidebarStore } from "@/store";

export default {
  components: {
    HeaderTitle,
    MainContent,
    IconDevice,
    CardDevice,
    ButtonComponent,
    IconPlaylist,
    DeviceInformation,
    IconSchedule,
    DeviceInfo,
  },

  setup() {
    const sidebar = useSidebarStore();
    const clickInfo = () => {
      sidebar.$patch((state) => {
        state.open = true;
      });
    };

    onMounted(() => clickInfo());

    return {
      clickInfo,
    };
  },
};
</script>
