<template >
    <transition name="fade">
        <nav>

          <button class="toggle btn mobiletest" @click="hidden = !hidden">≡</button>

          <ul class="nav" :class="{show: !hidden}">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/newlog">New log</router-link></li>
          <li><router-link to="/logbooks">Logbooks</router-link></li>
          <!-- <li><router-link to="/logbook">Logbook</router-link></li> -->
          <li><router-link to="/students">Students</router-link></li>
          <li><router-link to="/newstudent">Add student</router-link></li>
          <!-- <li><router-link to="/search">Search</router-link></li> -->
        </ul>
        </nav>
    </transition>
</template>


<script>

export default {
    name: 'Menu',
      data: function() {
        return {
          hidden: this.visible
        }
      }
  }

</script>
<style>

.nav {display:none;}
.show {
  display: block;
}




</style>
