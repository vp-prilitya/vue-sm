<template>
  <div class="flex w-full">
    <div class="main">
      <header-title title="Display Log"> </header-title>
      <main-content>
        <div class="flex justify-between items-center">
          <div>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >Default</span
            >
            <span
              class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >Dark</span
            >
            <span
              class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >Red</span
            >
            <span
              class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
              >Green</span
            >
            <span
              class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >Yellow</span
            >
            <span
              class="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"
              >Indigo</span
            >
            <span
              class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
              >Purple</span
            >
            <span
              class="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900"
              >Pink</span
            >
          </div>
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
          <SelectSearch
            :data="searchResults"
            :optionsValue="'name'"
            :optionsKey="'id'"
            v-model:formControlName="valueSearch"
          />
        </div>
        <div class="overflow-x-auto relative shadow-md rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr class="bg-white border-b" v-for="index in 10" :key="index">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium inline-flex items-center text-gray-900 whitespace-nowrap space-x-2"
                >
                  <div class="bg-blueSide rounded-full p-2">
                    <IconDevice size="w-5 h-5" />
                  </div>
                  <div class="flex-1">
                    <p class="text-md">GA-A1</p>
                    <p class="text-[0.7rem] text-gray-500">KRL-JR105</p>
                  </div>
                </th>
                <td class="py-4 px-6">
                  <div class="flex space-x-2">
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
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      ></path>
                    </svg>
                    COM-Aqua General
                  </div>
                </td>
                <td class="py-4 px-6">PASARMINGGU</td>
                <td class="py-4 px-6">22 Sep, 14:07:44</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="py-10 flex justify-end">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
              <li>
                <a
                  href="#"
                  class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >Previous</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </main-content>
    </div>
    <DislogFilter />
  </div>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import IconDevice from "@/components/icons/IconDevice.vue";
import SelectSearch from "@/components/SelectSearch.vue";
import DislogFilter from "./DislogFilter.vue";
import { useSidebarStore } from "@/store";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  components: {
    MainContent,
    HeaderTitle,
    IconDevice,
    ButtonComponent,
    DislogFilter,
    SelectSearch,
  },
  setup() {
    const searchResults = [
      {
        id: 1,
        name: "select 1",
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
    const sibedar = useSidebarStore();
    const valueSearch = ref("");

    onMounted(() => {
      sibedar.$patch((state) => {
        state.open = false;
      });
    });

    return {
      searchResults,
      valueSearch,
    };
  },
};
</script>
