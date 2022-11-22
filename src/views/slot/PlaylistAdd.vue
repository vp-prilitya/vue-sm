<template>
  <sidebar-right>
    <div class="py-10">
      <tittle-between title="Media List" addClass="pt-8 pb-4 px-8">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
        </svg>
      </tittle-between>
      <div class="">
        <title-sub-icon
          addClass="px-8 py-2 cursor-grabbing"
          draggable="true"
          @dragstart="startDrag($event, item)"
          v-for="item in items"
          :key="item.id"
          :title="item.name"
          titleColor="text-white"
          subtitleColor="text-white"
          :subtitle="item.type"
          :subtitle2="`Media ${item.total}`"
        >
          <icon-media color="fill-white" />
        </title-sub-icon>
      </div>
      <li class="text-white text-xs pt-10 px-8">Drop playlist to Slot Area</li>
    </div>
  </sidebar-right>
</template>

<script>
import SidebarRight from "@/components/SidebarRight.vue";
import TittleBetween from "@/components/TittleBetween.vue";
import TitleSubIcon from "@/components/TitleSubIcon.vue";
import IconMedia from "@/components/icons/IconMedia.vue";
import { ref, isProxy, toRaw } from "@vue/reactivity";

export default {
  components: {
    SidebarRight,
    TittleBetween,
    TitleSubIcon,
    IconMedia,
  },
  setup() {
    const items = ref([
      { id: 1, name: "PL-Ads Arrival", type: "Arrival", total: 1 },
      { id: 2, name: "PL-Ads Arrival 2", type: "Arrival", total: 1 },
      { id: 3, name: "PL-Ads Arrival 3", type: "Arrival", total: 1 },
      { id: 4, name: "PL-Ads Arrival 4", type: "Arrival", total: 1 },
    ]);

    const itemDrop = ref({});

    const startDrag = (event, item) => {
      if (isProxy(item)) {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "move";
        const data = JSON.stringify(toRaw(item));
        event.dataTransfer.setData("itemData", data);
      }
    };

    return {
      items,
      startDrag,
      itemDrop,
    };
  },
};
</script>
