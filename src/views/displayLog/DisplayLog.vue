<template>
  <div class="main">
    <header-title title="Display Log">
      <IconDisplayLog />
    </header-title>
    <main-content>
      <div class="flex justify-between items-center">
        <div>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >{{ dislogStore.dateFilter }}</span
          >
        </div>
        <div class="space-x-2">
          <ButtonComponent
            :vClass="'text-xs text-primary bg-gray-300 [&>svg]:mr-0 focus:ring-0 px-3 py-2 '"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Export Excel
          </ButtonComponent>
          <ButtonComponent
            v-if="!open"
            @click="openSidebar"
            :vClass="'text-xs text-primary bg-gray-300 [&>svg]:mr-0 focus:ring-0 px-3 py-2 '"
          >
            <svg
              class="w-5 h-5"
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
            Filter
          </ButtonComponent>
        </div>
      </div>
      <TableDisplayLog :open="open" />
    </main-content>
  </div>
  <DislogFilter />
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import DislogFilter from "./DislogFilter.vue";
import { useDisplayLogStore, useSidebarStore } from "@/store";
import { onMounted, ref } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import TableDisplayLog from "./TableDisplayLog.vue";
import IconDisplayLog from "@/components/icons/IconDisplayLog.vue";

export default {
  components: {
    MainContent,
    HeaderTitle,
    ButtonComponent,
    DislogFilter,
    TableDisplayLog,
    IconDisplayLog,
  },
  setup() {
    const sibedar = useSidebarStore();
    const dislogStore = useDisplayLogStore();
    const valueSearch = ref("");
    const { open } = storeToRefs(sibedar);

    const openSidebar = () => {
      sibedar.$patch((state) => {
        state.open = true;
      });
    };
    onMounted(() => {
      openSidebar();
    });

    return {
      dislogStore,
      valueSearch,
      open,
      openSidebar,
    };
  },
};
</script>
