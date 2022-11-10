import { defineStore } from "pinia";

export const useSidebarStore = defineStore({
  id: "sidebar",
  state: () => ({ open: false, id: 0, data: {} }),
  getters: {
    getData(state) {
      return state.data;
    },
  },
});
