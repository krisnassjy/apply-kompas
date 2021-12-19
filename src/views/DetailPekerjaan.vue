<template>
  <div class="detil">
      <BannerKerja/>
      <DetailKerja/>
  </div>
</template>

<script>
import BannerKerja from '@/components/BannerKerja.vue'
import DetailKerja from '@/components/DetailKerja.vue'
export default {
    name: 'DetailPekerjaan',
    components: {
        BannerKerja,
        DetailKerja
    }
}
</script>

<style>

</style>