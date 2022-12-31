import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";

let debouncedFetch = debounce(getData, 500);

export const useDeviceGroupStore = defineStore({
  id: "device-group",
  state: () => ({
    result: {
      count: 0,
    },
  }),
  getters: {
    getData(state) {
      return state.result;
    },
  },
  actions: {
    async groupDeviceGetAll(params) {
      this.result = { loading: true };
      const dataParams = {
        limit: params?.limit || 10,
        offset: params?.offset || 0,
        order: params?.order || "devicegroupname",
        orderType: params?.orderType || "desc",
      };

      try {
        const data = await debouncedFetch("devicegroup", dataParams);

        this.result = { ...data.data };
      } catch (error) {
        this.result = { error };
      }
    },
  },
});
