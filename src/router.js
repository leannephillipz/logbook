import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Logbooks from './pages/logbooks.vue'
import Log from './pages/log.vue'
import Logs from './pages/logs.vue'
import Students from './pages/students.vue'
import Student from './pages/student.vue'
import Login from './pages/login.vue'
import Newlog from './pages/newlog.vue'
import Search from './pages/search.vue'
import Course from './pages/course.vue'
import Newstudent from './pages/newstudent.vue'

Vue.use(VueRouter)

const router = new VueRouter({
   // mode: 'history', // removed the hash - must set up server to do this
   scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  // //base: '/projects/logbook/' //production
  // //base: __dirname,
  // base: process.env.BASE_URL,
  routes: [
    // { path: '/',
    //   redirect: function() {
    //     const auth = this.$root.$data.authlogin
    //     if (auth) {
    //       return { path: '/home' }
    //     } else {
    //       return { path: '/login' }
    //     }
    //   }
    // },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },

    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/logbooks',
      name: 'logbooks',
      component: Logbooks,
      meta: { requiresAuth: true }
    },
    {
      path: '/logs/:code',
      name: 'logs',
      component: Logs,
      meta: { requiresAuth: true }
    },
    {
      path: '/log/:id',
      name: 'log',
      component: Log,
      meta: { requiresAuth: true }
    },
    {
      path: '/newlog',
      name: 'newlog',
      component: Newlog,
      meta: { requiresAuth: true }
    },
    {
      path: '/students',
      name: 'students',
      component: Students,
      meta: { requiresAuth: true }
    },
    {
      path: '/student/:uid',
      name: 'student',
      component: Student,
      meta: { requiresAuth: true }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: '/course/:code',
      name: 'course',
      component: Course,
      meta: { requiresAuth: true }
    }
    ,
    {
      path: '/newstudent',
      name: 'newstudent',
      component: Newstudent,
      meta: { requiresAuth: true }
    }
  ],
  methods: {},
//   scrollBehavior (to, from, savedPosition) {
//   return { x: 0, y: 0 }
// }

})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // console.log(router.app.$root)
//      console.log(router.app.$root.$data.authlogin)
//     const auth = router.app.$root.$data.authlogin
//     if (auth == true) {
//       console.log(to);
//       next()
//     } else if (auth == false){
//       console.log("requiresAuth");
//       next({ name: 'login' })
//     }
//   }
//   next() // make sure to always call next()!
// })

export default router
