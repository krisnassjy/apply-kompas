<template>
  <div class="detil">
      <BannerHome/>
      <DetailKerja/>
  </div>
</template>

<script>
import BannerHome from '@/components/BannerHome.vue'
import DetailKerja from '@/components/DetailKerja.vue'
export default {
    name: 'DetailPekerjaan',
    components: {
        BannerHome,
        DetailKerja
    }
}
</script>

<style>

</style>