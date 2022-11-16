import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";

let debouncedFetch = debounce(getData, 500);

export const usePlaylistStore = defineStore({
  id: "playlist",
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
    async playlistGetAll(params) {
      if (!params.loadmore) {
        this.result = { loading: true };
      } else {
        this.result = { loading: true, ...this.result };
      }

      const Dataparams = {
        limit: params?.limit || 21,
        offset: params?.offset || 0,
        order: params?.order || "playlistid",
        ordertype: params?.orderType || "desc",
        status: params?.isactive || 1,
        q: params?.q,
      };

      try {
        const data = await debouncedFetch("playlist", Dataparams);

        if (!params.loadmore) {
          this.result = { ...data.data };
        } else {
          // this.result = {
          //   ...data.data,
          //   data: this.result.data.push(data.data.data),
          // };
          console.log(this.result.data.push([]));
        }
      } catch (error) {
        this.result = { ...this.result, error };
      }
    },
  },
});
