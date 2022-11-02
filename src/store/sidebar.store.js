import { defineStore } from "pinia";

export const useSidebarStore = defineStore({
  id: "sidebar",
  state: () => ({ open: false }),
});
