<template>
  <div class="relative" ref="target">
    <div
      @click="openSelect"
      :class="
        showOptions ? 'border-t border-x rounded-t-md' : ' rounded-md border'
      "
      class="py-2 pl-2 pr-3 min-h-[42px] border-gray-300 bg-gray-50"
    >
      <p
        v-if="selectedItems.length == 0"
        class="text-gray-400 text-sm mt-[2px] items-center"
      >
        {{ placeholder }}
      </p>
      <span
        v-for="option in selectedItems"
        :key="option[optionsKey]"
        class="bg-blue-100 inline-block text-blue-800 max-w-fit text-xs font-medium mr-2 pl-2.5 py-0.5 rounded"
        @click="clickStopper($event)"
      >
        <div class="flex items-center justify-between">
          {{ option[optionsValue] }}
          <svg
            @click="removeItem(option)"
            class="ml-2 mr-1 w-3 h-3 text-gray-400 cursor-pointer hover:text-blue-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </span>
      <div class="absolute right-2 top-2">
        <svg
          v-if="!loading"
          class="w-4 h-4 mt-1 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <svg
          v-if="loading"
          aria-hidden="true"
          role="status"
          class="inline mr-2 w-4 h-4 text-gray-400 animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

    <div
      v-if="showOptions"
      class="absolute w-full z-50 bg-white border-b border-x rounded-b-md border-gray-300 shadow-md"
    >
      <div class="p-2">
        <input
          type="text"
          placeholder="Search"
          v-model="searchText"
          class="w-full border border-gray-300 rounded-md h-9 text-sm placeholder:text-gray-400"
        />
      </div>
      <ul class="max-h-48 py-1 overflow-hidden overflow-y-scroll">
        <li
          v-for="option in filteredOptions"
          :key="option[optionsKey]"
          class="flex justify-between px-3 py-2 text-sm cursor-pointer hover:bg-gray-200 focus:ring-blue-800"
          @click="toggleSelection(option)"
        >
          {{ option[optionsValue] }}
          <span
            v-if="
              selectedItems.findIndex(
                (item) => item[optionsKey] === option[optionsKey]
              ) !== -1
            "
            class="font-bold text-blue-700"
            >✓</span
          >
        </li>
        <li
          v-if="!filteredOptions.length"
          class="px-3 py-2 text-xs text-gray-500 text-center"
        >
          No Matching Results
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

export default {
  name: "SelectSearch",
  props: {
    formControlName: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Type to search",
    },
    optionsValue: {
      type: String,
      required: true,
    },
    optionsKey: String,
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const searchText = ref("");
    const target = ref(null);
    const selectedItems = ref(props.formControlName);
    const showOptions = ref(false);

    const openSelect = () => {
      if (!showOptions.value) {
        showOptions.value = true;
      }
    };

    onClickOutside(target, (event) => {
      if (event) {
        showOptions.value = false;
      }
    });

    const filteredOptions = computed(() => {
      return props.data.filter(
        (option) =>
          option[props.optionsValue]
            .toLowerCase()
            .indexOf(searchText.value.toLowerCase()) !== -1
      );
    });

    function toggleSelection(option) {
      const index = selectedItems.value.findIndex(
        (item) => item[props.optionsKey] === option[props.optionsKey]
      );
      if (index === -1) {
        selectedItems.value.push(option);
      } else {
        selectedItems.value.splice(index, 1);
      }

      showOptions.value = false;

      emit("update:formControlName", selectedItems);
    }

    function removeItem(item) {
      const index = selectedItems.value.findIndex(
        (selectedItem) =>
          selectedItem[props.optionsKey] === item[props.optionsKey]
      );
      selectedItems.value.splice(index, 1);
    }

    const clickStopper = (event) => {
      event.stopPropagation();
      return;
    };

    return {
      toggleSelection,
      removeItem,
      filteredOptions,
      searchText,
      selectedItems,
      openSelect,
      target,
      ref,
      showOptions,
      clickStopper,
    };
  },
};
</script>
