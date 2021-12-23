<template>
  <div class="container navbar-all">
    <div class="row navbar-cont">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="main">
                <a class="nav-link-main" href="/">Kompas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./#tujuan"
                  >Tujuan Kami</a
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/listpekerjaan">Lowongan Kerja</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nilai-Nilai Kompas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Keseharian Kami</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Mengenal Kami</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="row">
      <img src="bg.png" />
      <div class="isi">
        <h4>Jadilah Bagian Dari Perubahan Indonesia</h4>
        <p>Bekerja dengan hati dan dedikasi bersama kami</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Search from "./Search.vue";
export default {
  name: "BannerKerja",
  components: {
    // Search,
  },
};
</script>

<style>
* {
  background: transparent;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}

.row {
  justify-content: center;
  margin: auto;
}

.isi {
  position: absolute;
  z-index: 1;
  margin: 150px auto;
  text-align: center;
  color: white;
}

/* .search {
  position: absolute;
  z-index: 1;
  margin-top: 300px;
} */

.isi h4 {
  font-weight: bold;
}

.nav-link-main {
  font-weight: bold;
  font-style: italic;
  margin-left: 10px;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
}

.nav-link-main:hover {
  color: white;
  text-decoration: none;
}

.nav-link {
  margin-left: 10px;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
}

.nav-link:hover {
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-bottom: 3px solid white;
}

.nav-link::after:hover {
  content: "";
  display: block;
}

img {
  margin-top: -75px;
  width: 100%;
}

.navbar-all{
  background-image: url("../assets/bg.png");
  height: 450px;
}
</style>

