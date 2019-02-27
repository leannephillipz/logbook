<template>
<main class="log">

  <!-- <div class="btns">
  <button>Edit</button>
  <button>Delete</button>
</div> -->
<div class="flex colx2 split">
  <div class="content">
<h4>{{ log.datestamp | moment("Do MMMM YYYY")}}</h4>

  <p v-for="(item, index ) in crossRefCourse(log.coursecode)" :key="index">
  <router-link :to="{ name: 'course', params: { code: log.coursecode  }}">Level {{ item.level }} {{ item.title }}</router-link>
</p>
<ul v-for="student in getstudent" :key="student.uid">
<li>With: <router-link :to="{ name: 'student', params: { uid: student.uid  }}">{{ student.fname}} {{ student.lname}}</router-link></li>
</ul>
<p>{{ log.content }}</p>
<p v-if="log.strategies">Strategies used: {{ log.strategies }}</p>
<p v-if="log.progress">Progress made: {{ log.progress }}</p>
<p v-if="log.targets">Targets for next time: {{ log.targets }}</p>
<p v-if="log.consideration">Points to consider: {{ log.consideration }}</p>
<p>Written by: {{ log.author.fname }} {{ log.author.lname }}</p>

</div>
 <div class="side">

</div>
</div>
</main>
</template>



<script>
// import logs from '@/data/logs/data.json'
import LogStore from '@/data/logstore.js'
import StudentStore from '@/data/studentstore.js'
import CourseStore from '@/data/coursestore.js'

export default {
    name: "log",
    data() {
        return {
          routeId: this.$route.params.id,
          alllogs: LogStore.data.logs,
          allstudents: StudentStore.data.students,
          courses: CourseStore.data.courses,
          log: {},
        }
    },
    created(){
           this.log = this.alllogs.find(x => x.id === this.routeId);
    },
    methods: {
      crossRefCourse(check) {
        // return this.allstudents
        return this.courses.filter(item => {
               return item.coursecode.includes(check);
             })
           }
    },
    computed: {
      getlog (){
        
      },
      getstudent: function(){
            const newarr = new Array()
            this.log.students.forEach(el1 => {
              const thisuid = el1

              const filtering = this.allstudents.filter((item) => {
                return item.uid.toLowerCase().includes(thisuid)
                 })

              // console.log(filtering[0].fname + filtering[0].lname  + filtering[0].uid)
              newarr.push(filtering[0])
                })
                return newarr
          }
    }

}

</script>
