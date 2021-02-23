<template>
  <Container>
    <div class="w-full flex flex-col">
      <Title>Categories</Title>

      <div class="flex items-center justify-center">
        <div class="w-64 grid grid-cols-2 gap-7 pt-6">
          <AccentBox size="xlg" color="accent-blue">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <Icon name="beaker" type="tertiary" size="xlg"/>
                </div>
                <Spacer horizontal multiplier="0.5"></Spacer>
                <Text size="lg" type="tertiary" align="center">Science</Text>
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-orange">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <Icon name="map" type="tertiary" size="xlg"/>
                </div>
                <Spacer horizontal multiplier="0.5"></Spacer>
                <Text size="lg" type="tertiary" align="center">History</Text>
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-purple">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <Icon name="musicNote" type="tertiary" size="xlg"/>
                </div>
                <Spacer horizontal multiplier="0.5"></Spacer>
                <Text size="lg" type="tertiary" align="center">Music</Text>
              </div>
            </div>
          </AccentBox>

          <AccentBox size="xlg" color="accent-red">
            <div class="flex items-center justify-center h-full">
              <div>
                <div class="flex justify-center">
                  <Icon name="chip" type="tertiary" size="xlg"/>
                </div>
                <Spacer horizontal multiplier="0.5"></Spacer>
                <Text size="lg" type="tertiary" align="center">Tech</Text>
              </div>
            </div>
          </AccentBox>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
  import { defineComponent, } from "vue";

  import Container from "@/components/atoms/Container.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Title from "@/components/atoms/Title.vue";
  import Text from "@/components/atoms/Text.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  import AccentBox from "@/components/organisms/AccentBox.vue";

  export default defineComponent({
    name: "Categories",
    components: { 
      Container,
      Icon,
      Title,
      Text,
      Spacer,
      AccentBox,
    },
  });
</script>