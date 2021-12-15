<template>
  <div class="container mt-5">
    <div class="row">
      <h2>Tujuan Kami</h2>
    </div>
    <div class="row tulisan">
      <div class="col-md-6">
        <h4>Bekerja Dengan Tujuan Baik</h4>
        <br>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et placeat
          nesciunt cum reiciendis, eum delectus! Error soluta temporibus
          sapiente molestias, mollitia praesentium reprehenderit laborum ex,
          pariatur ipsam facilis ad veniam.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          assumenda sequi, porro enim reprehenderit eos fugiat voluptas ducimus
          et corrupti rem molestias nostrum voluptate perferendis, omnis
          temporibus optio quibusdam suscipit!
        </p>
      </div>
      <div class="col-md-6">
        <img class="gambar mt-3" src="berita2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tujuan",
};
</script>

<style>
h2 {
  border-bottom: 2px solid orange;
}
h4{
  font-weight: bold;
}
.content {
  margin-top: 80px;
}
.col-kiri {
  color: black;
}

.tulisan{
  margin-top: 100px
}
.gambar{
  width: 400px;
  height: auto;
  float: right;
}
</style>