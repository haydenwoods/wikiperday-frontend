<template>
  <div name="rows" ref="rows" class="mx-4 grid grid-cols-barChart gap-y-14 gap-x-8">
    <template v-for="(row, i) in rows" :key="row.key">
      <div :ref="`row${i}`" class="flex flex-row h-full">
        <div v-if="row?.title" class="flex flex-col justify-center">
          <Title size="md" type="secondary">{{ limitTitle(row.title) }}</Title>
        </div>
        <div class="pl-2">
          <BadgesDisplay v-if="row?.badges" :badges="row?.badges"/>
        </div>
      </div>

      <div class="auto-cols-fr h-full bg-gray-200 rounded-full overflow-hidden">
        <div :class="barClass(row)" :style="barStyle(row)">
          <div class="h-full flex flex-col justify-center overflow-hidden">
            <h3 v-if="row?.value && row?.options?.showValue" class="text-2xl text-gray-100 pl-6 leading-none font-bold">{{ row.value }}</h3>
            
            <div v-if="row?.options?.showSegments && nonEmptyRowValues(row?.values)" class="flex flex-row h-full">
              <div v-for="segment in nonEmptyRowValues(row?.values)" :key="segment" :class="barSegmentClass(row)" :style="barSegmentStyle(row, segment)">
                <h3 v-if="row?.options?.showValue" class="w-full text-center text-2xl font-bold">{{ segment }}</h3>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div v-if="row?.options?.showTotal" class="auto-cols-auto flex flex-col justify-center">
        <Title size="xmd" type="secondary" align="right">{{ barValue(row) }}</Title>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { parseStyles } from "@/helpers/styles";
  import { Badges } from "@/types/badges";

  import Title from "@/components/Text/Title.vue";
  import BadgesDisplay from "@/components/Badge/Badges.vue";

  interface ChartOptions {
    maxValue?: number,
    maxTitleLength?: number
  }

  type RowType = "good" | "warn" | "error" | "disabled";
  interface RowOptions {
    showValue?: boolean,
    showSegments?: boolean,
    showTotal?: boolean,
    type?: RowType,
    badges?: Badges,
    scrollTo?: boolean
  }

  type Values = Array<number>;
  interface Row {
    value: number,
    values: Values,
    title: string,
    options: RowOptions
  }
  type Rows = Array<Row>;

  type TitleType = "error";
  interface TitleOptions {
    type: TitleType
  }

  interface Title {
    value: string,
    options: TitleOptions
  }
  type Titles = Array<Title>;

  export default defineComponent({ 
    name: "BarChart",
    computed: {
      maxValue(): number | undefined {
        return this.options?.maxValue || (this.rows || []).reduce((max: number, row: Row) => row?.value > max ? row?.value : max, 0) || 0;
      },
    },
    methods: {
      nonEmptyRowValues(values: Values): Values {
        return values.filter(value => value > 0);
      },
      barValue(row: Row): number {
        return row?.value || row?.values.reduce((totalValue: number, currentValue: number) => totalValue + currentValue, 0);
      },
      barStyle(row: Row): object {
        const value = this.barValue(row);
        const maxValue = this.maxValue;
        const percent = maxValue ? ((value / maxValue) * 100) : 0;

        return {
          width: `${percent}%`,
        }
      },
      barClass(row: Row): string {
        return parseStyles({
          defaults: "h-full rounded-full overflow-hidden transition-all",
          styles: {
            types: {
              value: row?.options?.type || "good",
              values: {
                "good": "bg-green",
                "warn": "bg-warn",
                "error": "bg-error",
                "disabled": "bg-gray-300",
              }
            },
          }
        });
      },
      barSegmentStyle(row: Row, segmentValue: number): object {
        const totalValue: number = this.barValue(row);
        const percent: number = (segmentValue / totalValue) * 100;

        return {
          width: `${percent}%`,
        }
      },
      barSegmentClass(row: Row) {
        return parseStyles({
          defaults: "h-full odd:bg-opaqueBlack flex flex-col justify-center",
          styles: {
            textColor: {
              value: row?.options?.type || "good",
              values: {
                "good": "text-gray-200",
                "warn": "text-gray-200",
                "error": "text-gray-200",
                "disabled": "text-gray-500",
              }
            }
          },
        })
      },
      limitTitle(title: string): string {
        const titleLength = title.length;
        const maxTitleLength = this?.options?.maxTitleLength;
        return maxTitleLength && (titleLength > maxTitleLength) ? `${title.slice(0, maxTitleLength)}...` : title;
      },
      scrollToRow() {
        const rows = this?.rows;
        const rowIndex = rows?.findIndex(row => row?.options?.scrollTo);
        const rowName = `row${rowIndex}`;
        const rowEl = this.$refs[rowName];

        if (rowEl) {
          const WAIT = 500;
          const DURATION = 300;

          setTimeout(() => { 
            const scrollContainerEl = this.$parent?.$el;
            const rowsEl = this.$refs?.rows;

            const containerY = scrollContainerEl.scrollTop;
            const rowY = rowEl.getBoundingClientRect().top;
            const rowsY = rowsEl.getBoundingClientRect().top;

            const desiredScrollY = rowY - rowsY;
            const diff = desiredScrollY - containerY;

            let start: number;
            window.requestAnimationFrame(function step(timestamp) {
              if (!start) start = timestamp;

              const time = timestamp - start;
              const percent = Math.min(time / DURATION, 1);

              const scrollToY = containerY + diff * percent;

              scrollContainerEl.scrollTo(0, scrollToY);

              if (time < DURATION) {
                window.requestAnimationFrame(step);
              }
            });
          }, WAIT);
        }
      }
    },
    watch: { 
      rows(rows: Rows) { 
        this.scrollToRow();
      },
    },
    updated() {
      this.scrollToRow();
    },
    props: {
      rows: {
        type: Array as PropType<Rows>,
      },
      options: {
        type: Object as PropType<ChartOptions>,
      },
    },
    components: {
      Title,
      BadgesDisplay,
    },
  });
</script>
