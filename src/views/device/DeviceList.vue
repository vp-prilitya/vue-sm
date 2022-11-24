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
        @click="viewDetail(db.deviceid)"
      />

      <device-list-skeleton v-if="result.loading && !result.data?.length" />
      <alert-error-component
        v-if="result.error"
        :message="result.error.response.data.message"
      />
    </div>

    <div v-if="result.data?.length == 0" class="flex justify-center">
      <no-data :size="'w-[30rem]'" />
    </div>
    <LoadingLottie v-if="result.loading && result.data?.length" />
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import CardDevice from "@/components/CardDevice.vue";
import DeviceListSkeleton from "./DeviceListSkeleton.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
import NoData from "@/components/NoData.vue";
import { useDeviceStore, useScrollStore } from "@/store";
import { onMounted, ref, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router";
import LoadingLottie from "@/components/LoadingLottie.vue";

export default {
  components: {
    SearchInput,
    CardDevice,
    DeviceListSkeleton,
    AlertErrorComponent,
    NoData,
    LoadingLottie,
  },
  setup() {
    const deviceStore = useDeviceStore();
    const scroll = useScrollStore();
    const offset = ref(0);
    const { result } = storeToRefs(deviceStore);

    onMounted(() => {
      deviceStore.deviceGetAll({ offset: offset.value });
    });

    const viewDetail = (deviceid) => {
      router.push(`/device/${deviceid}`);
    };

    const loadMore = () => {
      offset.value++;

      deviceStore.deviceGetAll({
        offset: offset.value * 10,
        loadmore: true,
      });
    };

    watchEffect(() => {
      if (deviceStore.getQuery != "all") {
        offset.value = 0;
      }

      if (scroll.getBottom) {
        deviceStore.$patch((state) => {
          if (
            state.result.data?.length &&
            !state.result.loading &&
            state.result.data?.length < state.result.count
          ) {
            loadMore();
          }
        });
      }
    });

    return {
      result,
      viewDetail,
    };
  },
};
</script>
