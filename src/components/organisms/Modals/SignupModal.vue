<template>
  <Modal>
    <template v-slot:header>
      <Title align="center">
        Sign up
      </Title>
      <Spacer horizontal multiplier="1"/>
      <Text align="center" type="secondary">
        Sign up for a new account here.
      </Text>
    </template>

    <template v-slot:content>
      <FormController :validations="formValidations" @onSubmit="onFormSubmit" @onError="onFormError">
        <TextInput
          name="firstName"
          placeholder="First name"
          icon="userCircle"
        />
        <Spacer horizontal multiplier="4"/>
        <TextInput
          name="lastName"
          placeholder="Last name"
          icon="userGroup"
        />
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

      <template v-if="error">
        <Spacer horizontal multiplier="4"/>
        <Text v-if="error" type="error" align="center">
          {{ error }}
        </Text>
      </template>

      <Spacer horizontal multiplier="6"/>

      <Text align="center">
        Already have an account? 
        <Button type="text" height="xsm" @click="openModal({ name: 'SigninModal' })">
          <span class="text-accent-primary">
            Sign in.
          </span>
        </Button>
      </Text>
    </template>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { ModalsModule } from "@/store/modules/modals";
  import { UserModule } from "@/store/modules/user";
  import { ErrorsModule } from "@/store/modules/errors";

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
      const formError = ref();
      const reqError = computed(() => ErrorsModule?.errors["signup"]?.message);
      const error = computed(() => formError.value || reqError.value);

      const openModal = ({ name }: { name: string }) => ModalsModule.openModal({ name });

      const onFormSubmit = ({ values }: { values: Record<string, string> }) => {
        const { firstName, lastName, email, password } = values;
        formError.value = null;
        UserModule.signup({ firstName, lastName, email, password });
      }

      const onFormError = (error: string) => {
        formError.value = error;
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
        onFormSubmit,
        onFormError,
        formValidations,
      };
    },
  });
</script>