<template >
  <nav>
<ul>
  <li><router-link :to="{ name: 'Home' }" >Home</router-link></li>
  <!-- <li><router-link to="/newlog">New log</router-link></li> -->
  <li><router-link :to="{ name: 'Courses' }">Courses</router-link></li>
  <li><router-link :to="{ name: 'Students' }">Students</router-link></li>
</ul>
  </nav>

</template>

<script>
export default {
}
</script>
