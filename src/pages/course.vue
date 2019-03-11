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


     <div v-if="logs" class="logs">
       <hr class="spacer"/>
          <h5 id="logs">Logs:</h5>
            <ul class="cards" v-for="(log, index) in logs" :key="index">
              <li>
                <p>{{ log.content | snippet }} <router-link :to="{ name: 'log', params: { id: log.id  }}">Read more...</router-link></p>
                <p>{{ log.datestamp | moment("DD/MM/YYYY")}}</p>
            </li>
            </ul>
            </div>


     </div>
     <div class="side">
       <p>Students:</p>
       <ul class="tags">
         <!-- <li v-for="student in students"  :class="[student.documents, { tag: student.documents[0] }]"> -->
       <li v-for="student in students" :class="student.documents">
         <router-link :to="{ name: 'student', params: { uid: student.uid  }}">{{ student.fname}} {{ student.lname}}</router-link>
       </li>
     </ul>
     </div>
     </div>
</main>
</template>


<script>


export default {
  name: 'course',
  data() {
    return {
        routeId: this.$route.params.code,

      }
  },

  computed: {
    course (){
      return this.$store.getters.coursebycode(this.routeId)
    },
    students (){
      return this.$store.getters.studentsbycourse(this.course.coursecode)
    },
    logs (){
      return this.$store.getters.logsbycourse(this.course.coursecode)
    },

}
}

</script>
