<template lang="html">
  <div class="flex colx2">
  <div>
       <h2>Course</h2>
       <p>{{ course.title }}</p>
       <p>Code Code: {{ course.code }}</p>
       <p>Level: {{ course.level }}</p>
       <p>Discipline: {{ course.discipline }}</p>
       <p>Room(s): {{ course.room }}</p>
       <p>Campus: {{ course.campus }}</p>
       <p>Tutor: {{ course.tutor }}</p>
       <p>Qualification: {{ course.qual }}</p>
       <p>Awarding Body:  {{ course.awardbody }}</p>
       </div>
       <div>
         <p>Students:</p>
         <ul>
         <li v-for="student in coursestudents" :key="student.sid">
            <router-link :to="{ name: 'Student', params: { sid: student.sid  }}">
              {{ student.fname}} {{ student.lname}}
            </router-link>

         </li>
       </ul>
       </div>
       </div>

  <logbook />

</template>

<script>
import students from '@/data/students.json';
import courses from '@/data/courses.json';
import logbook from '@/components/logs.vue'

export default {
  components: {logbook},
  data() {
    return {
        students,
        courses,
        routeId: this.$route.params.code,
        course: '',
        coursestudents: ''
      }
  },
  created(){
        this.course = this.courses.find(x => x.code === this.routeId);
        this.coursestudents = this.students.filter(x => x.coursecode === this.routeId);
        console.log(this.coursestudents)
  }

}
</script>

<style lang="css" scoped>
</style>
