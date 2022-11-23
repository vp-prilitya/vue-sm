<template>
  <div class="main">
    <header-title title="Device">
      <icon-device color="fill-primary" />
    </header-title>
    <main-content>
      <div class="flex flex-col md:flex-row">
        <div class="basis-7/12 md:border-r-2 md:border-gray-300">
          <device-group-list />
        </div>

        <div class="basis-full md:pl-8">
          <DeviceList />
        </div>
      </div>
    </main-content>
    <AddDeviceGroupVue></AddDeviceGroupVue>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import DeviceGroupList from "./DeviceGroupList.vue";
import IconDevice from "@/components/icons/IconDevice.vue";
import DeviceList from "./DeviceList.vue";
import AddDeviceGroupVue from "./AddDeviceGroup.vue";

export default {
  components: {
    HeaderTitle,
    MainContent,
    DeviceGroupList,
    IconDevice,
    DeviceList,
    AddDeviceGroupVue,
  },
};
</script>
