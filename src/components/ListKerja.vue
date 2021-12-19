<template>
  <div class="container listkerja">
    <div class="row side">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
            <li class="breadcrumb-item active fw-bolder" aria-current="page">Food Order</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="gambarkiri"></div>
      </div>
      <div class="col tulis">
        <h3 class="font-weight-bold">{{pekerjaans.kategori}}</h3>
      </div>
    </div>
    <div class="row"  v-for="pekerjaan in pekerjaans" :key="pekerjaan.id">
      <KartuKerja :pekerjaan="pekerjaan"/>
    </div>
  </div>
</template>

<script>
import KartuKerja from "./KartuKerja.vue"
import axios from "axios";
export default {
  name: "ListKerja",
  components: {
    KartuKerja
  },
  data() {
    return {
      pekerjaans: [],
    };
  },
  methods: {
    setPekerjaan(data) {
      this.pekerjaans = data;
      console.log(JSON.stringify(this.pekerjaans))
    },
  },
  
  mounted() {
    axios
      .get("http://localhost:3000/pekerjaan/" + this.$route.params.id)
      .then((response) => this.setPekerjaan(response.data))
      .catch((error) => console.log("Gagal : ", error));    
  },
};

</script>

<style>
.gambarjob {
  width: 300px;
  margin-top: 100px;
}

.tulis {
  margin-top: 160px;
}
.gambarkiri {
  background-image: url("../assets/job.png");
  width: 150px;
  height: 92px;
  float: right;
  margin-top: 130px;
  margin-bottom: 70px;
}
.side {
  float: left;
}
.breadcrumb { 
  background-color: transparent;
}
</style>