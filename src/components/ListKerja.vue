<template>
  <div class="container listkerja">
    <div class="row side">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item active fw-bolder" aria-current="page">
            Karir
          </li>
        </ol>
      </nav>
    </div>
    <div class="row mt-3 cek">
      <div class="col">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Cari Karir Anda .."
            aria-label="Username"
            aria-describedby="basic-addon1"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="basic-addon1"
            ><b-icon-search></b-icon-search
          ></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="gambarkiri"></div>
      </div>
      <div class="col tulis">
        <h3 class="font-weight-bold">{{ karirs[0].kategori }}</h3>
      </div>
    </div>
    <div class="row kartuisi" v-for="karir in karirs" :key="karir.id">
      <KartuKerja :karir="karir" />
    </div>
  </div>
</template>

<script>
import KartuKerja from "./KartuKerja.vue";
import axios from "axios";
export default {
  name: "ListKerja",
  components: {
    KartuKerja,
  },
  data() {
    return {
      pekerjaans: [],
      karirs: [],
      search: [],
    };
  },
  methods: {
    setPekerjaan(data) {
      this.pekerjaans = data;
      console.log(this.pekerjaans[0].kategori);
    },
    setKarir(data) {
      this.karirs = data;
      console.log(data);
    },
    searchFood() {
      axios
        .get("http://localhost:3000/karir?q=" + this.search)
        .then((response) => this.setKarir(response.data))
        .catch((error) => console.log("Gagal : ", error));
      // axios
      //   .get("http://localhost:3000/pekerjaan")
      //   .then((response) => this.setPekerjaan(response.data))
      //   .catch((error) => console.log("Gagal : ", error));
    },
  },

  mounted() {
    // axios
    //   .get("http://localhost:3000/pekerjaan")
    //   .then((response) => this.setPekerjaan(response.data))
    //   .catch((error) => console.log("Gagal : ", error));
    axios
      .get("http://localhost:3000/karir?q=")
      .then((response) => this.setKarir(response.data))
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
.kartuisi{
  margin-top: 10px;
}
.cek{
  position: absolute;
  top: 300px;
  left: 550px;
  z-index: 1;
}
.listkerja{
  margin-top: 30px;
}
</style>