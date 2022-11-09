import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";

let debouncedFetch = debounce(getData, 0);

export const useDeviceStore = defineStore({
  id: "device",
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
    async deviceGetAll(params) {
      this.result = { loading: true };

      const Dataparams = {
        limit: params?.limit || 10,
        offset: params?.offset || 0,
        order: params?.order || "deviceid",
        orderType: params?.orderType || "desc",
        isactive: params?.isactive || 1,
        q: params?.q,
      };

      try {
        const data = await debouncedFetch("device", Dataparams);

        this.result = { ...data.data };
      } catch (error) {
        this.result = { error };
      }
    },
  },
});
