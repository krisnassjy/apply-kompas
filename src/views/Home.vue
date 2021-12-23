<template>
<div class="home">
  <BannerHome/>
  <Tujuan/>
  <Kata/>
  <Nilai/>
  <Keseharian/>
  <Mengenal/>
</div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '@/components/BannerHome.vue'
import Tujuan from '@/components/Tujuan.vue'
import Kata from '@/components/Kata.vue'
import Nilai from '@/components/Nilai.vue'
import Keseharian from '@/components/Keseharian.vue'
import Mengenal from '@/components/Mengenal.vue'

export default {
  name: "Home",
  components: {
    BannerHome,
    Tujuan,
    Kata,
    Nilai,
    Keseharian,
    Mengenal
  }
}
</script>
