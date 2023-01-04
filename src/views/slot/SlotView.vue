<template>
  <div class="main">
    <header-title title="Slot">
      <IconSlot color="fill-primary" />
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
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import MainContent from "@/components/MainContent.vue";
import MenuComponet from "@/components/MenuComponent.vue";
import PlaylistAdd from "./PlaylistAdd.vue";
import IconSlot from "@/components/icons/IconSlot.vue";

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
