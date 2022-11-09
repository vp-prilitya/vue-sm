import axios from "axios";
import { useAuthStore, useErrorStore } from "@/store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    if (authStore.user.token) {
      config.headers["Authorization"] = `Bearer ${authStore.user.token} `;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.status == 401 || err.response.status == 403) {
      const authStore = useAuthStore();
      const errorStore = useErrorStore();

      errorStore.open = true;
      errorStore.message =
        "Unauthorized, or session expired. Please try logging in again.";
      errorStore.retry = false;
      authStore.logout();
    }
    if (
      err.response.status == 500 ||
      err.response.status == 501 ||
      err.response.status == 502
    ) {
      const errorStore = useErrorStore();

      errorStore.open = true;
    }

    return Promise.reject(err);
  }
);

export default instance;
