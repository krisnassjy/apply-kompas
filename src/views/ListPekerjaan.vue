<template>
  <div class="listpekerjaan">
      <Navbar/>
      <ListKerja/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ListKerja from '@/components/ListKerja.vue'
export default {
    name: 'ListPekerjaan',
    components: {
        Navbar,
        ListKerja
    }
}
</script>

<style>

</style>