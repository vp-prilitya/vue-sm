<template>
  <aside
    class="fixed inset-y-0 z-10 flex flex-shrink-0 bg-primary border-r md:static focus:outline-none hidden md:block"
  >
    <nav class="flex flex-col flex-shrink-0 h-full px-4 py-4 border-r">
      <div class="flex flex-col items-center justify-center flex-1 space-y-6">
        <navigation-link routeLink="/playlist">
          <IconPlaylist />
        </navigation-link>
        <navigation-link routeLink="/device">
          <IconDevice />
        </navigation-link>
        <a
          href="#"
          class="p-2 text-white transition-colors duration-200 hover:text-amber focus:outline-none focus:bg-indigo-100 focus:ring-indigo-800"
        >
          <span class="sr-only">Users</span>
          <svg
            class="w-7 h-7 fill-white"
            viewBox="0 0 51 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8636 9.45C20.8636 5.175 18.0818 1.35 13.9091 0V8.325H6.95455V0C2.78182 1.35 0 5.175 0 9.45C0 13.725 2.78182 17.55 6.95455 18.9V43.65C6.95455 44.55 7.41818 45 8.11364 45H12.75C13.4455 45 13.9091 44.55 13.9091 43.875V19.125C18.0818 17.775 20.8636 13.95 20.8636 9.45ZM34.7727 13.5C25.7318 13.725 18.5455 20.7 18.5455 29.25C18.5455 38.025 25.7318 45 34.7727 45C43.8136 45 51 38.025 51 29.25C51 20.475 43.8136 13.5 34.7727 13.5ZM34.7727 40.5C28.2818 40.5 23.1818 35.55 23.1818 29.25C23.1818 22.95 28.2818 18 34.7727 18C41.2636 18 46.3636 22.95 46.3636 29.25C46.3636 35.55 41.2636 40.5 34.7727 40.5ZM32.4545 20.25V31.5L40.8 36.45L42.6545 33.75L35.9318 29.925V20.25H32.4545Z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="p-2 text-white transition-colors duration-200 hover:text-amber focus:outline-none focus:bg-indigo-100 focus:ring-indigo-800"
        >
          <span class="sr-only">Another Link</span>
          <svg
            class="w-7 h-7 fill-white"
            viewBox="0 0 39 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.375 5.04167V35.9583H4.625V5.04167H34.375ZM38.625 0.625H0.375V40.375H38.625V0.625ZM30.125 31.5417H8.875V29.3333H30.125V31.5417ZM30.125 27.125H8.875V24.9167H30.125V27.125ZM30.125 20.5H8.875V9.45833H30.125V20.5Z"
            />
          </svg>
        </a>
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

export default {
  name: "NavigationWeb",
  components: {
    NavigationLink,
    IconPlaylist,
    IconDevice,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
};
</script>
