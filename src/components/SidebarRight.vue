<script setup>
import { computed } from "vue";
import { useSidebarStore } from "@/store";

const sidebar = useSidebarStore();
const open = computed(() => sidebar.open);

const close = () => {
  sidebar.$reset();
};
</script>

<template>
  <div
    class="flex-none ease-in-out duration-300 max-h-full bg-blueSide"
    :class="{ 'w-0': !open, 'width-sidebar': open }"
  >
    <div
      v-if="open"
      class="fixed z-10 p-1 bg-amber hover:cursor-pointer hover:bg-amber500"
      @click="close"
    >
      <svg
        class="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
    <slot v-if="open" />
  </div>
</template>
