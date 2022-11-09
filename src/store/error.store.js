import { defineStore } from "pinia";

export const useErrorStore = defineStore({
  id: "error",
  state: () => ({
    open: false,
    message: "Oops! Something went wrong",
    retry: true,
  }),
});
