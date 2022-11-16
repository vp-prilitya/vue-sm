<template>
  <div>
    <div class="flex-wrap flex flex-col sm:flex-row justify-center mx-auto">
      <card-icon :routeLink="arrivalLink" title="Arrival">
        <IconArrival />
      </card-icon>
      <card-icon :routeLink="centerLink" title="Center">
        <CenterIcon />
      </card-icon>
      <card-icon :routeLink="departurerLink" title="Departurer">
        <DepartureIcon />
      </card-icon>
    </div>
  </div>
</template>

<script>
import IconArrival from "@/components/icons/IconArrival.vue";
import CardIcon from "@/components/CardIcon.vue";
import CenterIcon from "@/components/icons/CenterIcon.vue";
import DepartureIcon from "@/components/icons/DepartureIcon.vue";

export default {
  components: {
    IconArrival,
    CardIcon,
    CenterIcon,
    DepartureIcon,
  },
  props: {
    arrivalLink: String,
    centerLink: String,
    departurerLink: String,
  },
};
</script>
