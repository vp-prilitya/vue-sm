import { getData } from "@/utils/fetch";
import { defineStore } from "pinia";
import debounce from "debounce-promise";

let debouncedFetch = debounce(getData, 500);

export const usePlaylistDetailStore = defineStore({
  id: "playlist-detail",
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
    async playlistDetailGetAll(params) {
      this.result = { loading: true };

      const Dataparams = {
        limit: params?.limit || 10,
        offset: params?.offset || 0,
        order: params?.order || "displayorder",
        ordertype: params?.orderType || "asc",
        status: params?.isactive || 1,
        playlistid: params?.playlistid,
      };

      try {
        const data = await debouncedFetch("playlistdetail", Dataparams);

        this.result = { ...data.data };
      } catch (error) {
        this.result = { error };
      }
    },
  },
});
