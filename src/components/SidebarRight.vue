<script setup>
import { computed } from "vue";
import { useSidebarStore } from "@/store";

const sidebar = useSidebarStore();
const open = computed(() => sidebar.open);
</script>

<template>
  <div
    class="flex-none ease-in-out duration-300 h-screen bg-blueSide"
    :class="{ 'w-0': !open, 'w-[341px]': open }"
  >
    <slot v-if="open" />
  </div>
</template>
