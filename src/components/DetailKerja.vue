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
            {{ pekerjaans.jenis.lowongan }}
          </li>
        </ol>
      </nav>
    </div>
    <div class="row detilkerja">
      <div class="col-md-6 sidekiri">
        <div class="row-md-6">
          <h4>Tentang Pekerjaan</h4>
          {{ pekerjaans.jenis.tentang }}
        </div>
        <div class="row-md-6 syarat">
          <h4>Persyaratan</h4>
          {{ pekerjaans.jenis.persyaratan }}
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
              {{ pekerjaans.jenis.tanggal }}
              <h6>Lokasi</h6>
              {{ pekerjaans.jenis.lokasi }}
              <h6>Departemen</h6>
              {{ pekerjaans.kategori }}
              <h6>Perusahaan</h6>
              {{ pekerjaans.jenis.perusahaan }}
            </div>
          </div>
          <div class="row mt-5" style="width: 330px">
            <b-button v-b-modal.modal-1 style="width: 240px"
              >Launch demo modal</b-button
            >
            <b-modal
              id="modal-1"
              ref="modal"
              title="Form Daftar"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is Required"
                  :state="nameState"
                >
                  <b-form-input
                    id="name-input"
                    v-model="name"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
                 <b-form-group
                  label="Phone Number"
                  label-for="no-telp"
                  invalid-feedback="Phone Number is Required"
                  :state="nameState"
                >
                  <b-form-input
                    id="notelp"
                    v-model="notelp"
                    :state="nameState"
                    required
                  ></b-form-input>
                </b-form-group>
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
    };
  },
  methods: {
    setPekerjaan(data) {
      this.pekerjaans = data;
      console.log(this.pekerjaans);
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