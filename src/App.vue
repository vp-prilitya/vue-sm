<template>
  <div class="flex text h-screen antialiased text-gray-900 bg-contentColor">
    <router-view />
  </div>
  <error-message />
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  components: {
    ErrorMessage,
  },
};
</script>
