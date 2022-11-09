<template>
  <div class="flex flex-1 h-screen overflow-y-scroll">
    <NavigationWeb />
    <div class="flex flex-1 h-screen overflow-y-scroll">
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

export default {
  components: {
    NavigationWeb,
  },
};
</script>
