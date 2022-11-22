import { defineStore } from "pinia";

export const useScrollStore = defineStore({
  id: "scroll",
  state: () => ({
    bottom: false,
  }),
  getters: {
    getBottom(state) {
      return state.bottom;
    },
  },
});
