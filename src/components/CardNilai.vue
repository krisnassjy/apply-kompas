<template>
  <div class="card shadow nilai card-product">
    <!-- <img :src="'assets/images/' +product.gambar" class="card-img-top" alt="..." /> -->
    <div class="card-body" style="width: 20rem; height: 10rem;">
      <h4 class="card-title">{{nilai.judul}}</h4>
      <p class="card-text">
        {{nilai.isi}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNilai",
  props: ["nilai"],
};
</script>

<style>
.nilai{
  height: 205px;
}
</style>