<template>
  <!-- <q-page class="q-pa-md bg-grey-2" style="height: 500px"> -->
  <div class="q-ma-xl">
    <div class="row">
      <div class="col-6">
        <div class="q-ma-xs">
          <q-card class="echarts shadow-4">
            <q-card-section>
              <div class="text-h6 text-bold">
                <div class="qa-mt-xs">
                  Vehicle (Bar Chart)
                  <span
                    class="
                      text-deep-orange-5 q-ma-xs
                      text-subtitle2 text-bold
                      float-right
                    "
                  >
                    View All</span
                  >
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-none echarts">
              <IEcharts :option="driverperfomance" :resizable="true" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-6">
        <div class="q-ma-xs">
          <q-card class="echarts shadow-4">
            <q-card-section>
              <div class="text-h6 text-bold">
                <div class="qa-mt-xs">
                  Vehicle (Pie Chart)
                  <span
                    class="
                      q-ma-xs
                      text-deep-orange-5 text-subtitle2 text-bold
                      float-right
                    "
                  >
                    View All</span
                  >
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-none echarts">
              <Pie
                :chart-options="chartOptions"
                :chart-data="chartData"
                :chart-id="chartId"
                :dataset-id-key="datasetIdKey"
                :plugins="plugins"
                :css-classes="cssClasses"
                :styles="styles"
                :width="width"
                :height="height"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
  <!-- </q-page> -->
</template>
<script>
import IEcharts from 'vue-echarts-v3/src/full.js'
import { Pie } from 'vue-chartjs/legacy'


import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'charts',
  data () {
    return {
      driverperfomance: {
        grid: {
          bottom: '25%'
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: [
            'product',
            'Total',
            'DDP Active',
            'DDP Not Active'
          ],
          source: [
            {
              Total: 1000,
              'DDP Active': 700,
              'DDP Not Active': 300
            }
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { color: '#32C08D', type: 'bar' },
          { color: '#22A6D3', type: 'bar' },
          { color: '#61C4E5', type: 'bar' }
        ]
      },
      mileage: {
        grid: {
          bottom: '25%'
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: [
            'product',
            'Total',
            'DDP Active',
            'DDP Not Active'
          ],
          source: [
            {
              Total: 747,
              'DDP Active': 680,
              'DDP Not Active': 625
            }
            // { 2015: 43.3, 2016: 0, 2017: 0 },
            // { 2015: 83.1, 2016: 0, 2017: 0 },
            // { 2015: 100, 2016: 0, 2017: 0 },
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { color: '#F3532E', type: 'bar' },
          { color: '#F99A85', type: 'bar' },
          { color: '#1583A7', type: 'bar' }
        ]
      },
      chartData: {
        labels: ['Total', 'DDP Active', 'DDP Not Active'],
        datasets: [
          {
            backgroundColor: ['#32C08D', '#22A6D3', '#61C4E5'],
            data: [1000, 700, 300]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  components: {
    IEcharts,
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 350
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.echarts {
  width: 550px;
  height: 430px;
}
</style>
