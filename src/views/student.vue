<template >
  <div class="flex profilepage">
  <div class="content">
       <h2>Student</h2>
       <p>{{student.fname}} {{student.lname}} <span>(SID: {{student.sid}})</span></p>
       <h5>Course:</h5>
       <p>{{student.course}}<span> (Code: {{student.coursecode}})</span></p>
        <h5>Flags:</h5>
       <ul v-if="student.flags" >
       <li v-for="flag in student.flags">
         {{ flag }}
       </li>
     </ul>
     <h5>Exam Support requirements:</h5>
     <ul v-if="student.examsupport" >
     <li v-for="item in student.examsupport">
       {{ item }}
     </li>
   </ul>

       <h5>Documents:</h5>
       <ul v-if="student.documents" >
       <li v-for="document in student.documents">
         {{ document }}
       </li>
     </ul>
     <h5>Notes:</h5>
     <ul v-if="student.notes" >
     <li v-for="note in student.notes">
       {{ note.note }}
     </li>
   </ul>

        </div>
        <div class="">
          <img :src="require('@/data/'+student.img.url)" alt="require works"/>

        </div>
</div>

<logbook />

</template>

<script>
import students from '@/data/students.json';
import logbook from '@/components/logs.vue'


export default {
  components: {logbook},
  data() {
    return {
      students,
      routeId: this.$route.params.sid,
      student: '',
      imgurl: '',
      studentlogs: ''
    }
  },
  created(){
        this.updatedata()
      },
  computed: {
  },
  methods: {
    updatedata: function(){
      this.routeId = this.$route.params.sid
      this.student = this.students.find(x => x.sid === this.routeId);
    }
  },
  watch: {
    $route (to, from) {
      this.updatedata()
  }
}
}
</script>
