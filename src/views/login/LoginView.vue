<template>
  <div
    className="flex pt-12 justify-center min-w-full min-h-screen bg-gray-100"
  >
    <div className=" w-2/3 lg:w-1/3">
      <div class="flex justify-center pb-12 max-w-sm">
        <img
          alt="Smartmedia logo"
          width="210"
          src="../../assets/smartmedia-logo.png"
        />
      </div>
      <card-component>
        <h1
          className=" font-semibold text-xl  text-center text-primary uppercase"
        >
          Login
        </h1>
        <p class="text-center mb-5 text-gray-500">Sign In to your account</p>
        <alert-error-component v-if="alert" :message="alert.message" />
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
        >
          <input-with-label
            label="Your email"
            name="email"
            type="text"
            placeholder="name@mail.com"
            :error="errors.email"
          />
          <input-with-label
            label="Your password"
            name="password"
            type="password"
            :error="errors.password"
          />
          <button-component vClass="w-full btn-darkBlue" :loading="isSubmitting"
            >Sign In</button-component
          >
        </Form>
      </card-component>
    </div>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import { useAuthStore, useAlertStore } from "@/store";
import { computed } from "vue";
import CardComponent from "@/components/CardComponent.vue";
import InputWithLabel from "@/components/InputWithLabel.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import * as Yup from "yup";
import AlertErrorComponent from "@/components/AlertErrorComponent.vue";

export default {
  components: {
    CardComponent,
    InputWithLabel,
    ButtonComponent,
    Form,
    AlertErrorComponent,
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is Invalid"),
      password: Yup.string().required("Password is required"),
    });

    const authStore = useAuthStore();
    const alertStore = useAlertStore();

    const alert = computed(() => alertStore.alert);

    async function onSubmit(values) {
      const { email, password } = values;

      await authStore.login(email, password);
    }

    return {
      alert,
      onSubmit,
      schema,
    };
  },
};
</script>
