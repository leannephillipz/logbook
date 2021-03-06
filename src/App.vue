<template>
  <div class="theme dark">
    <topbar/>
    <navbar/>
    <main>
    <router-view/>
  </main>

  </div>
</template>


<script>
import topbar from '@/components/topbar.vue'
import navbar from '@/components/navbar.vue'

export default {
    components:{ navbar, topbar },
    setup (){

    }
}
</script>

<style>
.theme {min-height:100vh;}
.theme.dark {
  background-image: url(~@/assets/noise.png), url(~@/assets/bg.png);
  background-size: auto, 100% 100%;
  background-repeat: repeat, no-repeat;
  background-attachment: fixed;
  color:#fff;
}
</style>
