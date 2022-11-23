<template>
  <teleport to="#modal">
    <div
      v-if="modal.getOpen"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden flex backdrop-blur-sm bg-primary bg-opacity-30 items-center justify-center fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full md:h-auto" :class="[widthMax]">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ title }}
            </h3>
            <button
              type="button"
              @click="modal.closeModal"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <slot />
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-200"
          >
            <button-component-vue> Accept </button-component-vue>

            <ButtonComponentVue
              @click="modal.closeModal"
              vClass="text-gray-500 bg-white hover:bg-gray-100 border border-gray-200 hover:text-gray-900"
            >
              Close
            </ButtonComponentVue>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import ButtonComponentVue from "./ButtonComponent.vue";

export default {
  components: {
    ButtonComponentVue,
  },
  props: {
    title: String,
    widthMax: {
      type: String,
      default: "max-w-md",
    },
  },
  setup() {
    const { useModalStore } = require("@/store");

    const modal = useModalStore();

    return {
      modal,
    };
  },
};
</script>
