<template>
  <Modal @onClose="onClose"> 
    <template v-slot:header>
      <Title align="center">
        Add friend
      </Title>
    </template>

    <template v-slot:content>
      <FormController :validations="formValidations" @onSubmit="onFormSubmit" @onError="onFormError">
        <TextInput
          name="email"
          placeholder="Email"
          icon="mail"
        />
        <div class="flex flex-row-reverse justify-center pt-8">
          <Button>
            Submit
          </Button>
          <Spacer vertical multiplier="4"/>
          <Button type="secondary" @click="onClose">
            Cancel
          </Button>
        </div>
      </FormController>

      <template v-if="error">
        <Spacer horizontal multiplier="4"/>
        <Text type="error" align="center">
          {{ error }}
        </Text>
      </template>
    </template>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import { ModalsModule } from "@/store/modules/modals";
  import { FriendsModule } from "@/store/modules/friends";
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
      const formError = ref();
      const reqError = computed(() => ErrorsModule?.errors["friendsRequest"]?.message);
      const error = computed(() => formError.value || reqError.value);

      const onFormSubmit = async (formValues: Record<string, string>) => {
        const { email } = formValues;
        await FriendsModule.request({ email });
      }

      const onFormError = (error: string) => {
        formError.value = error;
      }

      const onClose = () => {
        ErrorsModule.clrError({ name: "friendsRequest" });
        ModalsModule.closeModal();
      }

      const formValidations = {
        "email": [VALIDATIONS.REQUIRED],
      }

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