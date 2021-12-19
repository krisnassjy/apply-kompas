<template>
   <div id="app">
    <router-view/>
    <div class="f">
          <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default{
  components: {
    Footer
  }
}
</script>

<style>

</style>
