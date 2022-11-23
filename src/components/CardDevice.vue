<template>
  <card-component
    :scale="true"
    :addClass="blueCard ? 'cursor-pointer bg-blueSide' : 'cursor-pointer'"
  >
    <h1
      class="text-xl text-end font-bold"
      :class="blueCard ? 'text-white' : 'text-primary'"
    >
      {{ deviceid }}
    </h1>
    <div class="grid grid-cols-2 pt-3 gap-4">
      <TextIconGroup :text="groupname" :textWhite="blueCard">
        <icon-group-device size="w-5 h-5 " />
      </TextIconGroup>
      <TextIconGroup :text="firmware" :textWhite="blueCard">
        <icon-version />
      </TextIconGroup>
      <TextIconGroup :text="'80%'" :textWhite="blueCard">
        <icon-audio />
      </TextIconGroup>
      <TextIconGroup :text="'Audioland%'" :textWhite="blueCard">
        <icon-model />
      </TextIconGroup>
      <TextIconGroup :text="`${hdcapacity}`" :textWhite="blueCard">
        <icon-memory />
      </TextIconGroup>
      <TextIconGroup :text="'Ref-v2'" :textWhite="blueCard">
        <icon-device-information />
      </TextIconGroup>
    </div>
    <h3 class="text-sm pt-4" :class="blueCard ? 'text-white' : 'text-gray-500'">
      Last online 5hr ago
    </h3>
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
import TextIconGroup from "./TextIconGroup.vue";

export default {
  components: {
    CardComponent,
    IconGroupDevice,
    IconAudio,
    IconDeviceInformation,
    IconVersion,
    IconModel,
    IconMemory,
    TextIconGroup,
  },
  props: {
    deviceid: String,
    groupname: String,
    firmware: String,
    hdcapacity: Number,
    blueCard: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>
