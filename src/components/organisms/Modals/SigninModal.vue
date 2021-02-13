<template>
  <Modal>
    <template v-slot:header>
      <Title align="center">
        Sign in
      </Title>
      <Spacer horizontal multiplier="1"/>
      <Text align="center" type="light">
        Sign in to your account here.
      </Text>
    </template>

    <template v-slot:content>
      <FormController :validations="formValidations" @onSubmit="formSubmit" @onError="formError">
        <TextInput
          name="email"
          placeholder="Email"
          icon="mail"
        />
        <Spacer horizontal multiplier="4"/>
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          icon="lock"
        />
        <Spacer horizontal multiplier="8"/>
        <Button width="full" height="lg">
          Sign in
        </Button>
      </FormController>

      <Spacer horizontal multiplier="6"/>

      <Text align="center">
        Don't have an account? 
        <span class="text-accent-primary cursor-pointer" @click="openModal('signup')">
          Sign up.
        </span>
      </Text>
    </template>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useStore } from "vuex";

  import { VALIDATIONS } from "@/helpers/validation/validations";

  import Modal from "@/components/atoms/Modal.vue";
  import Title from "@/components/atoms/Title.vue";
  import Text from "@/components/atoms/Text.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import TextInput from "@/components/atoms/TextInput.vue";
  import Button from "@/components/atoms/Button.vue";
  import FormController from "@/components/atoms/FormController.vue";

  export default defineComponent({
    name: "SigninModal",
    components: {
      Modal,
      Title,
      Text,
      Spacer,
      TextInput,
      Button,
      FormController,
    },
    setup() {
      const store = useStore();
      const error = ref();

      const openModal = (modalName: string) => store.commit("modals/openModal", modalName);

      const formSubmit = (formValues: Record<string, string>) => {
        store.dispatch("auth/signin", formValues);
      }

      const formError = (errorMessage: string) => {
        error.value = errorMessage;
      }

      const formValidations = {
        "email": [VALIDATIONS.REQUIRED],
        "password": [VALIDATIONS.REQUIRED],
      }

      return {
        error,
        openModal,
        formSubmit,
        formError,
        formValidations,
      };
    },
  });
</script>