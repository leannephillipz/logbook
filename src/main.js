// Register modules
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Resources from 'vue-resource'
import Moment from 'moment'
import VueMoment from 'vue-moment'
import Vuex from 'vuex'
import { store } from './store.js'
import Firebase from 'firebase/app'

Vue.use(Resources)
Vue.use(Router)
Vue.use(Moment)
Vue.use(VueMoment)
Vue.use(Vuex)
Vue.use(Firebase)

Vue.config.productionTip = false

Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string'){
    return ''
  } else {
    // val = val.slice(0,50) + "..."
    val = val.substring(0,255) + "..."
    return val
  }
})



const app = new Vue({
  router: Router,
  store,
  render: h => h(App),
  data () {
    return {
       authlogin: true, // auth
       auth: [{
         status: false,
         txt: "false"
       }]
    }
  },
  created(){
},
}).$mount('#app')
