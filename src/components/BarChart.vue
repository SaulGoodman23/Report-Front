<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData"></Bar>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: ["report"],
  data() {
    return {
      chartData: {
        // labels: ["January", "February", "March"],
        //datasets: [{ data: [40, 20, 12] }],
        datasets: [
          {
            data: this.report,
            backgroundColor: "#ff8000",
            label: "City Sales",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    // async getReport() {
    //   this.loaded = false;
    //   try {
    //     const data = await axios.get("http://localhost:3000/api/v1/report");
    //     console.log(data);
    //   } catch (e) {}
    // },
  },
};
</script>

<style scoped>
#my-chart-id {
  margin-top: 30px;
  margin-left: 400px;
}
</style>
