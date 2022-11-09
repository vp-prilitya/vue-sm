<template>
  <card-component
    :addClass="[{ 'hover:bg-gray-200': !selected }, 'cursor-pointer']"
    :selected="selected"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <IconGroupDevice :color="selected ? 'fill-white' : 'fill-primary'" />
        <h1
          class="text-xl font-bold"
          :class="selected ? 'text-white' : 'text-primary'"
        >
          {{ title }}
        </h1>
      </div>
      <h1
        class="text-xl -bold"
        :class="selected ? 'text-white' : 'text-primary'"
      >
        {{ count }}
      </h1>
    </div>
    <div class="flex justify-between pt-6">
      <h3 class="text-sm text-primary text-gray-400">{{ description }}</h3>
      <div v-if="updateDetail" class="flex space-x-3">
        <icon-edit :color="selected ? 'fill-white' : 'fill-primary'" />
        <icon-detail :color="selected ? 'fill-white' : 'fill-primary'" />
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
    selected: {
      type: Boolean,
      default: false,
    },
    title: String,
    count: Number,
    description: String,
  },
};
</script>
