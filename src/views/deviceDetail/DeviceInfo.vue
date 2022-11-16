<template>
  <sidebar-right>
    <div class="px-8">
      <title-sub-icon
        :title="'GA-A1'"
        titleColor="text-white"
        subtitleColor="text-white"
        :subtitle="'SN-89749324'"
      >
        <icon-device :size="'w-10 h-10'" />
      </title-sub-icon>

      <tittle-betweent title="Basic Info" addClass="pt-8 pb-5">
        <icon-edit :color="'fill-white'" />
      </tittle-betweent>
    </div>
    <div class="px-8 space-y-5">
      <div class="flex space-x-3 items-center">
        <icon-group-device :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">KRL-JR105</h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-version :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">v1.1.0</h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-audio :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">80%</h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-model :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">Audioland</h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-memory :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">32 GB</h3>
      </div>
      <div class="flex space-x-3 items-center">
        <icon-device-information :color="'fill-white'" size="w-7 h-7 " />
        <h3 class="text-md" :class="'text-white'">Ref-v2</h3>
      </div>
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import TittleBetweent from "@/components/TittleBetween.vue";
import IconDevice from "@/components/icons/IconDevice.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconGroupDevice from "@/components/icons/IconGroupDevice.vue";
import IconAudio from "@/components/icons/IconAudio.vue";
import IconDeviceInformation from "@/components/icons/IconDeviceInformation.vue";
import IconVersion from "@/components/icons/IconVersion.vue";
import IconModel from "@/components/icons/IconModel.vue";
import IconMemory from "@/components/icons/IconMemory.vue";

export default {
  components: {
    SidebarRight,
    TitleSubIcon,
    TittleBetweent,
    IconDevice,
    IconEdit,
    IconGroupDevice,
    IconAudio,
    IconDeviceInformation,
    IconVersion,
    IconModel,
    IconMemory,
  },
};
</script>

<style lang="scss" scoped></style>
