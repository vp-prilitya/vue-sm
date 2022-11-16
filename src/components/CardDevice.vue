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
      <div class="flex space-x-3 items-center">
        <icon-group-device
          :color="blueCard ? 'fill-white' : 'fill-primary'"
          size="w-5 h-5 "
        />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          {{ groupname }}
        </h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-version :color="blueCard ? 'fill-white' : 'fill-primary'" />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          {{ firmware }}
        </h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-audio :color="blueCard ? 'fill-white' : 'fill-primary'" />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          80%
        </h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-model :color="blueCard ? 'fill-white' : 'fill-primary'" />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          Audioland
        </h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-memory :color="blueCard ? 'fill-white' : 'fill-primary'" />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          {{ hdcapacity }}
        </h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-device-information
          :color="blueCard ? 'fill-white' : 'fill-primary'"
        />
        <h3 class="text-sm" :class="blueCard ? 'text-white' : 'text-gray-500'">
          Ref-v2
        </h3>
      </div>
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
