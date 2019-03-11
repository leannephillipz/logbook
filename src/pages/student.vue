<template>
<main class="student">
  <div class="flex split">
  <div class="content">
       <h2 class="pagetitle">Student</h2>
       <h3>{{student.fname}} {{student.lname}}</h3>
       <ul class="details">
        <li><h5>ID: </h5><p>{{student.uid}}</p></li>
        <li><h5>Email:</h5> <p><a v-bind:href=" 'mailto:' + student.email">{{student.email}}</a></p></li>
        <li><h5>Date of birth: </h5><p>{{ student.dob }}</p></li>
        <li><h5>Age: </h5><p>{{ student.dob | moment("from", "now", true) }} old</p></li>
        <li><h5>Course: </h5>
          <p><a @click.prevent="jumpToCourse(course.coursecode)">{{ course.title }} Level: {{ course.level }} (Code: {{ course.coursecode }})</a></p>
        </li>
        <li v-if="student.documents">
                 <h5>Documents:</h5>
                 <ul class="tags">
                 <li v-for="(doc, index) in student.documents" :key="index">
                   {{ doc }}
                 </li>
          </ul>
        </li>
        <li v-if="student.flags">
         <h5>Flags:</h5>
         <ul v-if="student.flags" class="tags">
         <li v-for="(flag, index) in student.flags" :key="index">
           {{ flag }}
         </li>
       </ul>
   </li>
   <li v-if="student.examsupport">
       <h5>Exam Support:</h5>
       <ul class="tags">
       <li v-for="(item, index) in student.examsupport" :key="index">
         {{ item }}
       </li>
     </ul>
 </li>
 <li v-if="student.notes" >
          <h5>Extra Notes:</h5>
          <ul >
          <li v-for="(note, index) in student.notes" :key="index">
            {{ note.note }}
          </li>
        </ul>
 </li>
</ul>










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

       <div class="profile side">
       <img :src="require('@/data/'+student.img.url)" :alt="student.img.alt"/>
       </div>
       </div>
</main>
</template>

<script>


export default {
  name: 'student',
    data() {
        return {
          routeId: this.$route.params.id,
        }
    },

    created(){
          this.routeId = this.$route.params.uid
        },

    computed: {
      student () {
        return this.$store.getters.getstudent(this.routeId)
      },
      logs (){
        return this.$store.getters.logsbystudent(this.routeId)
      },
      course (){
        return this.$store.getters.coursebystudent(this.student.coursecode)
      }
    },

    methods: {
      updatedata: function(){
        this.routeId = this.$route.params.uid
        this.student = this.$store.getters.getstudent(this.routeId)
        this.course = this.$store.getters.coursebycode(this.student.coursecode)
        this.logs = this.$store.getters.logsbystudent(this.routeId)
      },
      jumpToCourse(place) {
              this.$router.push({ name: 'course', params: {code: place} });
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
