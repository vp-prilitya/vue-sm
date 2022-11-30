<template>
  <sidebar-right>
    <div class="relative overflow-y-scroll h-full pb-24">
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
        <SelectSearchLabel
          :label="'Device group'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'Device Id'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'Media type'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'Station'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'Media'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'Start date'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
        <SelectSearchLabel
          :label="'End date'"
          :data="searchResults"
          :optionsValue="'name'"
          :optionsKey="'id'"
          v-model:formControlName="valueSearch"
          placeholder="Select items"
          labelColor="text-white"
        />
      </div>
    </div>
    <div
      class="absolute bottom-7 w-full bg-blueSide px-8 pb-3 border-t border-inputBlue"
    >
      <ButtonComponent vClass="btn-amber py-2 w-full mt-3"
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
import { ref } from "@vue/reactivity";

export default {
  components: {
    SidebarRight,
    TextIconGroup,
    ButtonComponent,
    SelectSearchLabel,
  },
  setup() {
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
    return {
      searchResults,
      valueSearch,
    };
  },
};
</script>

<style lang="scss" scoped></style>
