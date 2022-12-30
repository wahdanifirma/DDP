<template>
  <div class="q-pa-md row items-start q-gutter-md q-mt-xl q-ml-md">
    <!-- <div class="col-12 text-h6 text-bold">Dashboard</div> -->
    <div class="q-pa-xs">
      <q-card class="card shadow-4" style="background-color: #32c08d">
        <!-- <q-parallax src="~/assets/rail.jpg" :height="100" /> -->

        <q-card-section>
          <div class="text-h6 text-bold">Jumlah Vehicle (Total)</div>
          <div class="text-subtitle2 text-white">1000 unit</div>
          <img
            class="q-mt-xl"
            align="right"
            src="~/assets/menu/truck.svg"
            style="height: 20px; width: 45px"
          />
          <Pie
            class="q-mt-sm"
            style="height: 60px; width: 70px"
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xs">
      <q-card class="card shadow-4" style="background-color: #22a6d3">
        <!-- <q-parallax src="~/assets/rail.jpg" :height="100" /> -->

        <q-card-section>
          <div class="text-h6 text-bold">Vehicle (DDP Active)</div>
          <div class="text-subtitle2 text-white">700 unit</div>
          <img
            class="q-mt-xl"
            align="right"
            src="~/assets/menu/truckac.svg"
            style="height: 20px; width: 45px"
          />
          <Pie
            class="q-mt-sm"
            style="height: 60px; width: 70px"
            :chart-options="chartOptions"
            :chart-data="chartData1"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xs">
      <q-card class="card shadow-4" style="background-color: #61c4e5">
        <!-- <q-parallax src="~/assets/rail.jpg" :height="100" /> -->

        <q-card-section>
          <div class="text-h6 text-bold">Vehicle (DDP Not Active)</div>
          <div class="text-subtitle2 text-white">300 unit</div>
          <img
            class="q-mt-xl"
            align="right"
            src="~/assets/menu/truckm.svg"
            style="height: 20px; width: 45px"
          />
          <Pie
            class="q-mt-sm"
            style="height: 60px; width: 70px"
            :chart-options="chartOptions"
            :chart-data="chartData2"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import IEcharts from "vue-echarts-v3/src/full.js";
import { Pie } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "charts",
  data() {
    return {
      // driverperfomance: {
      //   grid: {
      //     bottom: "25%",
      //   },
      //   legend: {},
      //   tooltip: {},
      //   // Declare several bar series, each will be mapped
      //   // to a column of dataset.source by default.
      // },
      // doughnet: {
      //   labels:["Apples", "Bananas", "Grapes"],
      //   datasets: [
      //     {
      //       backgroundColor: ["#ffffff", "#32C08D", "#33C08D"],
      //       data: [300, 700, 1000],
      //     },
      //   ],
      //   option:{
      //     title:{
      //       display: true,
      //       position: "bottom",
      //       text: "Fruits"
      //     }
      //   }
      // },
      driverperfomance: {
        grid: {
          bottom: "25%",
        },
        legend: {},
        tooltip: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
      },
      chartData: {
        datasets: [
          {
            outlineColor:['#030303'],
            backgroundColor: ["#ffffff", "#32C08D"],
            data: [, 1000],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData1: {
        datasets: [
          {
            backgroundColor: ["#ffffff", "#22A6D3"],
            data: [700, 300],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartData2: {
        datasets: [
          {
            backgroundColor: ["#ffffff", "#61C4E5"],
            data: [1000, 300],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  components: {
    IEcharts,
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 350,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.card {
  height: 150px;
  width: 365px;
}
.outline{
  outline-style: solid;
  outline-color: coral;
}
</style>
