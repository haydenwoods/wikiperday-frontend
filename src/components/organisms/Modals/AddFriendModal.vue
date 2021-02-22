<template>
  <Modal>
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
          <Button type="secondary" @click="closeModal">
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

      const closeModal = () => store.commit("modals/closeModal");

      const formError = ref();
      const reqError = computed(() => store.state?.error?.errors["friendsRequest"]?.message);
      const error = computed(() => formError.value || reqError.value);

      const onFormSubmit = (formValues: Record<string, string>) => {
        store.dispatch("friends/request", formValues);
        closeModal();
      }

      const onFormError = (error: string) => {
        formError.value = error;
      }

      const formValidations = {
        "email": [VALIDATIONS.REQUIRED],
      }

      return {
        error,
        onFormSubmit,
        onFormError,
        formValidations,
        closeModal, 
      };
    },
  });
</script>