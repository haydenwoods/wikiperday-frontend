<template>
  <wd-container>
    <div class="w-full flex flex-col">
      <wd-title>Categories</wd-title>

      <div class="flex items-center justify-center">
        <div class="w-64 grid grid-cols-2 gap-7 pt-6">
          <AccentBox size="xlg" color="accent-blue">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <wd-icon name="beaker" type="tertiary" size="xlg" />
                </div>
                <wd-spacer size="0.5" />
                <wd-text size="lg" type="tertiary" align="center"
                  >Science</wd-text
                >
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-orange">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <wd-icon name="paperMap" type="tertiary" size="xlg" />
                </div>
                <wd-spacer size="0.5" />
                <wd-text size="lg" type="tertiary" align="center"
                  >History</wd-text
                >
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-purple">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <wd-icon name="musicNote" type="tertiary" size="xlg" />
                </div>
                <wd-spacer size="0.5" />
                <wd-text size="lg" type="tertiary" align="center"
                  >Music</wd-text
                >
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-red">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <wd-icon name="chip" type="tertiary" size="xlg" />
                </div>
                <wd-spacer size="0.5" />
                <wd-text size="lg" type="tertiary" align="center">Tech</wd-text>
              </div>
            </div>
          </AccentBox>
        </div>
      </div>
    </div>
  </wd-container>
</template>

<script>
  import { defineComponent } from "vue";

  import AccentBox from "@/components/organisms/AccentBox.vue";

  export default defineComponent({
    name: "Categories",
    components: {
      AccentBox,
    },
  });
</script>
