<template >
<section class="topbar">
<ul>
<li>Total notifications: {{notify.length}}</li>
<li ><button @click="toggellogin">Logout</button></li>
<!-- <li>
  <div class="profile">
  </div></li> -->
</ul>
</section>
</template>


<script>

import NotifyStore from '@/stores/NotifyStore.js';

export default {
    name: 'topbar',
    props: {
      visible: {
        type: Boolean,
        default: true
      }
    },
      data: function() {
        return {
          hidden: !this.visible,
          notify: NotifyStore.data.notes
        }
      },
      methods: {
        toggellogin: function () {
          //this.$root.authlogin = true
          this.$router.push({ path: 'login' })
          this.$root.authlogin = false
          // if (this.$root.authlogin) {
          //   return this.logintxt = "Logout"
          //    return this.$root.authlogin = false
          //  } else {
          //    return this.$root.authlogin = true
          //    return this.logintxt = "Login"
          //  }

        }
      },
      computed: {
        // thislogintxt: function () {
        //    if (this.$root.authlogin) {
        //       return this.logintxt = "Logout"
        //     } else {
        //       return this.logintxt = "Login"
        //     }
        //     }
      }
  }

</script>
<style scoped>

</style>
