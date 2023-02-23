import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    open: false,
    id: 0,
  }),
  getters: {
    getOpen(state) {
      return state.open;
    },
  },
  actions: {
    showModal(id = 0) {
      this.id = id;
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
  },
});
