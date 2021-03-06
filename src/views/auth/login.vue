<template>
<section class="login">
  <div>
  <h2>Logbook prototype</h2>
<form>
<label>
Name <input type="text" v-model="username" placeholder="user name" />
</label>
<label>
Password <input type="password" v-model="password" placeholder="password" />
</label>
<button class="btn" @click="login">Login</button>
<p>{{feedback}}</p>
</form>
</div>
</section>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'

export default {
   setup(){
     const username = "Bugs"
     const password = "enter"
     const feedback = "feedback"
     // console.log(app)
     onMounted(() => {
      // console.log(this.$store.value)
    })

    return {username, password, feedback}
   },

   methods: {
     login(e) {
       e.preventDefault()

     if (this.username == "Bugs" && this.password == "enter") {

       this.$root.authlogin = true
       return this.$router.push({ name: 'Home'})
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

<!-- <template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" name="email">
    <input type="password" placeholder="Password" v-model="password" name="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Authorising Login</button>
  </form>
</template>

<script>
// using @ means start at the project src root
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
        router.push({name: 'Home'})
      }
    }

    return { email, password, handleSubmit, error, isPending }
  }
}
</script> -->
