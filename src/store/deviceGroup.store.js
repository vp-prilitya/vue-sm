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
    async groupDeviceGetAll(
      limit = 10,
      offset = 0,
      order = "devicegroupname",
      orderType = "desc"
    ) {
      this.result = { loading: true };
      const params = {
        limit: limit,
        offset: offset,
        order: order,
        orderType: orderType,
      };
      try {
        const data = await debouncedFetch("devicegroup", params);

        this.result = { ...data.data };
      } catch (error) {
        this.result = { error };
      }
    },
  },
});
