<template>
  <ModalComponentVue title="Add Device Group" widthMax="max-w-sm" :id="id">
    <InputWithLabelVue label="Group device name *" type="text" name="name" />
    <InputWithLabelVue label="Description" as="textarea" name="desc" />
  </ModalComponentVue>
</template>

<script>
import ModalComponentVue from "@/components/ModalComponent.vue";
import InputWithLabelVue from "@/components/InputWithLabel.vue";

export default {
  props: {
    id: Number,
  },
  components: {
    ModalComponentVue,
    InputWithLabelVue,
  },
};
</script>
