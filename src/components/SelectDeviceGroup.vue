<template>
  <SelectSearchLabel
    :label="'Device group'"
    :data="result.data?.length ? result.data : []"
    :optionsValue="'devicegroupname'"
    :optionsKey="'device_group_id'"
    v-model:formControlName="formName"
    placeholder="Select device group"
    :labelColor="labelColor"
    :loading="result.loading ? true : false"
    @onSelectChange="changeData"
    :theme="theme"
  />
</template>

<script>
import SelectSearchLabel from "@/components/SelectSearchWithLabel.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useDeviceGroupStore } from "@/store";
import { storeToRefs } from "pinia";

export default {
  components: {
    SelectSearchLabel,
  },
  props: {
    formControlName: [String, Number],
    theme: String,
    labelColor: String,
  },
  setup(props, { emit }) {
    const deviceGroupStore = useDeviceGroupStore();
    const { result } = storeToRefs(deviceGroupStore);

    const formName = computed({
      get() {
        return props.formControlName;
      },
      set(value) {
        emit("update:formControlName", value);
      },
    });

    const changeData = (value) => {
      emit("onSelectChange", value);
    };

    onMounted(() => {
      deviceGroupStore.groupDeviceGetAll({ limit: "999" });
    });

    return {
      result,
      formName,
      changeData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
