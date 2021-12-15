<template>
<div class="home">
  <Navbar/>
  <Tujuan/>
  <Kata/>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Tujuan from '@/components/Tujuan.vue'
import Kata from '@/components/Kata.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Tujuan,
    Kata
  }
}
</script>
