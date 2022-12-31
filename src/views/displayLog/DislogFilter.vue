<template>
  <sidebar-right>
    <div class="overflow-y-auto h-full pb-24">
      <div class="px-8">
        <TextIconGroup :text="'Filter'" :textWhite="true" :textSize="'text-md'">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
        </TextIconGroup>
      </div>
      <div class="pt-5 px-8">
        <div>
          <Datepicker
            v-model="date"
            :enable-time-picker="false"
            :format="format"
            calendar-class-name="p-3"
            input-class-name="input-blue"
            menu-class-name="sd"
            range
          />

          <SelectDeviceGroup
            :formControlName="filter.deviceGroupId"
            labelColor="text-white"
            theme="blue"
            @onSelectChange="change"
          />

          <SelectSearchLabel
            :label="'Device Id'"
            :data="dataByGroup.data?.length ? dataByGroup.data : []"
            :optionsValue="'deviceid'"
            :optionsKey="'deviceid'"
            v-model:formControlName="filter.deviceId"
            placeholder="Select device"
            theme="blue"
            :loading="dataByGroup.loading ? true : false"
            labelColor="text-white"
          />

          <SelectMediaType
            v-model:formControlName="filter.mediaType"
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
      <ButtonComponent @click="onClickApply" vClass="btn-amber py-2 w-full mt-3"
        >Apply</ButtonComponent
      >
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TextIconGroup from "@/components/TextIconGroup.vue";
import SelectSearchLabel from "@/components/SelectSearchWithLabel.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { reactive, ref } from "@vue/reactivity";
import { useDeviceStore, useMediaStore } from "@/store";
import { storeToRefs } from "pinia";
import SelectMediaType from "@/components/SelectMediaType.vue";
import SelectDeviceGroup from "@/components/SelectDeviceGroup.vue";
import SelectMedia from "@/components/SelectMedia.vue";
import SelectStation from "@/components/SelectStation.vue";
import Datepicker from "@vuepic/vue-datepicker";

export default {
  components: {
    SidebarRight,
    TextIconGroup,
    ButtonComponent,
    SelectSearchLabel,
    SelectMediaType,
    SelectDeviceGroup,
    SelectMedia,
    SelectStation,
    Datepicker,
  },
  setup() {
    const deviceStore = useDeviceStore();
    const mediaStore = useMediaStore();
    const { dataByGroup } = storeToRefs(deviceStore);
    const date = ref("");

    const searchResults = [
      {
        id: 1,
        name: "Select 1",
      },
      {
        id: 2,
        name: "select 2",
      },
      {
        id: 3,
        name: "select 3",
      },
      {
        id: 4,
        name: "select 4",
      },
      {
        id: 5,
        name: "select 5",
      },
      {
        id: 6,
        name: "select 6",
      },
      {
        id: 7,
        name: "select 7",
      },
      {
        id: 8,
        name: "select 8",
      },
    ];
    const valueSearch = ref("");
    const filter = reactive({
      deviceGroupId: "",
      deviceId: "",
      mediaType: "",
      station: "",
      media: "",
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
      filter.mediaType = "";
      mediaStore.getAll({ limit: 9999, type: value });
    };

    const onClickApply = () => {
      console.log(filter);
    };

    const format = (datePick) => {
      const date = datePick[0];
      const date2 = datePick[1];
      let value = "";

      if (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        value = value.concat(`${day}/${month}/${year}`);
      }

      if (date2) {
        const day2 = date2.getDate();
        const month2 = date2.getMonth() + 1;
        const year2 = date2.getFullYear();
        value = value.concat(` - ${day2}/${month2}/${year2}`);
      }

      return value;
    };

    return {
      searchResults,
      valueSearch,
      filter,
      change,
      format,
      date,
      dataByGroup,
      onClickApply,
      mediaTypeChange,
    };
  },
};
</script>
