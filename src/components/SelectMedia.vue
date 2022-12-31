<template>
  <SelectSearchLabel
    :label="'Media'"
    :data="result.data?.length ? result.data : []"
    :optionsValue="'name'"
    :optionsKey="'mediaid'"
    v-model:formControlName="formName"
    placeholder="Select media"
    :labelColor="labelColor"
    :loading="result.loading ? true : false"
    @onSelectChange="changeData"
    :theme="theme"
  />
</template>

<script>
import SelectSearchLabel from "@/components/SelectSearchWithLabel.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useMediaStore } from "@/store";
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
    const mediaStore = useMediaStore();
    const { result } = storeToRefs(mediaStore);

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
      mediaStore.getAll({ limit: "999" });
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
