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
    </div>
  </div>
</template>

<script>
import NavigationWeb from "@/components/NavigationWeb.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";

export default {
  components: {
    NavigationWeb,
    HeaderNavigation,
  },
};
</script>
