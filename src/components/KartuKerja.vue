<template>
  <div class="card kartu bg-light mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <div class="row-md-6">
            <h3>{{ pekerjaan.lowongan }}</h3>
          </div>
          <div class="row-md-6">
            {{ pekerjaan.perusahaan }}
            <h1></h1>
          </div>
        </div>
        <div class="col-md-4">
          <b-icon-shield-lock-fill></b-icon-shield-lock-fill>
          {{ pekerjaan.lokasi }}
        </div>
        <div class="col-md-2.2">
          <div class="alert alert-success" role="alert">
            {{ pekerjaan.waktu}}
          </div>
        </div>
        <div class="col-md-1">
          <router-link :to="'/detailpekerjaan/' +pekerjaan.id_jenis" variant="light" class="btn btn-success"
            ><b-icon-arrow-right></b-icon-arrow-right></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KartuKerja",
  props: ["pekerjaan"],
  mounted: function () {
    console.log(this.pekerjaan);
  },
};
</script>

<style>
.card-body {
  width: 700px;
  height: 150px;
}
.alert {
  margin-top: 15px;
}
</style>