<template>
  <div
    class="fixed flex items-center bg-opacity-50 justify-center top-0 right-0 left-0 bg-gray-700 z-50 h-screen w-full"
    :class="{ hidden: !open, block: open }"
  >
    <div class="relative p-4 w-full max-w-sm h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow">
        <div class="p-8 text-center">
          <svg
            aria-hidden="true"
            class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <h1 class="mt-5 text-2xl font-bold">Error Message</h1>
          <h3 class="mb-4 mt-2 font-normal text-gray-500">
            {{ message }}
          </h3>
          <div class="space-x-4">
            <a v-if="retry" href="" class="text-red-600 hover:text-red-800"
              >Try Again</a
            >
            <button
              @click="dismissClick"
              class="text-gray-500 hover:text-gray-800"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useErrorStore } from "@/store";
import { computed } from "vue";

export default {
  setup() {
    const errorStore = useErrorStore();

    const open = computed(() => errorStore.open);
    const message = computed(() => errorStore.message);
    const retry = computed(() => errorStore.retry);

    const dismissClick = () => {
      errorStore.$reset();
    };

    return {
      open,
      message,
      retry,
      dismissClick,
    };
  },
};
</script>
