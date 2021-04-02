<template>
  <wd-modal>
    <template #header>
      <wd-title align="center"> Sign up </wd-title>
      <wd-spacer side="ver" size="1" />
      <wd-text align="center" type="secondary">
        Sign up for a new account here.
      </wd-text>
    </template>

    <template #content>
      <wd-form
        :validations="formValidations"
        @onSubmit="onFormSubmit"
        @onError="onFormError"
      >
        <wd-input name="firstName" placeholder="First name" icon="userCircle" />
        <wd-spacer side="ver" size="4" />
        <wd-input name="lastName" placeholder="Last name" icon="userGroup" />
        <wd-spacer side="ver" size="4" />
        <wd-input name="email" placeholder="Email" icon="mail" />
        <wd-spacer side="ver" size="4" />
        <wd-input
          name="password"
          placeholder="Password"
          type="password"
          icon="lock"
        />
        <wd-spacer side="ver" size="4" />
        <wd-input
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          icon="lock"
        />
        <wd-spacer side="ver" size="8" />
        <wd-button width="full" height="lg"> Sign up </wd-button>
      </wd-form>

      <template v-if="error">
        <wd-spacer side="ver" size="4" />
        <wd-text v-if="error" type="error" align="center">
          {{ error }}
        </wd-text>
      </template>

      <wd-spacer side="ver" size="6" />

      <wd-text align="center">
        Already have an account?
        <wd-button
          type="text"
          height="xsm"
          @click="openModal({ name: 'SigninModal' })"
        >
          <span class="text-accent-primary"> Sign in. </span>
        </wd-button>
      </wd-text>
    </template>
  </wd-modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";

  import { ModalsModule } from "@/store/modules/modals";
  import { UserModule } from "@/store/modules/user";

  import { getProcessError } from "@/helpers/process";
  import { VALIDATIONS } from "@/helpers/validation/validations";

  export default defineComponent({
    name: "SignupModal",
    setup() {
      const formError = ref();
      const reqError = computed(() => getProcessError({ name: "signup" }));
      const error = computed(() => formError.value || reqError.value);

      const openModal = ({ name }: { name: string }) =>
        ModalsModule.openModal({ name });

      const onFormSubmit = ({ values }: { values: Record<string, string> }) => {
        const { firstName, lastName, email, password } = values;
        formError.value = null;
        UserModule.signup({ firstName, lastName, email, password });
      };

      const onFormError = (error: string) => {
        formError.value = error;
      };

      const formValidations = {
        firstName: [VALIDATIONS.REQUIRED],
        lastName: [VALIDATIONS.REQUIRED],
        email: [VALIDATIONS.REQUIRED, VALIDATIONS.EMAIL],
        password: [VALIDATIONS.REQUIRED],
        confirmPassword: [VALIDATIONS.REQUIRED],
      };

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
