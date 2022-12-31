<template>
  <div class="mt-5">
    <div
      v-if="result.data?.length"
      class="overflow-x-auto relative shadow-md rounded-lg"
    >
      <table class="w-full text-sm text-left text-gray-500">
        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-100"
            v-for="item in result.data"
            :key="item.displaylogid"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium inline-flex items-center text-gray-900 whitespace-nowrap space-x-2"
            >
              <div class="bg-blueSide rounded-full p-2">
                <IconDevice size="w-5 h-5" />
              </div>
              <div class="flex-1">
                <p class="text-md">{{ item.deviceid }}</p>
                <p class="text-[0.7rem] text-gray-500">KRL-JR105</p>
              </div>
            </th>
            <td class="py-4">
              <div class="flex space-x-2 items-center">
                <svg
                  class="w-6 h-6 mr-1"
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
                {{ item.mediaName }}
              </div>
            </td>
            <td class="py-4 px-6">
              <div class="inline-flex items-center">
                <svg
                  class="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                {{ station(item.refid) }}
              </div>
            </td>
            <td v-if="!open" class="py-4 px-6">
              {{ item.latitude }}, {{ item.longitude }}
            </td>
            <td class="py-4 px-6">
              <div class="inline-flex items-center">
                <svg
                  class="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {{ date(item.displaydate) }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <LoadingLottie v-if="result.loading" />
    <div v-if="result.data?.length == 0" class="flex justify-center p-10">
      <NoData size="w-7/12" />
    </div>
    <AlertErrorComponent
      v-if="result.error"
      :message="result.error.response.data.message"
    />
  </div>
</template>

<script>
import IconDevice from "@/components/icons/IconDevice.vue";
import { onMounted, ref, watchEffect } from "@vue/runtime-core";
import { useDisplayLogStore, useScrollStore } from "@/store";
import { storeToRefs } from "pinia";
import LoadingLottie from "@/components/LoadingLottie.vue";
import NoData from "@/components/NoData.vue";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";
import moment from "moment";

export default {
  components: {
    IconDevice,
    LoadingLottie,
    NoData,
    AlertErrorComponent,
  },
  props: {
    open: Boolean,
  },
  setup() {
    const displayLogStore = useDisplayLogStore();
    const scroll = useScrollStore();
    const { result } = storeToRefs(displayLogStore);
    const offset = ref(0);

    onMounted(() => {
      displayLogStore.getAll({ offset: offset.value });
    });

    const loadMore = () => {
      offset.value++;

      displayLogStore.getAll({
        offset: offset.value,
        loadmore: true,
      });
    };

    watchEffect(() => {
      if (scroll.getBottom) {
        displayLogStore.$patch((state) => {
          if (
            state.result.data?.length &&
            !state.result.loading &&
            state.result.data?.length < state.result.count
          ) {
            loadMore();
            // console.log("getdata");
          }
        });
      }
    });

    const date = (date) => {
      return moment(date).format("DD MMM, HH:mm:ss");
    };

    const station = (value) => {
      const data = value.split("|");
      return data[1];
    };

    return {
      result,
      date,
      station,
    };
  },
};
</script>

<style lang="scss" scoped></style>
