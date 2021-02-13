<template>
  <Modal>
    <template v-slot:header>
      <Title align="center">
        Sign up
      </Title>
      <Spacer horizontal multiplier="1"/>
      <Text align="center" type="light">
        Sign up for a new account here.
      </Text>
    </template>

    <template v-slot:content>
      <FormController :validations="formValidations" @onSubmit="formSubmit" @onError="formError">
        <div class="flex flex-row">
          <TextInput
            name="firstName"
            placeholder="First name"
            icon="userCircle"
          />
          <Spacer vertical multiplier="4"/>
          <TextInput
            name="lastName"
            placeholder="Last name"
            icon="userGroup"
          />
        </div>
        <Spacer horizontal multiplier="4"/>
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
        <Spacer horizontal multiplier="4"/>
        <TextInput
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          icon="lock"
        />
        <Spacer horizontal multiplier="8"/>
        <Button width="full" height="lg">
          Sign up
        </Button>
      </FormController>

      <Spacer horizontal multiplier="6"/>

      <Text align="center">
        Already have an account? 
        <span class="text-accent-primary cursor-pointer" @click="openModal('signin')">
          Sign in.
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
    name: "SignupModal",
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
        store.dispatch("user/signup", formValues);
      }

      const formError = (errorMessage: string) => {
        console.log(errorMessage);
        error.value = errorMessage;
      }

      const formValidations = {
        "firstName": [VALIDATIONS.REQUIRED],
        "lastName": [VALIDATIONS.REQUIRED],
        "email": [VALIDATIONS.REQUIRED],
        "password": [VALIDATIONS.REQUIRED],
        "confirmPassword": [VALIDATIONS.REQUIRED],
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