<template>
  <div class="relative" ref="target">
    <input
      type="text"
      id="value"
      @click="openSelect"
      :value="!showOptions ? value : searchTerm"
      :placeholder="placeholder"
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
    />
    <span
      class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
    >
      <svg
        class="w-4 h-4 text-green-500"
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
import { onMounted } from "@vue/runtime-core";

export default {
  props: {
    theme: {
      type: String,
      default: "blue",
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
