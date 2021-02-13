<template>
  <div class="flex flex-row w-full h-11 px-3 rounded-xl bg-input-background-primary border border-solid border-input-border-primary overflow-hidden">
    <Icon 
      v-if="icon" 
      class="self-center pr-2"
      :icon="icon" 
      size="md"
    />
    
    <input 
      :name="name"
      :class="inputClasses"
      :placeholder="placeholder"
      :type="type"
    >
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, } from "vue";
  import { propsToClasses, } from "@/helpers/styles";

  import Icon from "@/components/atoms/Icon/Icon.vue";

  type Type = "text" | "password";

  export default defineComponent({
    name: "TextInput",
    components: {
      Icon,
    },
    props: {
      name: {
        type: String,
      },
      placeholder: {
        type: String,
        required: false,
        default: "",
      },
      type: {
        type: String as PropType<Type>,
        default: "text",
      },
      icon: {
        type: String,
      },
    },
    setup(props) {
      const inputClasses = computed(() => propsToClasses({
        defaults: "px-1 bg-white text-input-text-primary placeholder:input-text-secondary tracking-wide flex-grow flex-shrink",
        styles: [],
      })); 

      return {
        inputClasses,
      };
    },
  });
</script>

<style scoped>
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill::first-line {
    font-size: 16px;
  }

  input:focus {
    outline: unset !important;
  }
</style>