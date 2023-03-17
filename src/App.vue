<template>
  <div class="flex text h-screen antialiased text-gray-900 bg-contentColor">
    <router-view />
  </div>
  <error-message />
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";
import { onMounted } from "vue";

export default {
  components: {
    ErrorMessage,
  },
  setup() {
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage = function (msg) {
      console.log(msg.data);
    };

    onMounted(() => {
      ws.addEventListener("open", () => {
        console.log("We are connected");
      });
    });
  },
};
</script>
