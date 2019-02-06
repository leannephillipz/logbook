<template >
    <transition name="fade">
        <nav>
          <button class="mob" @click="hidden = !hidden">≡</button>
          <ul class="nav" :class="hidden ? 'show' : 'hide'">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/newlog">New log</router-link></li>
          <li><router-link to="/logbooks">Logbooks</router-link></li>
          <li><router-link to="/students">Students</router-link></li>
          <li><router-link to="/newstudent">Add student</router-link></li>
          <!-- <li><router-link to="/search">Search</router-link></li> -->
        </ul>
        </nav>
    </transition>
</template>


<script>
export default {
    name: 'Navigation',
      data: function() {
        return {
          hidden: true,
        }
      }
  }
</script>
<style scoped>



@media screen and (max-width: 1000px) {

  .hide {
    display:none;
    }
    .show {
        display: block;
    }
}
</style>
