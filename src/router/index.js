import { createRouter, createWebHistory } from "vue-router";
import AppLayoutAdmin from "../layouts/AppLayoutAdmin.vue";
import LoginView from "../views/login/LoginView.vue";
import PlaylistView from "../views/playlist/PlaylistView.vue";
import DeviceView from "../views/device/DeviceView.vue";
import DeviceDetail from "../views/deviceDetail/DeviceDetail.vue";
import SlotView from "../views/slot/SlotView.vue";
import SlotArrival from "../views/slot/SlotArrival.vue";
import SlotDeparture from "../views/slot/SlotDeparture.vue";
import SlotInformationSvg from "@/components/SlotInformationSvg.vue";
import DisplayLog from "../views/displayLog/DisplayLog.vue";
import Segment from "../views/segment/SegmentView.vue";
import SegmentDetail from "../views/segment-detail/SegmentDetailView.vue";

import {
  useAuthStore,
  useAlertStore,
  useSidebarStore,
  useScrollStore,
} from "@/store";

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
        children: [
          {
            path: "",
            name: "device",
            component: DeviceView,
          },
          {
            path: ":id",
            name: "device-detail",
            component: DeviceDetail,
          },
        ],
      },
      {
        path: "/slot",
        name: "slot",
        component: SlotView,
        redirect: "/slot",
        children: [
          {
            path: "",
            name: "default",
            component: SlotInformationSvg,
          },
          {
            path: "arrival",
            name: "slot-arrival",
            component: SlotArrival,
          },
          {
            path: "departure",
            name: "slot-departure",
            component: SlotDeparture,
          },
        ],
      },
      {
        path: "/display-log",
        name: "display-log",
        component: DisplayLog,
      },
      {
        path: "/segment",
        name: "segement",
        children: [
          {
            path: "",
            name: "segment",
            component: Segment,
          },
          {
            path: ":id",
            name: "segment-detail",
            component: SegmentDetail,
          },
        ],
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
  const sidebarStore = useSidebarStore();
  const scroll = useScrollStore();

  alertStore.clear();
  sidebarStore.$reset();
  scroll.$reset();

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
