<template>
  <wd-modal>
    <template #header>
      <wd-title align="center"> Sign in </wd-title>
      <wd-spacer side="ver" size="1" />
      <wd-text align="center" type="secondary">
        Sign in to your account here.
      </wd-text>
    </template>

    <template #content>
      <wd-form
        :validations="formValidations"
        @onSubmit="onFormSubmit"
        @onError="onFormError"
      >
        <wd-input name="email" placeholder="Email" icon="mail" />
        <wd-spacer side="ver" size="4" />
        <wd-input
          name="password"
          placeholder="Password"
          type="password"
          icon="lock"
        />
        <wd-spacer side="ver" size="8" />
        <wd-button width="full" height="lg"> Sign in </wd-button>
      </wd-form>

      <wd-spacer side="ver" size="3" />

      <wd-text type="error" align="center">
        {{ formError }}
        <wd-error v-if="!formError" :names="['signin']" />
      </wd-text>

      <wd-spacer side="ver" size="3" />

      <wd-text align="center">
        Don't have an account?

        <wd-button
          type="text"
          height="xsm"
          @click="openModal({ name: 'SignupModal' })"
        >
          <span class="text-accent-primary"> Sign up. </span>
        </wd-button>
      </wd-text>
    </template>
  </wd-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { ModalsModule } from "@/store/modules/modals";
  import { AuthModule } from "@/store/modules/auth";

  import { VALIDATIONS } from "@/helpers/validation/validations";

  export default defineComponent({
    name: "SigninModal",
    setup() {
      const formError = ref();

      const openModal = ({ name }: { name: string }) =>
        ModalsModule.openModal({ name });

      const onFormSubmit = ({ values }: { values: Record<string, string> }) => {
        const { email, password } = values;
        formError.value = null;
        AuthModule.signin({ email, password });
      };

      const onFormError = (error: string) => {
        formError.value = error;
      };

      const formValidations = {
        email: [VALIDATIONS.REQUIRED, VALIDATIONS.EMAIL],
        password: [VALIDATIONS.REQUIRED],
      };

      return {
        formError,
        openModal,
        onFormSubmit,
        onFormError,
        formValidations,
      };
    },
  });
</script>
