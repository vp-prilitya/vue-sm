<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-xl text-primary font-bold">Device Group</h1>
      <div class="flex space-x-3">
        <icon-search />
        <icon-file-add />
      </div>
    </div>
    <div class="py-5 space-y-5">
      <CardDeviceGroup
        title="All Device"
        count="40"
        description="Show All Device"
        :updateDetail="false"
      />
      <CardDeviceGroup
        v-for="index in 3"
        :key="index"
        title="KRL-JR105"
        count="2"
        description="Device group untuk KRL-JR105"
      />
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
