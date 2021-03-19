<template>
  <form @submit.prevent="onSubmit" ref="form">
    <slot />
  </form>
</template>

<script lang="ts">
  import { defineComponent, FormHTMLAttributes, PropType, ref } from "vue";
  import { ValidationTest, FormValue } from "@/helpers/validation/types";
  import { validateFields, findError } from "@/helpers/validation/utils";

  export default defineComponent({
    name: "wdForm",
    props: {
      validations: {
        type: Object as PropType<Record<string, Array<ValidationTest>>>,
        required: false,
      },
    },
    setup(props, { emit }) {
      const form = ref();

      const getFormValues = (form: HTMLFormElement) => {
        if (!form) {
          return null;
        }

        const elements = form?.elements;

        const values: Record<string, FormValue> = {};
        Array.from(elements).forEach((el) => {
          const name = el.getAttribute("name");
          const placeholder = el.getAttribute("placeholder");
          const value = (el as HTMLInputElement).value;

          if (name) {
            values[name] = {
              display: placeholder || name,
              value,
            };
          }
        });

        return values;
      };

      const onSubmit = () => {
        const formValues = getFormValues(form.value);

        if (formValues && props.validations) {
          const validatedFields = validateFields({
            values: formValues,
            validations: props.validations,
          });
          const error = findError({ validatedFields });

          if (error) {
            ``;
            emit("onError", error);
            return false;
          }
        }

        const values: Record<string, string> = {};
        Object.keys(formValues || {}).forEach((fieldName) => {
          const formValue = formValues?.[fieldName];
          const value = formValue?.value;
          if (value) {
            values[fieldName] = value;
          }
        });

        emit("onSubmit", { values, formValues });
      };

      return {
        onSubmit,
        form,
      };
    },
  });
</script>
