<template>
  <section>
    <h2>component!!!</h2>
      {{auth}}

  <button class="btn" v-on:click="change">Change</button>

  </section>
</template>


<script>
export default {
  name: 'auth',
  props: ['auth'],
  data() {
        return {
    }
  },
  methods: {
      change: function () {
        //return this.$router.push({ name: 'home'})
        // this.$parent.authlogin = true
        $root.auth = true
      }
      }

}


//inside parent <login v-bind:auth="authorisation"/>

</script>
