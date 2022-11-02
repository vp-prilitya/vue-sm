<template>
  <div
    className="flex items-center justify-center min-w-full min-h-screen bg-gray-100"
  >
    <div className="w-2/3 lg:w-1/3">
      <card-component>
        <!-- <div class="flex justify-center pb-8">
          <img
            alt="Smartmedia logo"
            width="150"
            src="../../assets/smartmedia-logo.png"
          />
        </div> -->
        <h1
          className=" font-semibold text-xl mb-5 text-center text-primary uppercase"
        >
          Login
        </h1>
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors }"
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
          <button-component :loading="true">Sign In</button-component>
        </Form>
      </card-component>
    </div>
  </div>
</template>

<script>
import { Form } from "vee-validate";

import CardComponent from "@/components/CardComponent.vue";
import InputWithLabel from "@/components/InputWithLabel.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import * as Yup from "yup";

export default {
  components: {
    CardComponent,
    InputWithLabel,
    ButtonComponent,
    Form,
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is Invalid"),
      password: Yup.string().required("Password is required"),
    });

    async function onSubmit(values) {
      console.log(values);
    }

    return {
      onSubmit,
      schema,
    };
  },
};
</script>
