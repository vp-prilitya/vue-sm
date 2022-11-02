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
      <div class="py-5 space-y-5 md:pr-8">
        <CardDeviceGroup
          title="All Device"
          count="40"
          description="Show All Device"
          :updateDetail="false"
        />
        <CardDeviceGroup
          v-for="index in 10"
          :key="index"
          title="KRL-JR105"
          count="2"
          description="Device group untuk KRL-JR105"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconFileAdd from "@/components/icons/IconFileAdd.vue";
import CardDeviceGroup from "@/components/CardDeviceGroup.vue";

export default {
  components: {
    IconSearch,
    IconFileAdd,
    CardDeviceGroup,
  },
  setup() {
    return {};
  },
};
</script>
