<template>
  <div class="flex flex-1 h-screen">
    <NavigationWeb />
    <div @scroll="scrolling" class="flex flex-1 h-screen overflow-auto">
      <main class="flex-1">
        <div class="flex-col">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavigationWeb from "@/components/NavigationWeb.vue";
import { useScrollStore } from "@/store";

export default {
  components: {
    NavigationWeb,
  },
  setup() {
    const scroll = useScrollStore();

    const scrolling = (e) => {
      const clientHeight = e.target.clientHeight;
      const scrollHeight = e.target.scrollHeight;
      const scrollTop = e.target.scrollTop;

      if (scrollTop + clientHeight >= scrollHeight) {
        scroll.$patch((state) => {
          state.bottom = true;
        });
      } else {
        scroll.$patch((state) => {
          state.bottom = false;
        });
      }
    };
    return {
      scrolling,
    };
  },
};
</script>
