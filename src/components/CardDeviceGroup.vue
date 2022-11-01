<template>
  <card-component>
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <IconGroupDevice />
        <h1 class="text-xl text-primary font-bold">{{ title }}</h1>
      </div>
      <h1 class="text-xl text-primary font-bold">{{ count }}</h1>
    </div>
    <div class="flex justify-between pt-6">
      <h3 class="text-sm text-primary text-gray-400">{{ description }}</h3>
      <div v-if="updateDetail" class="flex space-x-3">
        <icon-edit />
        <icon-detail />
      </div>
    </div>
  </card-component>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import IconGroupDevice from "./icons/IconGroupDevice.vue";
import IconEdit from "./icons/IconEdit.vue";
import IconDetail from "./icons/IconDetail.vue";

export default {
  components: {
    CardComponent,
    IconGroupDevice,
    IconEdit,
    IconDetail,
  },
  props: {
    updateDetail: {
      type: Boolean,
      default: true,
    },
    title: String,
    count: String,
    description: String,
  },
};
</script>
