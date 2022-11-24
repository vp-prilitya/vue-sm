import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";
import { useScrollStore } from "./scroll.store";

let debouncedFetch = debounce(getData, 0);

export const useDeviceStore = defineStore({
  id: "device",
  state: () => ({
    result: {
      count: 0,
    },
    q: "all",
  }),
  getters: {
    getData(state) {
      return state.result;
    },
    getQuery(state) {
      return state.q;
    },
  },
  actions: {
    async deviceGetAll(params) {
      if (!params.loadmore) {
        this.result = { loading: true };
      } else {
        this.result = { loading: true, ...this.result };
      }

      this.q = !params.q ? "all" : params?.q;

      const Dataparams = {
        limit: params?.limit || 10,
        offset: params?.offset || 0,
        order: params?.order || "deviceid",
        ordertype: params?.orderType || "desc",
        isactive: params?.isactive || 1,
        q: params?.q,
      };

      try {
        const data = await debouncedFetch("device", Dataparams);

        if (!params.loadmore) {
          this.result = { ...data.data };
        } else {
          this.result = {
            ...data.data,
            data: this.result.data,
          };

          const scroll = useScrollStore();
          scroll.bottom = false;

          this.result.data.push(...data.data.data);
        }
      } catch (error) {
        if (!params.loadmore) {
          this.result = { error };
        }
      }
    },
  },
});
