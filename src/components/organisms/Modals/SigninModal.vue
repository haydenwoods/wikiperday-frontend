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
      <FormController :validations="formValidations" @onSubmit="onFormSubmit" @onError="onFormError">
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
      
      <template v-if="error">
        <Spacer horizontal multiplier="4"/>
        <Text v-if="error" type="error" align="center">
          {{ error }}
        </Text>
      </template>
      
      <Spacer horizontal multiplier="6"/>

      <Text align="center">
        Don't have an account? 
        <Button type="text" height="xsm" @click="openModal('signup')">
          <span class="text-accent-primary">
            Sign up.
          </span>
        </Button>
      </Text>
    </template>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
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

      const formError = ref();
      const reqError = computed(() => store.state?.error?.errors["signin"]?.message);
      const error = computed(() => formError.value || reqError.value);

      const openModal = (modalName: string) => store.commit("modals/openModal", modalName);

      const onFormSubmit = (formValues: Record<string, string>) => {
        formError.value = null;
        store.dispatch("auth/signin", formValues);
      }

      const onFormError = (error: string) => {
        formError.value = error;
      }

      const formValidations = {
        "email": [VALIDATIONS.REQUIRED],
        "password": [VALIDATIONS.REQUIRED],
      }

      return {
        error,
        openModal,
        onFormSubmit,
        onFormError,
        formValidations,
      };
    },
  });
</script>