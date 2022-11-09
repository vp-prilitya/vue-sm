<template>
  <div>
    <div class="flex justify-between items-center md:pr-8">
      <h1 class="text-xl text-primary font-bold">Device Group</h1>
      <div class="flex space-x-3">
        <icon-search />
        <icon-file-add />
      </div>
    </div>
    <div class="overflow-y-auto h-128">
      <div class="py-5 md:pr-8">
        <div v-if="result.data?.length" class="space-y-5">
          <CardDeviceGroup
            title="All Device"
            :selected="selected == 'all'"
            @click="onSelect('all')"
            :count="result.count"
            description="Show All Device"
            :updateDetail="false"
          />

          <CardDeviceGroup
            :selected="selected == db.devicegroupname"
            @click="onSelect(db.devicegroupname)"
            v-for="db in result.data"
            :key="db.device_group_id"
            :title="db.devicegroupname"
            :count="db.totaldevice"
            :description="db.description"
          />
        </div>

        <div v-if="result.data?.length == 0">
          <no-data />
        </div>

        <div v-if="result.loading" class="space-y-5">
          <device-group-list-skeleton />
        </div>

        <alert-error-component
          v-if="result.error"
          :message="result.error.response.data.message"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconFileAdd from "@/components/icons/IconFileAdd.vue";
import CardDeviceGroup from "@/components/CardDeviceGroup.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
import NoData from "@/components/NoData.vue";
import DeviceGroupListSkeleton from "./DeviceGroupListSkeleton.vue";
import { useDeviceGroupStore, useDeviceStore } from "@/store";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    IconSearch,
    IconFileAdd,
    CardDeviceGroup,
    DeviceGroupListSkeleton,
    AlertErrorComponent,
    NoData,
  },
  setup() {
    const deviceGroupStore = useDeviceGroupStore();
    const deviceStore = useDeviceStore();
    const { result } = storeToRefs(deviceGroupStore);
    const selected = ref("all");

    const onSelect = (value) => {
      selected.value = value;

      deviceStore.deviceGetAll({ q: value == "all" ? "" : value });
    };

    onMounted(() => deviceGroupStore.groupDeviceGetAll());

    return {
      result,
      selected,
      onSelect,
    };
  },
};
</script>
