import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    open: false,
  }),
  getters: {
    getOpen(state) {
      return state.open;
    },
  },
  actions: {
    showModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
  },
});
