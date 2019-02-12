<template>
<main class="student">
  <div class="flex profilepage">
  <div class="content">
       <h2 class="pagetitle">Student</h2>
       <h3>{{student.fname}} {{student.lname}}</h3>
        <p>ID: {{student.uid}}<br>
         Email: <a v-bind:href=" 'mailto:' + student.email">{{student.email}}</a></p>
       <h5>Course:</h5>
       <p v-for="(item, index) in courseLookup(student.coursecode)" :key="index">{{ item.title }}
         <br>Level: {{ item.level }}
          <br>Code: {{student.coursecode}}
        </p>

      <div v-if="student.documents">
             <h5>Documents:</h5>
             <ul class="tags" >
             <li v-for="(doc, index) in student.documents" :key="index">
               {{ doc }}
             </li>
      </ul>
      </div>

      <div v-if="student.flags">
       <h5>Key points to be aware of:</h5>
       <ul v-if="student.flags" class="tags">
       <li v-for="(flag, index) in student.flags" :key="index">
         {{ flag }}
       </li>
     </ul>
   </div>

   <div v-if="student.examsupport">
     <h5>Exam Support requirements:</h5>
     <ul class="tags">
     <li v-for="(item, index) in student.examsupport" :key="index">
       {{ item }}
     </li>
   </ul>
 </div>

<div v-if="student.notes" >
  <hr class="spacer"/>
       <h5>Extra Notes:</h5>
       <ul >
       <li v-for="(note, index) in student.notes" :key="index">
         {{ note.note }}
       </li>
     </ul>
</div>


  <div v-if="logs" class="block">
    <hr class="spacer"/>
       <h5 id="logs">Logs:</h5>
         <ul class="cards" v-for="(log, index) in getlogs(student.uid)" :key="index">
           <li>
             <p>{{ log.content | snippet }} <router-link :to="{ name: 'log', params: { id: log.id  }}">Read more...</router-link></p>
             <p>{{ log.datestamp | moment("DD/MM/YYYY")}}</p>
         </li>
         </ul>
         </div>

       </div>

       <div class="profile side">
       <img :src="require('@/data/'+student.img.url)" :alt="student.img.alt"/>
       </div>
       </div>
</main>
</template>

<script>
import StudentStore from '@/data/studentstore.js'
import LogStore from '@/data/logstore.js'
import CourseStore from '@/data/coursestore.js'

export default {
  name: 'student',
    data() {
        return {
          routeId: this.$route.params.id,
          allstudents: StudentStore.data.students,
          alllogs: LogStore.data.logs,
          allcourses: CourseStore.data.courses,
          logs: ''
        }
    },
    created(){
          this.routeId = this.$route.params.uid
          this.student = this.allstudents.find(x => x.uid === this.routeId);
        },
    computed: {

    },
    methods: {
      getlogs(code){
       let lookup = this.alllogs.filter(log => {
           return log.students.find(x => x === code);
           })
           this.logs = lookup
           return lookup

      },
      courseLookup(code) {
        // return this.allcourses
        const allcourses = this.allcourses
          return allcourses.filter(item => {
               return item.code.match(code);
             })
      },
      updatedata: function(){
        this.routeId = this.$route.params.uid
        this.student = this.allstudents.find(x => x.uid === this.routeId);
      }
    },
    watch: {
      $route () {
        this.updatedata()
    }

    }

}

</script>

<style scoped>


</style>
