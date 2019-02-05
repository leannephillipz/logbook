<template>
<section class="login">
  <div>
  <h2>Logbook prototype</h2>
<form>
<label>
Name <input type="text" v-model="username" value="" placeholder="user name" />
</label>
<label>
Password <input type="password" v-model="password" value="" placeholder="password" />
</label>
<button class="btn" v-on:click="login">Login</button>
<p>{{feedback}}</p>
</form>
</div>
</section>
</template>


<script>

// import mockAccount from '@/data/mockAccount.json'

export default {
  name: 'login',
  data() {
        return {
          username: '',
          password: '',
          feedback: ""
    }
  },
  methods: {
    login(e) {
      e.preventDefault()

    if (this.username == "admin" && this.password == "enter") {

      this.$root.authlogin = true
      return this.$router.push({ name: 'home'})
      this.feedback = "Correct"
    } else {
      this.feedback = "Sorry, this login data is invalid, try again."
    }

      // if (this.username === "admin" && this.paswword === "enter") {
      //   this.$route('authlogin', true)
      //
      // } else {
      //   console.log("error");
      // }
      // return this.$router.push({ name: 'home'})
      // return this.$emit({'authlogin': true})
      // return this.$parent.authlogin = true
    }
      }

}


</script>
