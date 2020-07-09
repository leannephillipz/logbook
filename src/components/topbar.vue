<template >
<section class="topbar">
<ul>
<li>Total notifications: {{notify.length}}</li>
<!-- <li >|  <a v-on:click="toggellogin">{{ thislogintxt }}</a></li> -->
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
          notify: NotifyStore.data.notes,
          // logintxt: "hello"
        }
      },
      methods: {
        // toggellogin: function () {
        //   //this.$root.authlogin = true
        //   if (this.$root.authlogin) {
        //      return this.$root.authlogin = false
        //      router.push({ path: 'login' })
        //    } else {
        //      return this.$root.authlogin = true
        //    }
        //
        // }
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
