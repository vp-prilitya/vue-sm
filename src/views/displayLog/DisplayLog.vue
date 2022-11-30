<template>
  <div class="flex w-full">
    <div class="main">
      <header-title title="Display Log">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      </header-title>
      <main-content>
        <div class="flex justify-between items-center">
          <div>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >30 Nov 2022</span
            >
            <span
              class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >KRL-JR105</span
            >
            <span
              class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >GA-A1</span
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
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import DislogFilter from "./DislogFilter.vue";
import { useSidebarStore } from "@/store";
import { onMounted, ref } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import TableDisplayLog from "./TableDisplayLog.vue";

export default {
  components: {
    MainContent,
    HeaderTitle,
    ButtonComponent,
    DislogFilter,
    TableDisplayLog,
  },
  setup() {
    const sibedar = useSidebarStore();
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
      valueSearch,
      open,
      openSidebar,
    };
  },
};
</script>
