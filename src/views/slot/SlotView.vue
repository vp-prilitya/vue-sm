<template>
  <div class="flex">
    <div class="main">
      <header-title title="Slot">
        <icon-slot />
      </header-title>
      <main-content>
        <menu-componet
          arrivalLink="/slot/arrival"
          centerLink="/slot/center"
          departurerLink="/slot/departure"
        ></menu-componet>
        <div class="flex justify-center py-16">
          <router-view />
        </div>
      </main-content>
    </div>
    <playlist-add />
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import MenuComponet from "@/components/MenuComponent.vue";
import IconSlot from "@/components/icons/IconSlot";
import PlaylistAdd from "./PlaylistAdd.vue";

export default {
  components: {
    HeaderTitle,
    MainContent,
    MenuComponet,
    IconSlot,
    PlaylistAdd,
  },
  setup() {},
};
</script>
