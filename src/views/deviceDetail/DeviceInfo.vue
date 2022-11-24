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
    <div class="flex flex-col px-8 space-y-5 [&_svg]:w-7 [&_svg]:h-7">
      <TextIconGroup text="KRL-JR105" :textWhite="true" textSize="text-md">
        <icon-group-device />
      </TextIconGroup>
      <TextIconGroup text="v1.1.0" :textWhite="true" textSize="text-md">
        <icon-version />
      </TextIconGroup>
      <TextIconGroup text="80%" :textWhite="true" textSize="text-md">
        <icon-audio />
      </TextIconGroup>
      <TextIconGroup text="Audioland" :textWhite="true" textSize="text-md">
        <icon-model />
      </TextIconGroup>
      <TextIconGroup text="32 GB" :textWhite="true" textSize="text-md">
        <icon-memory />
      </TextIconGroup>
      <TextIconGroup text="Ref-v2" :textWhite="true" textSize="text-md">
        <icon-device-information />
      </TextIconGroup>
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
import TextIconGroup from "@/components/TextIconGroup.vue";

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
    TextIconGroup,
  },
};
</script>

<style lang="scss" scoped></style>
