import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Courses from '@/views/courses.vue'
import Course from '@/views/course.vue'
import Students from '@/views/students.vue'
import Student from '@/views/student.vue'
import Login from '@/views/auth/login.vue'

//route guards
// import { projectAuth } from '../firebase/config'
const requireAuth =  (to, from, next) => {
  // we need to wait for firebase to get connection or it will redirect on refresh so we set up the app in main.js
  let user = true
  if (!user) {
    next({ name: 'Login'})
  } else {
    next()
  }
}






// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     console.log(router.app.$root)
//     // const auth = router.app.$data
//     // if (auth.authlogin == true) {
//     //   console.log(to);
//     //   next()
//     // } else if (auth == false){
//     //   console.log("requiresAuth");
//     //   next({ name: 'login' })
//     // }
//   }
//   next() // make sure to always call next()!
// })




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course/:code',
    name: 'Course',
    component: Course,
    params: true
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/student/:sid',
    name: 'Student',
    component: Student,
    params: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
