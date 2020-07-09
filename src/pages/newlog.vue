<template>
<main class="newlog">
<h2 class="pagetitle">Add a New Log</h2>
<form v-if="!submitted">

<!-- <p>New id:{{newlog.id}} </p> -->

  <fieldset class="group">
  <label class="date">Date:
  <input type="date" :value="newlog.datestamp" />
  </label>
  <label class="time">Duration:
  <input type="number" :value="newlog.duration" />
  </label>
  </fieldset>


    <fieldset class="group autocomplete">
    <div>
      <label class='course'>
        <input type="text" v-model="searchFilter" />
        <ul class="dropdown" v-if="searchFilter.length > 1 && show == true">
          <li v-for="course in courses()" v-bind:key="course.index" v-on:click="getdata(course.title, course.code, course.students)">{{ course.title }}</li>
        </ul>
        </label>
    </div>

      <div v-if="validcourse == true">
        Course code: {{ newlog.coursecode }}
      </div>

    </fieldset>

  <fieldset class="group" v-if="validcourse == true">
    <div v-if="suggeststudents.length" class="sopts">
    <p>Select student(s):</p>
      <ul v-for="p in findcoursestudents()" v-bind:key="p.index">
        <li><label>
          <input type="checkbox" :value="p.uid" v-model="newlog.students" >
          {{ p.fname }} {{ p.lname }}</label>
      </li>
      </ul>
    </div>
  </fieldset>


  <div class="log flex" v-if="newlog.students.length">
    <label>Log:
    <textarea placeholder="This is what happened today..." rows="7" v-model="newlog.content"/>
    </label>
    <div>
    <textarea placeholder="Strategies used..." rows="7" v-model="newlog.strategies"/>
    <textarea placeholder="Points to consider..." rows="7" v-model="newlog.consideration"/>
    </div>
      <div>
        <textarea placeholder="Progress made during session..." rows="7" v-model="newlog.progress"/>
        <textarea placeholder="Targets for next time..." rows="7" v-model="newlog.targets"/>
    </div>

  </div>
    <button v-if="newlog.students.length" v-on:click.prevent="post" class="btn">Save new log</button>
    </form>

    <div v-if="submitted">
        <p>Thanks for adding a new log!</p>
    </div>

</main>
</template>


<script>
//mport logs from '@/data/logs.json';
import LogStore from '@/data/logstore.js'
import CourseStore from '@/data/coursestore.js'
import StudentStore from '@/data/studentstore.js'

export default {
    name: 'addnewlog',
    data() {
        return {
          complete:false,
            logs: LogStore.data.logs,
            allcourses: CourseStore.data.courses,
            allstudents: StudentStore.data.students,
            validcourse: false,
            show: true,
            newlog: {
              "id": '',
              "coursecode": "",
              "title": "",
              "content": "",
              "strategies": "",
              "progress": "",
              "targets": "",
              "consideration": "",
              "type": "",
              "datestamp": "",
              "duration": "",
              "author": {
                  "fname": "",
                  "lname": "",
                  "email": ""
              },
              "students": []
            },
            submitted: false,
            suggeststudents: [],
            suggestcourses: [],
            searchFilter: ""
        }
  },
  created(){
    // computed is odd doesn't work with this...
      this.newlog.id = this.logs.length ++
      // var d = this.$moment(Date.now()).format('YYYY-MM-DD')
      // this.newlog.timestamp = this.$moment().format() //(ISO 8601, no fractional seconds)
      // this.newlog.datestamp = this.$moment(Date.now()).format('YYYY-MM-DD')
      this.newlog.duration = 0
      return this.newlog
  },
     methods: {
       post: function(){
         LogStore.methods.addLog(this.newlog)
         this.newlog = null;
         this.submitted = true;
       },
      getdata: function (title, code, students) {
        // this.seen = true
        this.newlog.title = title
        this.searchFilter = title
        this.newlog.coursecode = code
        this.suggeststudents = students
        this.validcourse = true
        this.show = false
    },

      findcoursestudents: function(){
        if (this.validcourse && this.newlog.title){
        let students = this.allstudents.filter(item => {
            return item.coursecode.toLowerCase().includes(this.newlog.coursecode.toLowerCase())
          })
          return students
          // this.suggeststudents = students
        }
    },
    courses(){
          if (this.searchFilter.length > 1){
            let courses = this.allcourses.filter(item => {
                return item.title.toLowerCase().includes(this.searchFilter.toLowerCase())
              })
              return courses
              // this.suggestcourses = courses
        }
      }
  },

  computed: {

  },

  watch: {
    // validcourse: function (newdata, olddata) {
    //   console.log("hello")
    // },
    // searchFilter: function (newdata, olddata) {
    //   if (!newdata){
    //     console.log("no data")
    //     this.newlog.coursecode = "",
    //     this.newlog.title = "",
    //     this.newlog.students = [],
    //     this.validcourse = false
    //     this.show = true
    //   }
    // },




    // suggeststudents(){
    //   return findcoursestudents()
    // }
}

}


</script>

<style scoped>
section {padding-top:3em;}
</style>
