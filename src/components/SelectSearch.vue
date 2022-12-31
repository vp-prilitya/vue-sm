<template>
  <div class="relative" ref="target">
    <input
      type="text"
      id="value"
      @click="openSelect"
      :value="!showOptions ? value : searchTerm"
      :placeholder="loading ? 'loading...' : placeholder"
      @input="handleInput"
      class=""
      :class="[
        showOptions ? 'cursor-text' : 'cursor-default',
        { 'input-default': theme == 'default' },
        { 'input-blue': theme == 'blue' },
        { '  hover:bg-gray-100': theme == 'default' && !showOptions },
        { '  hover:bg-primary': theme == 'blue' && !showOptions },
      ]"
      autocomplete="off"
      :readonly="loading"
    />
    <span
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
    >
      <svg
        v-if="!loading && value == ''"
        class="w-4 h-4 text-gray-100"
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
        v-if="!loading && value != ''"
        class="w-5 h-5 text-gray-100"
        @click="closeClick"
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
      <svg
        v-if="loading"
        aria-hidden="true"
        role="status"
        class="inline mr-2 w-4 h-4 text-white animate-spin"
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
    </span>

    <div
      v-show="showOptions"
      class="absolute w-full z-50 mt-1 bg-white border border-gray-300 max-h-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
    >
      <ul class="py-1">
        <li
          v-for="(item, index) in dataSelect"
          :key="index"
          @click="handleClick(item)"
          class="px-3 py-2 cursor-pointer hover:bg-gray-200"
          :class="{ 'bg-gray-200': item[optionsKey] == formControlName }"
        >
          {{ item[optionsValue] }}
        </li>
        <li
          v-if="!dataSelect.length"
          class="px-3 py-2 text-sm text-gray-500 text-center"
        >
          No Matching Results
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "@vue/reactivity";
import { onClickOutside } from "@vueuse/core";
import { onMounted, watchEffect } from "@vue/runtime-core";

export default {
  props: {
    theme: {
      type: String,
      default: "default",
    },
    data: {
      type: Array,
      required: true,
    },
    placeholder: String,
    optionsValue: {
      type: String,
      required: true,
    },
    optionsKey: String,
    formControlName: [String, Number],
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const showOptions = ref(false);
    const target = ref(null);
    const value = ref("");
    const searchTerm = ref("");
    const { data, optionsValue, optionsKey, formControlName } = toRefs(props);

    onMounted(() => {
      data.value.forEach((db) => {
        if (db[optionsKey.value] == formControlName.value) {
          value.value = db[optionsValue.value];
        }
      });
    });

    watchEffect(() => {
      if (formControlName.value == "") {
        value.value = "";
      }
    });

    onClickOutside(target, (event) => {
      if (event) {
        showOptions.value = false;
      }
    });

    const dataSelect = computed(() => {
      return data.value.filter((item) => {
        return item[optionsValue.value]
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase());
      });
    });

    const handleInput = (evt) => {
      searchTerm.value = evt.target.value;
    };

    const openSelect = () => {
      if (!showOptions.value) {
        searchTerm.value = "";
        showOptions.value = true;
      }
    };

    const handleClick = (item) => {
      value.value = item[optionsValue.value];
      showOptions.value = false;
      emit("update:formControlName", item[optionsKey.value]);
      emit("onSelectChange", item[optionsKey.value]);
    };

    const closeClick = () => {
      value.value = "";
      emit("update:formControlName", "");
      emit("onSelectChange", "");
    };

    return {
      showOptions,
      searchTerm,
      target,
      handleInput,
      handleClick,
      openSelect,
      value,
      dataSelect,
      closeClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
