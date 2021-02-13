<template>
  <form @submit.prevent="onSubmit" ref="form">
    <slot/>
  </form>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue";
  import { ValidationTest } from "@/helpers/validation/types";
  import { validateFields, findError } from "@/helpers/validation/utils";

  export default defineComponent({
    name: "FormController",
    props: {
      validations: {
        type: Object as PropType<Record<string, Array<ValidationTest>>>,
        required: false,
      }
    },
    setup(props, { emit }) {
      const form = ref();

      const getFormValues = (form: any) => {
        if (!form) {
          return null;
        } 

        const elements = form?.elements;

        const values: Record<string, string> = {};
        elements.forEach((el: any) => {
          values[el?.name as string] = el?.value;
        });

        return values;
      }

      const onSubmit = () => {
        const formValues = getFormValues(form.value);

        if (formValues && props.validations) {
          const validatedFields = validateFields({ 
            values: formValues, 
            validations: props.validations 
          });

          const error = findError({ validatedFields });

          if (error) { 
            emit("onError", error);
            return false;
          }
        }

        emit("onSubmit", formValues); 
      }

      return {
        onSubmit,
        form,
      };
    }
  });
</script>