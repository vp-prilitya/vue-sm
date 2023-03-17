<template>
  <div class="flex text h-screen antialiased text-gray-900 bg-contentColor">
    <!-- <router-view /> -->
    <pagination-component
      v-model:size="size"
      v-model:length="length"
      v-model:page="page"
      @onSelectChange="change"
    ></pagination-component>
  </div>
  <error-message />
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
import { onMounted, ref } from "vue";
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  components: {
    ErrorMessage,
    PaginationComponent,
  },
  setup() {
    const page = ref(1);
    const length = ref(20);
    const size = ref(10);

    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage = function (msg) {
      console.log(msg.data);
    };

    onMounted(() => {
      ws.addEventListener("open", () => {
        console.log("We are connected");
      });
    });

    const change = (event) => {
      console.log(event);
    };

    return {
      change,
      page,
      length,
      size,
    };
  },
};
</script>
