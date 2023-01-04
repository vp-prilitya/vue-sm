<template>
  <aside
    class="fixed inset-y-0 z-10 flex-shrink-0 bg-primary border-r md:static focus:outline-none hidden md:block"
  >
    <nav class="flex flex-col flex-shrink-0 h-full px-4 py-4 border-r">
      <div class="flex flex-col items-center justify-center flex-1 space-y-6">
        <navigation-link routeLink="/playlist">
          <IconPlaylist />
        </navigation-link>
        <navigation-link routeLink="/device">
          <IconDevice />
        </navigation-link>
        <navigation-link routeLink="/display-log">
          <IconDisplayLog />
        </navigation-link>
        <navigation-link routeLink="/slot">
          <IconSlot />
        </navigation-link>
      </div>
      <div class="flex items-center justify-center flex-shrink-0">
        <a
          href="#"
          @click="authStore.logout()"
          class="p-2 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100 focus:ring-indigo-800"
        >
          <span class="sr-only">Logout</span>
          <svg
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </a>
      </div>
    </nav>
  </aside>
</template>

<script>
import NavigationLink from "@/components/NavigationLink.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";
import IconDevice from "@/components/icons/IconDevice.vue";
import { useAuthStore } from "@/store";
import IconDisplayLog from "./icons/IconDisplayLog.vue";
import IconSlot from "./icons/IconSlot.vue";

export default {
  name: "NavigationWeb",
  components: {
    NavigationLink,
    IconPlaylist,
    IconDevice,
    IconDisplayLog,
    IconSlot,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
};
</script>
