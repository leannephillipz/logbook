<template>
<main class="student">
<div class="flex profilepage">
<div class="content">
     <h2 class="pagetitle">Student</h2>
     <p>{{student.fname}} {{student.lname}}<span> (ID: {{student.uid}})</span></p>
     <h5>Course:</h5>
     <p>{{student.course}}<span> (Code: {{student.coursecode}})</span></p>
     <h5>Flags:</h5>
     <ul v-if="student.flags" >
     <li v-for="flag in student.flags" v-bind:key="flag.index">
       {{ flag }}
     </li>
   </ul>
   <h5>Exam Support requirements:</h5>
   <ul v-if="student.examsupport" >
   <li v-for="item in student.examsupport" v-bind:key="item.index">
     {{ item }}
   </li>
 </ul>

     <h5>Documents:</h5>
     <ul v-if="student.documents" >
     <li v-for="document in student.documents" v-bind:key="document.index">
       {{ document }}
     </li>
   </ul>
   <h5>Extra Notes:</h5>
   <ul v-if="student.notes" >
   <li v-for="note in student.notes" v-bind:key="note.index">
     {{ note.note }}
   </li>
 </ul>
<hr class="spacer">
     <h5>Logs:</h5>

       <ul class="list " v-for="log in getlogs" v-bind:key="log.index">
         <li>
         <ul class="flex">
           <!-- <li class="sm">{{ log.datestamp | moment("DD/MM/YYYY") }}</li> -->
           <li>{{ log.course }} </li>
           <!-- <li>Add qualification and level</li> -->
           <li>By: {{ log.author.fname }} {{ log.author.lname }}</li>
           <li class="sm"><router-link :to="{ name: 'log', params: { id: log.id  }}">Read</router-link></li>
         </ul>
       </li>
       </ul>

     </div>

     <div>
       <img  v-if="student.img" :src="require('@/data/'+student.img.url)" :alt="student.img.alt" class="img"/>
       <img v-else :src="require('@/data/students/placeholder.jpg')" alt="no image" />

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
          routeId: this.$route.params.uid,
          students: StudentStore.data.students,
          logs: LogStore.data.logs,
          student: '',
          imgurl: '',
          studentlogs: ''
        }
    },
    created(){
          this.updatedata()
        },
    computed: {
      getlogs: function(){
         const v = this
         const logs = v.logs
         return logs
      }
    },
    methods: {
      updatedata: function(){
        this.routeId = this.$route.params.uid
        this.student = this.students.find(x => x.uid === this.routeId);
      }
    },
    // watch: {
    //   $route (to, from) {
    //     this.updatedata()
    // }
    // }

}

</script>

<style scoped>

img {min-height:50px;width:100%;}
</style>
