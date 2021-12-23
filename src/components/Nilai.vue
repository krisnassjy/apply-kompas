<template>
  <div>
    <div class="container" id="nilai">
      <div class="row kartuisi">
        <div class="col-md-4 mt-4" v-for="nilai in nilais" :key="nilai.id">
          <CardNilai :nilai="nilai" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardNilai from "./CardNilai.vue";
import axios from "axios";
export default {
  name: "Nilai",
  components: {
    CardNilai,
  },
  data() {
    return {
      nilais: [],
    };
  },
  methods: {
    setNilai(data) {
      this.nilais = data;
      console.log(this.nilais);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/nilai")
      .then((response) => this.setNilai(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>