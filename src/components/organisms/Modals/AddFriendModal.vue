<template>
  <wd-modal @onClose="onClose">
    <template #header>
      <wd-title align="center"> Add friend </wd-title>
    </template>

    <template #content>
      <wd-form
        :validations="formValidations"
        @onSubmit="onFormSubmit"
        @onError="onFormError"
      >
        <wd-input name="email" placeholder="Email" icon="mail" />
        <div class="flex flex-row-reverse justify-center pt-8">
          <wd-button> Submit </wd-button>
          <wd-spacer size="4" />
          <wd-button type="secondary" @click="onClose"> Cancel </wd-button>
        </div>
      </wd-form>

      <template v-if="error">
        <wd-spacer side="ver" size="4" />
        <wd-text type="error" align="center">
          {{ error }}
        </wd-text>
      </template>
    </template>
  </wd-modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";

  import { ModalsModule } from "@/store/modules/modals";
  import { FriendsModule } from "@/store/modules/friends";
  import { ProcessModule } from "@/store/modules/process";

  import { getProcessError } from "@/helpers/process";
  import { VALIDATIONS } from "@/helpers/validation/validations";

  export default defineComponent({
    name: "SigninModal",
    setup() {
      const formError = ref();
      const reqError = computed(() =>
        getProcessError({ name: "friendsRequest" })
      );
      const error = computed(() => formError.value || reqError.value);

      const onFormSubmit = async ({
        values,
      }: {
        values: Record<string, string>;
      }) => {
        const { email } = values;
        formError.value = null;
        await FriendsModule.request({ email });
      };

      const onFormError = (error: string) => {
        formError.value = error;
      };

      const onClose = () => {
        ProcessModule.clearProcess({ name: "friendsRequest" });
        ModalsModule.closeModal();
      };

      const formValidations = {
        email: [VALIDATIONS.REQUIRED, VALIDATIONS.EMAIL],
      };

      return {
        error,
        onFormSubmit,
        onFormError,
        onClose,
        formValidations,
      };
    },
  });
</script>
