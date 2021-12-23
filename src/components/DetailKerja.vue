<template>
  <div class="container">
    <div class="row side">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/listpekerjaan" class="text-dark"
              >Karir</router-link
            >
          </li>
          <li class="breadcrumb-item active fw-bolder" aria-current="page">
            {{ pekerjaans.lowongan }}
          </li>
        </ol>
      </nav>
    </div>
    <div class="row detilkerja">
      <div class="col-md-6 sidekiri">
        <div class="row-md-6">
          <h4>Tentang Pekerjaan</h4>
          {{ pekerjaans.tentang }}
        </div>
        <div class="row-md-6 syarat">
          <h4>Persyaratan</h4>
          {{ pekerjaans.persyaratan }}
        </div>
      </div>
      <div class="col-md-6 sidekanan">
        <div class="row-md-6">
          <h4>Detail Pekerjaan</h4>
          <div
            class="card"
            style="display: inline-block; width: 300px; height: 290px"
          >
            <div class="card-body" style="width: 300px">
              <h6>Tanggal Pendaftaran</h6>
              {{ pekerjaans.tanggal }}
              <h6>Lokasi</h6>
              {{ pekerjaans.lokasi }}
              <h6>Departemen</h6>
              {{ pekerjaans.kategori }}
              <h6>Perusahaan</h6>
              {{ pekerjaans.perusahaan }}
            </div>
          </div>
          <div class="row mt-5" style="width: 330px">
            <b-button v-b-modal.modal-1 style="width: 240px"
              >Daftar Sekarang</b-button
            >
            <b-modal
              id="modal-1"
              ref="modal"
              title="Form Daftar"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
            >
              <form class="mt-4" v-on:submit.prevent>
                <div class="form-group">
                  <label for="nama">Nama</label>
                  <textarea
                    v-model="daftar.nama"
                    placeholder="Masukkan nama"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="alamat">Alamat</label>
                  <textarea
                    v-model="daftar.alamat"
                    placeholder="Masukkan Alamat"
                    class="form-control"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-success"
                  @click="pendaftaran"
                >
                 Daftar
                </button>
              </form>
            </b-modal>
          </div>
        </div>
      </div>
      <div class="row-md-2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailKerja",
  data() {
    return {
      pekerjaans: [],
      daftar: {},
    };
  },
  methods: {
    setPekerjaan(data) {
      this.pekerjaans = data;
      console.log(this.pekerjaans);
    },
    pendaftaran() {
      this.daftar.karir = this.pekerjaans.lowongan;
      axios
        .post("http://localhost:3000/daftar", this.daftar)
        .then(() => {
          console.log(this.daftar)})
        .catch((error) => console.log("Gagal : ", error));
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/karir/" + this.$route.params.id)
      .then((response) => this.setPekerjaan(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
.sidekiri {
  margin-top: 150px;
}

.sidekanan {
  margin-top: 150px;
}

.syarat {
  margin-top: 80px;
}
.detilkerja h6 {
  font-weight: bold;
  margin-top: 10px;
}
</style>