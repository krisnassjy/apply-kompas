<template>
<div class="home">
  <BannerHome/>
  <Tujuan/>
  <Kata/>
</div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '@/components/BannerHome.vue'
import Tujuan from '@/components/Tujuan.vue'
import Kata from '@/components/Kata.vue'

export default {
  name: "Home",
  components: {
    BannerHome,
    Tujuan,
    Kata
  }
}
</script>
