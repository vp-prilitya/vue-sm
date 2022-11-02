<template>
  <div class="flex flex-1 h-screen overflow-y-scroll">
    <NavigationWeb />
    <div class="flex flex-1 h-screen overflow-y-scroll">
      <main class="flex-1">
        <header-navigation />
        <div class="flex-col px-12">
          <router-view />
        </div>
      </main>
      <div
        class="flex-none ease-in-out duration-500 h-full w-[341px] bg-blueSide"
        :class="{ hidden: !open, block: open }"
      ></div>
    </div>
  </div>
</template>

<script>
import NavigationWeb from "@/components/NavigationWeb.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import { computed } from "vue";
import { useSidebarStore } from "@/store";

export default {
  components: {
    NavigationWeb,
    HeaderNavigation,
  },
  setup() {
    const sidebar = useSidebarStore();
    const open = computed(() => sidebar.open);

    return {
      open,
    };
  },
};
</script>
