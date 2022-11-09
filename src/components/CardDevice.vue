<template>
  <card-component :scale="true" addClass="cursor-pointer">
    <h1 class="text-xl text-end text-primary font-bold">{{ deviceid }}</h1>
    <div class="grid grid-cols-2 pt-3 gap-4">
      <div class="flex space-x-3">
        <icon-group-device size="w-5 h-5" />
        <h3 class="text-sm text-primary text-gray-400">{{ groupname }}</h3>
      </div>
      <div class="flex space-x-3">
        <icon-version />
        <h3 class="text-sm text-primary text-gray-400">{{ firmware }}</h3>
      </div>
      <div class="flex space-x-3">
        <icon-audio />
        <h3 class="text-sm text-primary text-gray-400">80%</h3>
      </div>
      <div class="flex space-x-3">
        <icon-model />
        <h3 class="text-sm text-primary text-gray-400">Audioland</h3>
      </div>
      <div class="flex space-x-3">
        <icon-memory />
        <h3 class="text-sm text-primary text-gray-400">{{ hdcapacity }}</h3>
      </div>
      <div class="flex space-x-3">
        <icon-device-information />
        <h3 class="text-sm text-primary text-gray-400">Ref-v2</h3>
      </div>
    </div>
    <h3 class="text-sm text-primary text-gray-400 pt-4">Last online 5hr ago</h3>
  </card-component>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import IconGroupDevice from "./icons/IconGroupDevice.vue";
import IconAudio from "./icons/IconAudio.vue";
import IconDeviceInformation from "./icons/IconDeviceInformation.vue";
import IconVersion from "./icons/IconVersion.vue";
import IconModel from "./icons/IconModel.vue";
import IconMemory from "./icons/IconMemory.vue";

export default {
  components: {
    CardComponent,
    IconGroupDevice,
    IconAudio,
    IconDeviceInformation,
    IconVersion,
    IconModel,
    IconMemory,
  },
  props: {
    deviceid: String,
    groupname: String,
    firmware: String,
    hdcapacity: Number,
  },
  setup() {
    return {};
  },
};
</script>
