<template>
  <div class="container kata">
    <div class="quotes-content">
      <h3 class="content text-center">
        "Bekerja dalam bidang apapun sesungguhnya adalah interaksi,
        <br />
        kombinasi yang kreatif antara intelek dan hati"
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kata",
};
</script>

<style>
.kata {
  min-height: 400px;
  background-image: url("../assets/nature.png");
  background-size: cover;
}
.content {
  padding-top: 200px;
  color: white;
  font-style: italic;
  font-weight: bold;
  text-shadow: #FC0 1px 0 10px;
}
</style>