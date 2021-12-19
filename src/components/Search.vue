<template>
  <div class="isian">
    <form action="" class="form">
      <div class="input-group col-md-4 mt-2 mr-0">
        <span class="input-group-text" id="basic-addon1"
          ><b-icon-search></b-icon-search>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Cari Karier"
          aria-label="Karier"
          aria-describedby="basic-addon1"
          @keyup="searchPekerjaan"
        />
      </div>
      <div class="form-group col-md-4">
        <select class="form-control" name="departemen" id="departemen">
          <option value="">Semua Departemen</option>
          <option value="">IT Support</option>
          <option value="">UI/UX</option>
          <option value="">Partnership</option>
          <option value="">Digital Marketing</option>
        </select>
      </div>
      <div class="form-group col-md-3 mr-3 mt-2">
        <select class="form-control" name="lokasi" id="lokasi">
          <option value="">Semua Lokasi</option>
          <option value="">Tangerang</option>
          <option value="">Bandung</option>
          <option value="">Jakarta</option>
          <option value="">Surabaya</option>
        </select>
      </div>
      <button class="btn btn-success mt-2 mr-2"><b-icon-search></b-icon-search></button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
    return {
      perkerjaan: [],
      search: [],
    };
  },
  methods: {
    setPekerjaan(data) {
      this.pekerjaan = data;
    },
    searchPekerjaan() {
      axios
        .get("http://localhost:3000/pekerjaan?q=" + this.search)
        .then((response) => this.setPekerjaan(response.data))
        .catch((error) => console.log("Gagal : ", error));
    },
  },
};
</script>

<style>
.isian {
  background-color: white;
  width: 850px;
  height: 60px;
  box-shadow: 3px 2px #888888;
}
.form {
  display: flex;
  margin: 1px auto;
}
.input-group {
    color: black;
}
button{
    height: 40px;
    margin-top: 20px;
}

</style>