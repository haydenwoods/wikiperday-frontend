<template>
  <wd-container>
    <div class="flex flex-row h-96">
      <div class="h-full w-96 flex-shrink-0 rounded-3xl overflow-hidden">
        <wd-image
          class="object-cover h-full w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Great_Fire_London.jpg/1000px-Great_Fire_London.jpg"
        />
      </div>

      <div class="h-full pl-8 py-3 flex flex-col">
        <div class="flex flex-row pb-4 items-center">
          <AccentBox title="JAN" subtitle="14" color="accent-orange" />

          <div class="pl-6">
            <wd-title> The Great Fire of London </wd-title>
            <div class="overflow-ellipsis">
              <wd-title size="sm" type="secondary">
                Secondary title down here hmmmm.
              </wd-title>
            </div>
          </div>
        </div>

        <div class="overflow-hidden relative">
          <wd-text size="lg" ref="description">
            The Great Fire of London was a major conflagration that swept
            through the central parts of London from Sunday, 2 September to
            Thursday, 6 September 1666. The fire gutted the medieval City of
            London inside the old Roman city wall. It threatened but did not
            reach the City of Westminster (today's West End), Charles II's
            Palace of Whitehall, or most of the suburban slums. It destroyed
            13,200 houses, 87 parish churches, St Paul's Cathedral, and most of
            the buildings of the City authorities. It is estimated to have
            destroyed the homes of 70,000 of the City's 80,000 inhabitants.
          </wd-text>
          <div
            class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background-secondary"
          ></div>
        </div>

        <div class="w-full pt-2">
          <wd-button type="text" height="xsm">
            Read more
            <wd-spacer size="1" />
            <wd-icon name="chevronRight" size="xsm" />
          </wd-button>
        </div>
      </div>
    </div>
  </wd-container>
</template>

<script>
  import { defineComponent } from "vue";

  import AccentBox from "@/components/organisms/AccentBox.vue";

  export default defineComponent({
    name: "Article",
    components: {
      AccentBox,
    },
  });
</script>
