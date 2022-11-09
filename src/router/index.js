import { createRouter, createWebHistory } from "vue-router";
import PlaylistView from "../views/playlist/PlaylistView.vue";
import DeviceView from "../views/device/DeviceView.vue";
import AppLayoutAdmin from "../layouts/AppLayoutAdmin.vue";
import LoginView from "../views/login/LoginView.vue";
import { useAuthStore, useAlertStore } from "@/store";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "AppLayout",
    component: AppLayoutAdmin,
    redirect: "/playlist",
    children: [
      {
        path: "/playlist",
        name: "playlist",
        component: PlaylistView,
      },
      {
        path: "/device",
        name: "device",
        component: DeviceView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const alertStore = useAlertStore();
  alertStore.clear();

  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return "/login";
  } else if (to.name === "login" && authStore.user) {
    return from.fullPath;
  }
});

export default router;
