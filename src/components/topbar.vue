<template >
<section class="topbar">
<ul>
<li @click="togglelogin()" >{{ logintxt }}</li>
<!-- <li>
  <div class="profile">
  </div></li> -->
</ul>
</section>
</template>


<script>

import { ref } from 'vue'

export default {
    name: 'topbar',

      setup(){
        const logintxt = ref("Logout")

        const togglelogin = () => {
          if (logintxt.value == "Logout") {
                logintxt.value = "Login"
                // console.log(logintxt.value)
             }
            else if (logintxt.value == "Login") {
                   logintxt.value = "Logout"
                   // console.log(logintxt.value)
                }
        }
        return {logintxt, togglelogin}
      }

  }

</script>
