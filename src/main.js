// Register modules
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Resources from 'vue-resource'
import Moment from 'moment'
import VueMoment from 'vue-moment'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(Resources)
Vue.use(Router)
Vue.use(Moment)
Vue.use(VueMoment)


Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string'){
    return ''
  } else {
    // val = val.slice(0,50) + "..."
    val = val.substring(0,255) + "..."
    return val
  }
})



new Vue({
  router: Router,
  render: h => h(App),
  data () {
    return {
       authlogin: false, // auth
       auth: [{
         status: false,
         txt: "false"
       }]
    }
  }
}).$mount('#app')
