import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";
import moment from "moment";
import { useScrollStore } from "./scroll.store";

let debouncedFetch = debounce(getData, 500);

export const useDisplayLogStore = defineStore({
  id: "displaylog",
  state: () => ({
    result: {
      count: 0,
    },
  }),
  getters: {
    getDataResult(state) {
      return state.result.data;
    },
  },
  actions: {
    async getAll(params) {
      if (!params.loadmore) {
        this.result = { loading: true };
      } else {
        this.result = { loading: true, ...this.result };
      }

      const dateNow = moment(new Date()).format("YYYY-MM-DD");

      const Dataparams = {
        limit: params?.limit || 20,
        offset: params?.offset || 0,
        deviceid: params?.deviceid,
        mediaid: params?.mediaid,
        devicegroup: params?.devicegroup,
        mediatype: params?.mediatype,
        datestart: params?.datestart || dateNow,
        dateend: params?.dateend || dateNow,
        q: params?.q,
      };

      try {
        const data = await debouncedFetch("displaylog", Dataparams);

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

        this.result = { ...data.data };
      } catch (error) {
        if (!params.loadmore) {
          this.result = { error };
        }
      }
    },
  },
});
