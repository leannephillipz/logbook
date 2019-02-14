// Register modules
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Resources from 'vue-resource'
import Moment from 'moment'
import VueMoment from 'vue-moment'
// import VueMomentLib from 'vue-moment-lib'
// Vue.use(require('vue-moment'));
// import _ from 'lodash';
// Vue.set(Vue.prototype, '_', _);

// Vue.config.productionTip = false
// Vue.config.devtools = true

// Use / Install packages
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

// Vue.filter('shuffle', val => {
//   for (var i = val.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1))
//         var temp = val[i]
//         val[i] = val[j]
//         val[j] = temp
//     }
//     return val
// })






// console.log(Vue.moment().locale()) //en
// Vue.use(VueMomentLib)

// import lodash from 'lodash' doesn't work
// import VueLodash from 'vue-lodash'
// const options = { name: 'lodash' } // customize the way you want to call it
// Vue.use(VueLodash, lodash)





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
