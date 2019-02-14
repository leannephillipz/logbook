<template>
<main class="course">

  <h2 class="pagetitle">Course</h2>
  <h3>{{ course.title }}</h3>

<div class="flex colx2">
<div class="content">
     <p><b>Code Code:</b> {{ course.coursecode }}</p>
     <p><b>Level:</b> {{ course.level }}</p>
     <p><b>Industry / Discipline:</b> {{ course.discipline }}</p>
     <p><b>Room(s):</b> {{ course.room }}</p>
     <p><b>Campus:</b> {{ course.campus }}</p>
     <p><b>Tutor:</b> {{ course.tutor }}</p>
     <p><b>Award:</b> {{ course.qualification }}</p>
     </div>
     <div class="side">
       <p>Students:</p>
       <ul class="tags">
       <li v-for="(student, index) in getstudent" :key="student.uid" :class="[student.documents, { tag: student.documents[0] }]">
         <router-link :to="{ name: 'student', params: { uid: student.uid  }}">{{ student.fname}} {{ student.lname}}</router-link>
       </li>
     </ul>
     </div>
     </div>
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
        this.course = this.courses.find(x => x.coursecode === this.routeId);
  },
  computed: {

    getstudent: function(){
          let allstudents = this.course.students

          const newarr = new Array()
          allstudents.forEach(thisval => {
            let thisuid = thisval

            let filtering = this.allstudents.filter((item) => {
              return item.uid === thisuid
               })
            newarr.push(filtering[0])

              })
              return newarr
            }

}
}

</script>
