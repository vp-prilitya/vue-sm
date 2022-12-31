<template>
  <SelectSearchLabel
    :label="'Station'"
    :data="dataFetch"
    :optionsValue="'station_name'"
    :optionsKey="'station_id'"
    v-model:formControlName="formName"
    placeholder="Select station"
    :labelColor="labelColor"
    :loading="loading"
    :theme="theme"
    @onSelectChange="changeData"
  />
</template>

<script>
import SelectSearchLabel from "@/components/SelectSearchWithLabel.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { getData } from "@/utils/fetch";

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
    const dataFetch = ref([]);
    const loading = ref(false);

    const formName = computed({
      get() {
        return props.formControlName;
      },
      set(value) {
        emit("update:formControlName", value);
      },
    });

    const fetchData = async () => {
      loading.value = true;
      try {
        const result = await getData("tracking/station");

        dataFetch.value = result.data.data;
        loading.value = false;
      } catch (error) {
        console.log(error);
        loading.value = false;
      }
    };

    const changeData = (value) => {
      emit("onSelectChange", value);
    };

    onMounted(() => {
      fetchData();
    });

    return {
      dataFetch,
      loading,
      formName,
      changeData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
