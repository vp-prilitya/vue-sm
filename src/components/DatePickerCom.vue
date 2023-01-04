<template>
  <div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium" :class="[labelColor]">{{
        label
      }}</label>
      <Datepicker
        v-model="formName"
        :enable-time-picker="false"
        :format="format"
        calendar-class-name="p-3"
        :input-class-name="theme == 'blue' ? 'input-blue' : 'input-default'"
        range
      />
    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import { computed } from "vue";

export default {
  components: {
    Datepicker,
  },
  props: {
    formControlName: Array,
    theme: {
      type: String,
      default: "default",
    },
    labelColor: {
      type: String,
      default: "text-gray-900",
    },
    label: String,
  },
  setup(props, { emit }) {
    const formName = computed({
      get() {
        return props.formControlName;
      },
      set(value) {
        emit("update:formControlName", value);
      },
    });

    const format = (datePick) => {
      const date = datePick[0];
      const date2 = datePick[1];
      let value = "";

      if (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        value = value.concat(`${day}/${month}/${year}`);
      }

      if (date2) {
        const day2 = date2.getDate();
        const month2 = date2.getMonth() + 1;
        const year2 = date2.getFullYear();
        value = value.concat(` - ${day2}/${month2}/${year2}`);
      }

      return value;
    };

    return {
      format,
      formName,
    };
  },
};
</script>
