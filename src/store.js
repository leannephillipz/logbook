import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase/app'
import { db } from '@/firebase'
import { getallstudents } from '@/firebase'

import Allstudents from '@/data/students.json'
import Allcourses from '@/data/courses.json'
import Alllogs from '@/data/logs.json'

Vue.use(Vuex)


export const store = new Vuex.Store({
  state: {
    studentstore: Allstudents,
    coursestore: Allcourses,
    logstore: Alllogs,
    // user: {
    //   id: '23489834'
    // }
  },
  getters: {

    getstudent (lookup){
      return (studentlookup) => {
        return lookup.studentstore.find((item) => {
          return item.uid === studentlookup
        })
      }
    },
    studentsbycourse (lookup){
      return (studentlookup) => {
        return lookup.studentstore.filter((item) => {
          return item.coursecode === studentlookup
        })
      }
    },
    coursestore (lookup){
      return lookup.coursestore
    },
    coursebystudent (lookup){
      return (courselookup) => {
        return lookup.coursestore.find((item) => {
          return item.coursecode === courselookup
        })
      }
    },
    coursebycode (lookup){
      return (courselookup) => {
        return lookup.coursestore.find((item) => {
          return item.coursecode === courselookup
        })
      }
    },
    logs (lookup){
      return lookup.logstore
    },
    log (lookup){
      return (loglookup) => {
        return lookup.logstore.find((item) => {
          return item.id === loglookup
        })
      }
    },
    logsbystudent (lookup){
      return (studentloglookup) => {
        return lookup.logstore.filter((item) => {
          // return lookup.students === studentloglookup
          return item.students.find(x => x === studentloglookup)
        })
      }
    },
    logsbycourse (lookup){
      return (courseloglookup) => {
        return lookup.logstore.filter((item) => {
          return item.coursecode === courseloglookup
          // return lookup.students.find(x => x === courseloglookup)
        })
      }
    }
  },
  mutations: {
    addstudent (state, payload) {
      state.studentstore.push(payload)
    },
    addlog (state, payload) {
      state.logstore.push(payload)
    }
  },
  actions: {

    addstudent: (context, payload) => {
      setTimeout(function(){
        context.commit('addstudent', payload)
        //mutate state once this is done. this allows asynic
      }, 2000)
    }
  },
  })



// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   }
// })
