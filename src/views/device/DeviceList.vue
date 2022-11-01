<template>
  <div class="space-y-6">
    <SearchInput />
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
      <CardDevice v-for="index in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import CardDevice from "@/components/CardDevice.vue";

export default {
  components: {
    SearchInput,
    CardDevice,
  },
  setup() {
    return {};
  },
};
</script>
