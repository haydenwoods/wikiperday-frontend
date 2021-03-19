<template>
  <div class="relative z-10 w-112 rounded-2xl px-6 py-6 bg-white">
    <div class="absolute top-4 left-4 cursor-pointer">
      <wd-button type="text" height="sm" @click="closeModal">
        <wd-icon class="text-text-secondary" name="x" />
      </wd-button>
    </div>

    <div class="w-full">
      <slot name="header"></slot>
    </div>

    <wd-spacer side="ver" size="6" />

    <div class="w-full">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { ModalsModule } from "@/store/modules/modals";

  export default defineComponent({
    name: "wdModal",
    setup(props, { emit }) {
      const closeModal = () => {
        emit("onClose");
        ModalsModule.closeModal();
      };

      return {
        closeModal,
      };
    },
  });
</script>
