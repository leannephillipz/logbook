<template>
<main class="students">
  <h2 class="pagetitle">Students</h2>


  <div class="filters">
    <label>
  <input type="text" value="" placeholder="First name (e.g. John)" v-model="searchtext1"/></label>
  <input type="text" value="" placeholder="last name (e.g. Jones)" v-model="searchtext2"/></label>
  <div class="opts">
  <label><input type="checkbox" value="ehcp" v-model="ehcp">With EHCP</label>
  <label><input type="checkbox" value="discosure" v-model="discosure">With student disclosure</label>
  </div>
</div>

<!-- <span>Selected: {{ selectedcourse }}</span> -->
  <ul class="cards flex">
    <!-- <li>
      <ul class="flex colhead">
        <li></li>
      <li>Name</li>
      <li>Course</li>
      <li>Age</li>
      <li></li>
      </ul>
    </li> -->
      <li v-for="student in filteredStudents" :key="student.uid" class="card">
          <ul>
          <li class="img" v-if="student.img" @click="jumpTo(student.uid)">
            <img :src="require('@/data/'+student.img.url)" :alt="student.img.alt" />
          </li>
          <li v-else><img :src="require('@/data/students/placeholder.jpg')" alt="no image" /></li>
          <li>{{ student.fname }} {{ student.lname }}</li>
          <li v-for="(item, index) in crossRef(student.coursecode)" :key="index">{{ item.title }}<br>Level {{ item.level }}</li>
          <li>{{ student.dob | moment("from", "now", true) }} old</li>
          <li>
            <!-- <button @click="jumpTo(student.uid)">Profile</button> -->
            <router-link :to="{ name: 'student', params: { uid: student.uid }}">View Profile</router-link>
          <!-- <router-link :to="{ name: 'student', params: { uid: student.uid}, hash:'#logs'}">View logs</router-link> -->
          </li>
          </ul>
      </li>
  </ul>

</main>
</template>


<script>

import StudentStore from '@/data/studentstore.js'
import CourseStore from '@/data/coursestore.js'


export default {
  name: 'students',
    data () {
        return {
          selectedcourse: 'All',
          ehcp: false,
          discosure: false,
          searchtext1: '',
          searchtext2: '',
          allstudents: StudentStore.data.students,
          allcourses: CourseStore.data.courses,
          queryall: true,
          test: false
        }
    },

    // methods: {
    //     filteredStudents() {
    //       if (this.ehcp === true) {
    //       this.test = "hello"
    //     }
    //   }
    // },
    // watch: {
    //   ehcp() {
    //     if(this.ehcp == true)
    //   }
    // },

    methods: {
      crossRef(code) {
        // return this.allcourses
        const allcourses = this.allcourses
          return allcourses.filter(item => {
               return item.code.match(code);
             })
      },
      jumpTo(place) {
                this.$router.push({ name: 'student', params: {uid: place} });
            }
    },
    computed: {

       filteredStudents() {
          var allstudents = this.allstudents

          var filter1 = allstudents.filter(student => {
             return student.fname.toLowerCase().includes(this.searchtext1.toLowerCase())
           })

           var filter2 = allstudents.filter(student => {
              return student.lname.toLowerCase().includes(this.searchtext2.toLowerCase())
            })

            var filter3 = allstudents.filter(student => {
               return student.documents.includes("EHCP")
             })

            var filter4 = allstudents.filter(student => {
               return student.documents.includes("Discosure")
          })
            if(this.ehcp == true) {
               return filter1 && filter2 && filter3
                } else if (this.discosure == true){
                  return filter1 && filter2 && filter4
                } else if (this.discosure == true && this.ehcp == true){
                  return filter1 && filter2 && filter3 && filter4
              } else {
                  return filter2 && filter1
            }

      }
}
}

</script>
