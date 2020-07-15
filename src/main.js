// Register modules
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
// import Resources from 'vue-resource'
// import Moment from 'moment'
// import VueMoment from 'vue-moment'
// import VueMomentLib from 'vue-moment-lib'
// Vue.use(require('vue-moment'));

// import _ from 'lodash';
// Vue.set(Vue.prototype, '_', _);



// Vue.config.productionTip = false
// Vue.config.devtools = true

// Use / Install packages
// Vue.use(Resources)
Vue.use(Router);
// Vue.use(Moment)
// Vue.use(VueMoment)

Vue.filter('capitalize', function (value) {
  return value.toUpperCase()
}) // | capitalize
Vue.filter('snippet', function (value) {
  return value.slice(0,100) + "...";
}) // | capitalize


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
       authlogin: false,
       auth: [{
         status: false,
         txt: "false"
       }]
    }
  }
}).$mount('#app')
