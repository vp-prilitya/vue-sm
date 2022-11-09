<template>
  <div class="space-y-6">
    <SearchInput />
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 pb-5">
      <CardDevice
        v-show="result.data?.length"
        v-for="db in result.data"
        :key="db.id"
        :deviceid="db.deviceid"
        :groupname="db.devicegroupname"
        :firmware="db.firmware"
        :hdcapacity="db.hdcapacity"
      />

      <device-list-skeleton v-if="result.loading" />
      <alert-error-component
        v-if="result.error"
        :message="result.error.response.data.message"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import CardDevice from "@/components/CardDevice.vue";
import DeviceListSkeleton from "./DeviceListSkeleton.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
import { useDeviceStore } from "@/store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    SearchInput,
    CardDevice,
    DeviceListSkeleton,
    AlertErrorComponent,
  },
  setup() {
    const deviceStore = useDeviceStore();

    const { result } = storeToRefs(deviceStore);

    onMounted(() => deviceStore.deviceGetAll());

    return {
      result,
    };
  },
};
</script>
