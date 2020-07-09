<template>
<main class="course">
<div class="flex colx2">
<div>
     <h2 class="pagetitle">Course</h2>
     <p>{{ course.title }}</p>
     <p>Code Code: {{ course.code }}</p>
     <p>Level: {{ course.level }}</p>
     <p>Discipline: {{ course.discipline }}</p>
     <p>Room(s): {{ course.room }}</p>
     <p>Campus: {{ course.campus }}</p>
     <p>Tutor: {{ course.tutor }}</p>
     <p>Award: {{ course.qualification }}</p>
     <!-- <p>Students:</p>
     <ul>
     <li v-for="student in course.students" v-bind:key="student.uid">{{ student }}</li>
   </ul> -->
     </div>
     <div>
       <p>Students:</p>
       <ul>
       <li v-for="student in getstudent" v-bind:key="student.index"><router-link :to="{ name: 'student', params: { uid: student.uid  }}">{{ student.fname}} {{ student.lname}}</router-link></li>
     </ul>
     </div>
     </div>
     <!-- <div v-for="x in goget" v-bind:key="x.id"> {{ x.fname }}</div> -->
</main>
</template>


<script>
import CourseStore from '@/data/coursestore.js'
import StudentStore from '@/data/studentstore.js'

export default {
  name: 'course',
  data() {
    return {
        routeId: this.$route.params.code,
        courses: CourseStore.data.courses,
        allstudents: StudentStore.data.students,
        course: ''
      }
  },
  created(){
        this.course = this.courses.find(x => x.code === this.routeId);
  },
  computed: {

    getstudent: function(){
          const filterstudents = this.course.students

          const newarr = new Array()
          filterstudents.forEach(thisval => {
            const thisuid = thisval

            const filtering = this.allstudents.filter((item) => {
              return item.uid.toLowerCase().includes(thisuid)
               })
            newarr.push(filtering[0])

              })
              return newarr
            }

}
}

</script>
