<template>
<div class="home">
  <BannerHome/>
  <ListKerja/>
</div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '@/components/BannerHome.vue'
import ListKerja from '@/components/ListKerja.vue'

export default {
  name: "ListPekerjaan",
  components: {
    BannerHome,
    ListKerja
  }
}
</script>
