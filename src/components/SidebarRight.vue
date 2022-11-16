<template>
  <div
    class="flex-none ease-in-out duration-300 max-h-full h-screen"
    :class="{ 'w-0 ': !open, 'width-sidebar': open }"
  >
    <div
      class="absolute ease-in-out flex-row bg-blueSide h-full pb-8 pt-8"
      :class="{ 'w-0 ': !open, 'width-sidebar': open }"
    >
      <div
        v-if="btnClose"
        class="absolute z-50 p-1 top-2/4 rounded-full bg-amber hover:cursor-pointer hover:bg-amber500"
        :class="{ 'right-0 hidden': !open, 'right-[20.3rem]': open }"
        @click="close"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
      <slot v-if="open" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useSidebarStore } from "@/store";

export default {
  props: {
    btnClose: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const sidebar = useSidebarStore();
    const open = computed(() => sidebar.open);

    const close = () => {
      sidebar.$reset();
    };

    return {
      open,
      close,
    };
  },
};
</script>
