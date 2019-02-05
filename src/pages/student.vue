<template>
<main class="student">
  <div class="flex profilepage">
  <div class="content">
       <h2 class="pagetitle">Student</h2>
       <p>{{student.fname}} {{student.lname}}<span>(ID: {{student.uid}})</span></p>
       <h5>Course:</h5>
       <p>{{student.course}}<span> (Code: {{student.coursecode}})</span></p>
       <h5>Flags:</h5>
       <ul v-if="student.flags">
       <li v-for="(flag, index) in student.flags" :key="index">
         {{ flag }}
       </li>
     </ul>
     <h5>Exam Support requirements:</h5>
     <ul v-if="student.examsupport" >
     <li v-for="(item, index) in student.examsupport" :key="index">
       {{ item }}
     </li>
   </ul>

       <h5>Documents:</h5>
       <ul v-if="student.documents" >
       <li v-for="(doc, index) in student.documents" :key="index">
         {{ doc }}
       </li>
     </ul>
     <h5>Extra Notes:</h5>
     <ul v-if="student.notes" >
     <li v-for="(note, index) in student.notes" :key="index">
       {{ note.note }}
     </li>
   </ul>
  <hr class="spacer">
  <div class="">
       <h5>Logs:</h5>

         <ul class="list " v-for="(log, index) in getlogs" :key="index">
           <li>
           <ul class="flex">
             <li class="sm">{{ log.datestamp }}</li>
             <li>{{ log.course }} </li>
             <li>{{ log.content | snippet }}</li>
             <li class="sm"><router-link :to="{ name: 'log', params: { id: log.id  }}">Read</router-link></li>
           </ul>
         </li>
         </ul>
         </div>

       </div>

       <div>
       <img :src="require('@/data/students/'+student.uid+'.jpg')" alt="require works"/>
       </div>
       </div>
</main>
</template>

<script>
import StudentStore from '@/data/studentstore.js'
import LogStore from '@/data/logstore.js'

export default {
  name: 'student',
    data() {
        return {
          routeId: this.$route.params.id,
          allstudents: StudentStore.data.students,
          alllogs: LogStore.data.logs,
          student: {}
        }
    },
    created(){
          this.routeId = this.$route.params.uid
          this.student = this.allstudents.find(x => x.uid === this.routeId);
        },
    computed: {
      getlogs: function(){
         // const v = this
         // const logs = v.alllogs
         // return logs
         return this.alllogs
      }
    },
    methods: {
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

img {min-height:50px;width:100%;}
</style>
