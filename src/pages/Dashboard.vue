<template>
  <q-page style="width: 1280px; margin: auto">
    <Card />
    <Chart />
  </q-page>
</template>
<script>
import Card from '../components/dashboard/Card.vue'
import Chart from '../components/dashboard/Chart.vue'

export default {
  setup () {
    return {

    }
  },
  components: {
    Card,
    Chart
  }
}
</script>
