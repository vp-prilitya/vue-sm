<template>
  <div
    class="flex-none ease-in-out duration-300 max-h-full h-screen hidden md:block"
    :class="{ 'w-0 ': !open, 'width-sidebar': open }"
  >
    <div
      class="absolute ease-in-out flex-row bg-blueSide h-full pt-8"
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
      <slot v-if="open"> </slot>

      <div
        v-if="open"
        class="absolute w-full bg-primary bottom-0 pb-[5px] px-2 items-center space-x-1 border-t border-blue-900"
      >
        <kbd
          class="px-1 py-[2px] text-[0.5rem] font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
          >Esc</kbd
        >
        <span class="text-white text-[0.8rem]">exit</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
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

    const keyboardListen = (event) => {
      if (event.key === "Escape") {
        sidebar.$reset();
      }
    };

    onMounted(() => {
      window.addEventListener("keydown", keyboardListen);
    });

    return {
      open,
      close,
    };
  },
};
</script>
