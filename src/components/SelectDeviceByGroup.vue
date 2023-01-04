<template>
  <SelectSearchWithLabel
    :label="'Device Id'"
    :data="dataByGroup.data?.length ? dataByGroup.data : []"
    :optionsValue="'deviceid'"
    :optionsKey="'deviceid'"
    v-model:formControlName="formName"
    placeholder="Select device"
    :theme="theme"
    :loading="dataByGroup.loading ? true : false"
    :labelColor="labelColor"
    @onSelectChange="changeData"
  />
</template>

<script>
import { useDeviceStore } from "@/store";
import SelectSearchWithLabel from "./SelectSearchWithLabel.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

export default {
  components: { SelectSearchWithLabel },
  props: {
    formControlName: [String, Number],
    theme: String,
    labelColor: String,
  },
  setup(props, { emit }) {
    const deviceStore = useDeviceStore();
    const { dataByGroup } = storeToRefs(deviceStore);

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

    return {
      dataByGroup,
      formName,
      changeData,
    };
  },
};
</script>
