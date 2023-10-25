<template>
  <div class="main">
    <div class="cart">
      <div class="title">
        <h2>محاسبه شاخص ویزیتور ها</h2>
      </div>
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <div class="field">
          <label for="file" class="label"
            >Step 1: Upload Your Excel File.</label
          >
          <input class="input" type="file" @change="selectFile" ref="file" />
        </div>
        <div class="field">
          <p>Step 2: Send Your Excel File To The Server.</p>
          <base-button>Send To Server</base-button>
          <div class="msg" v-if="message">{{ message }}</div>
        </div>
      </form>
      <p v-if="chart">Step 3: See The Report.</p>
      <base-button v-if="chart" @click="getReport">Report</base-button>
    </div>
    <base-spinner v-if="loading"></base-spinner>
    <div class="chart" v-else>
      <BarChart v-if="loadData" v-bind:report="apiData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "./BarChart.vue";

export default {
  name: "SimpleUpload",
  components: { BarChart },
  data() {
    return {
      file: "",
      message: "",
      error: false,
      chart: false,
      loadData: false,
      apiData: {},
      loading: false,
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
      this.error = false;
      this.message = "";
    },

    async getReport() {
      this.loading = true;
      this.loaded = false;

      try {
        const response = await axios.get("http://localhost:3000/api/v1/report");
        if (response.status === 200) {
          this.loading = false;
          this.apiData = response.data;
          this.loadData = true;
          console.log(this.apiData);
        }
      } catch (e) {}
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/upload",
          formData
        );
        if (response.status === 200) {
          this.chart = true;
        }
        this.message = "File has been sent.";
        this.file = "";
        this.error = false;
      } catch (err) {
        this.message = "Something went wrong.Please try again later.";
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.cart {
  width: 50%;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 50%;
  justify-self: center;
}

h2 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: #3a0061;
}
form {
  text-align: center;
  display: flex;
  flex-direction: column;
}

input {
  color: #3a0061;
  border: none;
  padding: 20px;
  margin-left: 120px;
}

.label {
  font-family: "Courier New", Courier, monospace;
  color: #3a0061;
}

.btn {
  padding: 10px;
  color: whitesmoke;
  background-color: burlywood;
  border: none;
  border-radius: 100px;
}

p {
  font-family: "Courier New", Courier, monospace;
  color: #3a0061;
}

.btn:hover {
  cursor: pointer;
}

.msg {
  color: orangered;
  margin-top: 20px;
  margin-bottom: 30px;
}

.main {
  display: flex;
  margin-left: 30px;
}

.chart {
  width: 100%;
  margin-right: 50px;
}

.field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
