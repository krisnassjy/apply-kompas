<template>
  <div class="container slideshow" id="keseharian">
      <div class="row">
          <div class="col-md-6">
              <h3>Keseharian Kami</h3>
              <p>Kompas adalah rumah kedua, tempat dimana kami tidak hanya bekerja, tetapi juga berinteraksi layaknya keluarga.</p>
          </div>
          <div class="col-md-6">
              <b-carousel
              consols
              indicators
              img-width="400"
              img-height="480"
              >
              <b-carousel-slide img-src="kompas4.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="kompas2.jpg"></b-carousel-slide>
              </b-carousel>
          </div>
      </div>
     
  </div>
</template>

<script>
export default {
  name: "Keseharian",
};
</script>

<style>
.slideshow{
    margin-top: 50px;
}
</style>