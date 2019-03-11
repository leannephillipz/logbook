import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {},
  actions: {},
  getters: {
    studentstore (state){
      return state.studentstore
    },
    getstudent (state){
      return (studentlookup) => {
        return state.studentstore.find((lookup) => {
          return lookup.uid === studentlookup
        })
      }
    },
    studentsbycourse (state){
      return (studentlookup) => {
        return state.studentstore.filter((lookup) => {
          return lookup.coursecode === studentlookup
        })
      }
    },
    coursestore (state){
      return state.coursestore
    },
    coursebystudent (state){
      return (courselookup) => {
        return state.coursestore.find((lookup) => {
          return lookup.coursecode === courselookup
        })
      }
    },
    coursebycode (state){
      return (courselookup) => {
        return state.coursestore.find((lookup) => {
          return lookup.coursecode === courselookup
        })
      }
    },
    logs (state){
      return state.logstore
    },
    log (state){
      return (loglookup) => {
        return state.logstore.find((lookup) => {
          return lookup.id === loglookup
        })
      }
    },
    logsbystudent (state){
      return (studentloglookup) => {
        return state.logstore.filter((lookup) => {
          // return lookup.students === studentloglookup
          return lookup.students.find(x => x === studentloglookup)
        })
      }
    },
    logsbycourse (state){
      return (courseloglookup) => {
        return state.logstore.filter((lookup) => {
          return lookup.coursecode === courseloglookup
          // return lookup.students.find(x => x === courseloglookup)
        })
      }
    }
    }
  })

// export default new Vuex.Store({
//   state: {
//
//   },
//   mutations: {
//
//   },
//   actions: {
//
//   }
// })
