<template >
    <transition name="fade">
        <nav :class="!hidden ? 'open' : 'close'">
          <button @click="hidden = !hidden" class="mobile">≡</button>
          <ul class="nav" :class="!hidden ? 'show' : 'hide'">
          <li @click="hidden = !hidden"><router-link to="/home">Home</router-link></li>
          <li @click="hidden = !hidden"><router-link to="/courses">Courses</router-link></li>
          <li @click="hidden = !hidden"><router-link to="/students">Students</router-link></li>
          <li @click="hidden = !hidden"><router-link to="/newlog">Add log</router-link></li>
          <li @click="hidden = !hidden"><router-link to="/newstudent">Add student</router-link></li>
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
    .show {
      width: calc(100vw - 7rem);
    }
}
</style>
