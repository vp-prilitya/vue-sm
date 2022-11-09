import { defineStore } from "pinia";
import router from "@/router";
import { useAlertStore, useErrorStore } from "@/store";
import axios from "axios";

const baseUrl = process.env.VUE_APP_API_URL;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("auth")),
    returnUrl: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const user = await axios.post(baseUrl + "auth/login", {
          email: email,
          password: password,
        });
        const data = {
          currUser: user.data.currUser,
          token: user.data.token,
        };
        this.user = data;

        localStorage.setItem("auth", JSON.stringify(data));

        router.push(this.returnUrl || "/");
      } catch (error) {
        if (error.response.data.message) {
          const alertStore = useAlertStore();
          alertStore.error(error.response.data.message);
        } else {
          this.result = {};
          const errorMessage = useErrorStore();
          errorMessage.open = true;
        }
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("auth");
      router.push("/login");
    },
  },
});
