<template>
  <sidebar-right>
    <div class="p-10">
      <title-sub-icon
        title="PL-Ads Blocking"
        titleColor="text-white"
        subtitleColor="text-white"
        subtitle="20-10-2022 to 23-10-2022"
      >
        <icon-libary-music />
      </title-sub-icon>
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import IconLibaryMusic from "@/components/icons/IconLibaryMusic.vue";

export default {
  components: {
    SidebarRight,
    TitleSubIcon,
    IconLibaryMusic,
  },
  setup() {
    return {};
  },
};
</script>
