<template>
  <Page>
    <div class="flex flex-row">
      <div class="w-3/4">
        <div class="w-full flex flex-col">
          <div class="pb-8">
            <div class="flex flex-row">
              <AccentBox
                title="DAY"
                subtitle="5"
              />

              <div class="flex-grow pl-6 self-center">
                <Title size="lg">
                  Welcome back Hayden,
                </Title>
                <Title size="sm" type="secondary">
                  Your daily article is ready for you to read.
                </Title>
              </div>
            </div>
          </div>

          <div class="w-full h-96 p-4 flex flex-row overflow-hidden bg-background-secondary rounded-3xl border border-solid border-border-primary mb-12">
            <div class="h-88 w-88 flex-shrink-0 bg-black rounded-3xl overflow-hidden">
              <Image class="object-cover h-full w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Great_Fire_London.jpg/1000px-Great_Fire_London.jpg"></Image>
            </div>

            <div class="pl-8 py-3 flex-grow flex flex-col">
              <div class="flex flex-row">
                <AccentBox
                  title="JAN"
                  subtitle="14"
                  color="accent-secondary"
                />

                <div class="self-center pl-6">
                  <Title>
                    The Great Fire of London
                  </Title>
                  <Title size="sm" type="secondary">
                    Secondary title down here hmmmm.
                  </Title>
                </div>
              </div>
            
              <div class="flex-grow pt-4 overflow-hidden relative">
                <Text size="lg" ref="description">
                  The Great Fire of London was a major conflagration that swept through the central parts of London from Sunday, 2 September to Thursday, 6 September 1666. The fire gutted the medieval City of London inside the old Roman city wall. It threatened but did not reach the City of Westminster (today's West End), Charles II's Palace of Whitehall, or most of the suburban slums. It destroyed 13,200 houses, 87 parish churches, St Paul's Cathedral, and most of the buildings of the City authorities. It is estimated to have destroyed the homes of 70,000 of the City's 80,000 inhabitants.
                </Text>
                <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background-secondary"></div>
              </div>

              <div class="w-full pt-2">
                <Button type="text" height="xsm">
                  Read more
                  <Spacer vertical multiplier="1"/>
                  <Icon icon="chevronRight" size="xsm"/>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-96 p-4 flex flex-row overflow-hidden bg-background-secondary rounded-3xl border border-solid border-border-primary mb-10">
          <div class="h-88 w-88 flex-shrink-0 bg-black rounded-3xl overflow-hidden">
            <Image class="object-cover h-full w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Great_Fire_London.jpg/1000px-Great_Fire_London.jpg"></Image>
          </div>

          <div class="pl-8 py-3 flex-grow flex flex-col">
            <div class="flex flex-row">
              <AccentBox
                title="JAN"
                subtitle="14"
                color="accent-secondary"
              />

              <div class="self-center pl-6">
                <Title>
                  The Great Fire of London
                </Title>
                <Title size="sm" type="secondary">
                  Secondary title down here hmmmm.
                </Title>
              </div>
            </div>
          
            <div class="flex-grow pt-4 overflow-hidden relative">
              <Text size="lg" ref="description">
                The Great Fire of London was a major conflagration that swept through the central parts of London from Sunday, 2 September to Thursday, 6 September 1666. The fire gutted the medieval City of London inside the old Roman city wall. It threatened but did not reach the City of Westminster (today's West End), Charles II's Palace of Whitehall, or most of the suburban slums. It destroyed 13,200 houses, 87 parish churches, St Paul's Cathedral, and most of the buildings of the City authorities. It is estimated to have destroyed the homes of 70,000 of the City's 80,000 inhabitants.
              </Text>
              <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-background-secondary"></div>
            </div>

            <div class="w-full pt-2">
              <Button type="text" height="xsm">
                Read more
                <Spacer vertical multiplier="1"/>
                <Icon icon="chevronRight" size="xsm"/>
              </Button>
            </div>
          </div>
        </div>    
      </div>
  
      <div class="w-1/4 pl-12">
        <div class="w-full flex flex-col">
          <div class="w-full py-8 px-8 bg-background-secondary rounded-3xl border border-solid border-border-primary">
            <Title>Friends</Title>

            <div class="flex-row pt-4">
              <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <Spacer vertical multiplier="4"/>
                <Text size="lg">Declan Woods</Text>
              </div>

              <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <Spacer vertical multiplier="4"/>
                <Text size="lg">Emily Woods</Text>
              </div>

              <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <Spacer vertical multiplier="4"/>
                <Text size="lg">Jenn Woods</Text>
              </div>

              <div class="flex flex-row last:border-b-0 border-b border-solid border-border-primary pt-4 pb-4 first:pt-0 last:pb-0 items-center">
                <div class="h-10 w-10 rounded-full bg-gray-200"></div>
                <Spacer vertical multiplier="4"/>
                <Text size="lg">Nick Woods</Text>
              </div>
            </div>
          </div>
        </div>

        <Spacer horizontal multiplier="12"/>

        <div class="w-full flex flex-col">
          <div class="w-full py-8 px-8 bg-background-secondary rounded-3xl border border-solid border-border-primary">
            <Title>Categories</Title>
            
            <div class="grid-flow-row pt-4">
              <div class="w-24 h-24 bg-red-300 rounded-2xl inline-block mr-4"></div>
              <div class="w-24 h-24 bg-blue-300 rounded-2xl inline-block"></div>
              <Spacer horizontal multiplier="2"/>
              <div class="w-24 h-24 bg-yellow-300 rounded-2xl inline-block mr-4"></div>
              <div class="w-24 h-24 bg-purple-300 rounded-2xl inline-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
  import { defineComponent, ref, } from "vue";

  import Page from "@/components/templates/Page.vue";
  import Title from "@/components/atoms/Title.vue";
  import Button from "@/components/atoms/Button.vue";
  import Text from "@/components/atoms/Text.vue";
  import Image from "@/components/atoms/Image.vue";
  import Icon from "@/components/atoms/Icon/Icon.vue";
  import Spacer from "@/components/atoms/Spacer.vue";
  
  import AccentBox from "@/components/organisms/AccentBox.vue";

  export default defineComponent({
    name: "Dashboard",
    components: { 
      Page,
      Title,
      Button,
      Text,
      Image,
      Icon,
      Spacer,
      AccentBox,
    },
  });
</script>