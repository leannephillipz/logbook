<template>
<div>
<h2>Add a New Log</h2>
<form v-if="!submitted" class="new">

<p>New id:{{newlog.id}} </p>

  <fieldset class="group">
  <label class="date">Date:
  <input type="date" :value="newlog.datestamp" />
  </label>
  <label class="time">Duration:
  <input type="number" :value="newlog.duration" />
  </label>
  </fieldset>


    <fieldset >
    <label class='course'>
    Course code: {{ newlog.coursecode }}<input type="text" placeholder="Course" v-model="newlog.title"/>

      </label>

    <p v-if="newlog.title > 2" >Are you looking for...</p>
    <ul v-for="course in filtercourses()">
    <li v-on:click="getdata(course.title, course.code, course.students)">{{ course.index }} {{ course.title }}</li>
    </ul>

    <div v-if="isselected">
    <p>Select student(s):</p>
    <ul v-for="p in findcoursestudents()">
      <li>
        <input type="checkbox" :value="p.uid" v-model="newlog.students" >
        <label>{{ p.fname }} {{ p.lname }}</label>
    </li>
    </ul>
    </div>
    </fieldset>


  <fieldset>
    <label>Log:
    <textarea placeholder="This is what happened today..." rows="7" v-model="newlog.content"/>
    <textarea placeholder="Strategies used..." rows="7" v-model="newlog.strategies"/>
    <textarea placeholder="Progress made during session..." rows="7" v-model="newlog.progress"/>
    <textarea placeholder="Targets for next time..." rows="7" v-model="newlog.targets"/>
    <textarea placeholder="Points to consider..." rows="7" v-model="newlog.consideration"/>
    </label>
    </fieldset>
    <button v-on:click.prevent="add" class="btn">Save new log</button>
    </form>

    <div v-if="submitted">
        <p>Thanks for adding a new log!</p>
    </div>

</div>
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
            seen: false,
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
            suggestcourses: []
        }
  },
     methods: {
        deletelog: function(){
          this.logs.pop()
      },
        add: function(){
          this.logs.push(this.newlog)
          this.submitted = true
      },

      getdata: function (title, code, students) {
        // this.seen = true
        this.newlog.title = title
        this.newlog.coursecode = code
        this.suggeststudents = students
        this.validcourse = true
    },
        filtercourses: function(){
          if (this.newlog.title.length > 1){
          let data = this.allcourses.filter(item => {
              return item.title.toLowerCase().includes(this.newlog.title.toLowerCase())
            })
            return data
            this.suggestcourses = data
        }
      },
      findcoursestudents: function(){
        if (this.validcourse && this.newlog.title){
        let data = this.allstudents.filter(item => {
            return item.coursecode.toLowerCase().includes(this.newlog.coursecode.toLowerCase())
          })
          return data
          this.suggeststudents = data
        }
    }

  },
  created(){
    // computed is odd.
    // this.selected = this.newlog.title
      this.newlog.id = this.logs.length ++
      //var d = "2018-01-01"
      // var d = Date.now()
      //var d = this.$moment(new Date(), 'YYYY-MM-DD')
      var d = this.$time(Date.now()).format('YYYY-MM-DD')

      this.newlog.timestamp = d
      this.newlog.datestamp = d
      this.newlog.duration = 0
      return this.newlog
  },
  computed: {
    isselected() {
      //is feild empty then results are not shown
      if (this.newlog.title){
        return true
      } else {
        return false
      }
    }
  },

  watch: {
    //is feild empty then results are not shown
    isselected(newval, oldval) {
      if (newval == false){
        this.newlog.coursecode = ''
        this.validcourse = false
      }
      console.log('new: ' + newval +', old: '+ oldval);
    }
}

}


</script>

<style scoped>
section {padding-top:3em;}
</style>
