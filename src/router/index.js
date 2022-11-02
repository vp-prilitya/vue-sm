import { createRouter, createWebHistory } from "vue-router";
import PlaylistView from "../views/playlist/PlaylistView.vue";
import DeviceView from "../views/device/DeviceView.vue";
import AppLayoutAdmin from "../layouts/AppLayoutAdmin.vue";
import LoginView from "../views/login/LoginView.vue";

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

export default router;
