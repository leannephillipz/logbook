<template>
  <main class="home">
    <!-- <h2 class="pagetitle">Learning Assistant Support</h2> -->
    <div class="components flex colx2">
      <!-- <div><p>Will introduce some quick links to students and courses for users</p></div> -->
        <notify/>
        <!-- <logs/> -->
    </div>
  </main>
</template>



<script>
// import logs from '@/components/logs.vue'
import notify from '@/components/notifications.vue'

export default {
  name: "home",
    components:{
      // 'logs': logs,
      'notify': notify
    },
    data() {
      return {
      }
    }
}


</script>

<style scoped>

</style>
