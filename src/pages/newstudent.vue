<template>
<main class="newstudent addnew">
  <h2 class="pagetitle">Add a New Student</h2>

  <form v-if="!submitted">
        <fieldset class="group">
          <label>Number
      <input type="text" v-model.lazy="student.uid" /></label>
      <label>Date of birth
      <input type="date" v-model="student.dob" /></label>
    </fieldset>
    <fieldset class="group">
      <label>First name:
      <input type="text" v-model.lazy="student.fname" /></label>
      <label>Last name:
      <input type="text" v-model.lazy="student.lname" /></label>
    </fieldset>
      <div class="opts">
        <label>
        <input type="checkbox" v-model="student.documents" value="EHCP" >Has EHCP</label>
        <label>
          <input type="checkbox" v-model="student.documents" value="Disclosure" >Has submitted a disclosure</label>
      </div>

      <label>Course Code
      <input type="text" v-model.lazy="student.coursecode" /></label>
      <label>Email
      <input type="text" v-model.lazy="student.email" /></label>
      <button v-on:click.prevent="post" class="btn">Add Student</button>
  </form>
  <div v-if="submitted">
      <p>Thanks for adding a student</p>
  </div>
</main>
</template>


<script>
import StudentStore from '@/data/studentstore.js'
// import moment from 'moment'
//var link = 'https://learningassistancesoftware.firebaseio.com/students.json';

export default {
  name: 'newstudent',
    data () {
        return {
            student: {
                fname: '',
                lname: '',
                uid: '',
                dob:'',
                email: '',
                documents: [],
            },
            submitted: false
        }
    },
    methods: {
        post: function(){
          StudentStore.methods.addStudent(this.student)
          this.student = null;
          this.submitted = true;
            // this.$http.post(link, this.student).then(function(data){
            //     console.log(data);
            //     this.submitted = true;
            // })
        }
    },
    computed: {
      // date(){
      //   let newdate = this.$moment().format("YYYY-MM-DD")
      //   this.student.dob = newdate
      //   return newdate
      // }

    }
}
</script>

<style scoped>
section {padding-top:3em;}
</style>
