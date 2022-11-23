<template>
  <ModalComponentVue title="Add Device Group" widthMax="max-w-sm">
    <InputWithLabelVue label="Group device name *" type="text" name="name" />
    <InputWithLabelVue label="Description" as="textarea" name="desc" />
  </ModalComponentVue>
</template>

<script>
import ModalComponentVue from "@/components/ModalComponent.vue";
import InputWithLabelVue from "@/components/InputWithLabel.vue";

export default {
  components: {
    ModalComponentVue,
    InputWithLabelVue,
  },
};
</script>
