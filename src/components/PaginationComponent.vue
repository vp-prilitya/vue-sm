<template>
  <div class="flex justify-between items-center w-full">
    <p v-if="showInfo" class="text-sm text-gray-600">
      Showing <span class="font-bold">{{ showPage() }}</span> to
      <span class="font-bold">{{ showTotal() }}</span> of {{ length }} entries
    </p>
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            @click="changePage(page - 1)"
            class="block px-3 py-2 ml-0 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            :class="{
              'pointer-events-none': page == 1,
            }"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li
          v-for="(item, index) in pagination(page, math.ceil(length / size))"
          :key="index"
        >
          <a
            @click="changePage(item)"
            class="px-3 py-2 leading-tight border border-gray-300 cursor-pointer"
            :class="{
              'pointer-events-none': item === '...',
              'bg-blue-700 text-white  hover:bg-blue-800 hover:text-white':
                item == page,
              ' bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700':
                item != page,
            }"
            >{{ item }}</a
          >
        </li>
        <li>
          <a
            @click="changePage(page + 1)"
            class="block px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            :class="{
              'pointer-events-none': page == math.ceil(length / size),
            }"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  props: {
    size: Number,
    number: {
      default: 0,
      type: Number,
    },
    page: {
      default: 0,
      required: true,
    },
    length: {
      default: 0,
      required: true,
    },
    showInfo: {
      default: true,
    },
  },
  setup(props, { emit }) {
    const math = Math;
    const { size, page, length } = toRefs(props);

    function pagination(c, m) {
      var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

      for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || (i >= left && i < right)) {
          range.push(i);
        }
      }

      for (let i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push("...");
          }
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    }

    function changePage(item) {
      emit("update:page", item);
      emit("onSelectChange", item);
    }

    function showPage() {
      let number = 0;
      if (length.value > 0) {
        number = (page.value - 1) * size.value + 1;
      }
      return number;
    }

    function showTotal() {
      let total = 0;
      if (length.length > 0) {
        total = page.value * size.value;
        if (total > length.value) {
          total = length.value;
        }
      }

      return total;
    }

    return {
      pagination,
      showTotal,
      showPage,
      changePage,
      math,
    };
  },
};
</script>
