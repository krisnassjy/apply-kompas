<template>
  <div class="container">
    <div class="row">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/foods" class="text-dark">Foods</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Food Order</li>
        </ol>
      </nav>
    </div>
    <div class="row">
        <img src="job.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ListKerja",
};
</script>

<style>
</style>