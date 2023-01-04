<template>
  <sidebar-right>
    <div class="overflow-y-auto h-full pb-24">
      <div class="px-8">
        <TextIconGroup :text="'Filter'" :textWhite="true" :textSize="'text-md'">
          <IconFilter />
        </TextIconGroup>
      </div>
      <div class="pt-5 px-8">
        <div>
          <DatePickerCom
            v-model:formControlName="filter.date"
            theme="blue"
            label="Date"
            labelColor="text-white"
          />

          <SelectDeviceGroup
            v-model:formControlName="filter.deviceGroupId"
            labelColor="text-white"
            theme="blue"
            @onSelectChange="change"
          />

          <SelectDeviceByGroup
            v-model:formControlName="filter.deviceId"
            labelColor="text-white"
            theme="blue"
          />

          <SelectMediaType
            v-model:formControlName="filter.mediatype"
            theme="blue"
            labelColor="text-white"
            @onSelectChange="mediaTypeChange"
          />

          <SelectMedia
            v-model:formControlName="filter.media"
            theme="blue"
            labelColor="text-white"
          />

          <SelectStation
            v-model:formControlName="filter.station"
            theme="blue"
            labelColor="text-white"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-7 w-full bg-blueSide px-8 pb-3 border-t border-inputBlue"
    >
      <ButtonComponent
        @click="onClickApply"
        vClass="btn-amber py-2 w-full mt-3"
        :loading="result.loading"
        >Apply</ButtonComponent
      >
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TextIconGroup from "@/components/TextIconGroup.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { reactive, ref } from "@vue/reactivity";
import { useDeviceStore, useDisplayLogStore, useMediaStore } from "@/store";
import { storeToRefs } from "pinia";
import SelectMediaType from "@/components/SelectMediaType.vue";
import SelectMedia from "@/components/SelectMedia.vue";
import SelectStation from "@/components/SelectStation.vue";
import DatePickerCom from "@/components/DatePickerCom.vue";
import { onMounted } from "vue";
import IconFilter from "@/components/icons/IconFilter.vue";
import moment from "moment";
import SelectDeviceByGroup from "@/components/SelectDeviceByGroup.vue";
import SelectDeviceGroup from "@/components/SelectDeviceGroup.vue";

export default {
  components: {
    SidebarRight,
    TextIconGroup,
    ButtonComponent,
    SelectMediaType,
    SelectMedia,
    SelectStation,
    DatePickerCom,
    IconFilter,
    SelectDeviceByGroup,
    SelectDeviceGroup,
  },
  setup() {
    const deviceStore = useDeviceStore();
    const mediaStore = useMediaStore();
    const dislogStore = useDisplayLogStore();
    const dateNow = new Date();
    const { result } = storeToRefs(dislogStore);

    const valueSearch = ref("");
    const filter = reactive({
      date: [],
      deviceGroupId: "",
      deviceId: "",
      mediatype: 0,
      station: "",
      media: "",
    });

    onMounted(() => {
      filter.date = [dateNow, dateNow];
    });

    const change = (value) => {
      filter.deviceId = "";
      if (value != "") {
        deviceStore.deviceByGroup(value);
      } else {
        deviceStore.$reset();
      }
    };

    const mediaTypeChange = (value) => {
      filter.media = "";
      mediaStore.getAll({ limit: 9999, type: value });
    };

    const onClickApply = () => {
      let dataParams = {};

      if (filter.deviceGroupId != "") {
        dataParams = { ...dataParams, devicegroup: filter.deviceGroupId };
      }

      if (filter.deviceId != "") {
        dataParams = { ...dataParams, deviceid: filter.deviceId };
      }

      if (filter.mediatype != "") {
        dataParams = { ...dataParams, mediatype: filter.mediatype };
      }

      if (filter.media != "") {
        dataParams = { ...dataParams, mediaid: filter.media };
      }

      if (filter.station != "") {
        dataParams = { ...dataParams, station: filter.station };
      }

      dataParams = {
        ...dataParams,
        datestart: moment(filter.date[0]).format("YYYY-MM-DD"),
        dateend: moment(filter.date[1]).format("YYYY-MM-DD"),
      };

      dislogStore.dateFilter = `${moment(filter.date[0]).format(
        "DD MMM YYYY"
      )} - ${moment(filter.date[1]).format("DD MMM YYYY")}`;

      dislogStore.getAll(dataParams);
    };

    return {
      result,
      valueSearch,
      filter,
      change,
      onClickApply,
      mediaTypeChange,
    };
  },
};
</script>
