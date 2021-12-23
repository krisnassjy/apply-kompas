<template>
  <div class="card kartu bg-light mb-3">
    <div class="card-body h-100">
      <div class="row ">
        <div class="col-md-4">
          <div class="row-md-6">
            <h3>{{ karir.lowongan }}</h3>
          </div>
          <div class="row-md-6">
            {{ karir.perusahaan }}
            <h1></h1>
          </div>
        </div>
        <div class="col-md-4">
          <b-icon-shield-lock-fill></b-icon-shield-lock-fill>
          {{ karir.lokasi }}
        </div>
        <div class="col-md-2.2">
          <div class="alert alert-success" role="alert">
            {{ karir.waktu}}
          </div>
        </div>
        <div class="col-md-1">
          <router-link :to="'/detailpekerjaan/' +karir.id" variant="light" class="btn btn-success"
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
  props: ["karir"],
  mounted: function () {
    console.log(this.pekerjaan);
  },
};
</script>

<style>
.card-body {
  width: 700px;
  height: 150px;
  margin: 0px auto;
}
.alert {
  margin-top: 15px;
}
</style>