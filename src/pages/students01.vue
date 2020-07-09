<template>
<main class="students">
  <h2 class="pagetitle">Students</h2>


  <div class="filters">
    <label>
  <input type="text" value="" placeholder="First name (e.g. John) or last name (e.g. Jones)" v-model="searchtext"/></label>
  <div class="opts">
  <label><input type="checkbox" value="ehcp" v-model="ehcp">With EHCP</label>
  <label><input type="checkbox" value="discosure" v-model="discosure">With student disclosure</label>
  </div>
</div>

<!-- <span>Selected: {{ selectedcourse }}</span> -->
  <ul class="list">
    <li>
      <ul class="flex colhead">
        <li></li>
      <li>Name</li>
      <li>Course (primary)</li>
      <li>Age</li>
      <li></li>
      </ul>
    </li>
      <li v-for="(student, index) in filteredStudents" v-bind:key="index">
          <ul class="flex">
          <li class="img" v-if="student.img">
            <img :src="require('@/data/'+student.img.url)" :alt="student.img.alt" />
          </li>
          <li v-else><img :src="require('@/data/students/placeholder.jpg')" alt="no image" /></li>
          <li>{{ student.fname }} {{ student.lname }}</li>
          <li v-for="item in crossRef(student.coursecode)" v-bind:key="index">{{ item.title }}<br>Level {{ item.level }}</li>
          <!-- <li>{{ student.dob | moment("from", "now", true) }} old</li> -->
          <li>
          <router-link :to="{ name: 'student', params: { uid: student.uid  }}">View</router-link>
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
          searchtext: '',
          students: StudentStore.data.students,
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
          return this.allcourses.filter(item => {
               return item.code.match(code);
             })
      }
    },
    computed: {

       filteredStudents() {
         //return this.students
          const v = this
          const allstudents = v.students
          const allcourses = v.allcourses

          // for allstudents.push("fullname": fname = lname)

          const filter1 = allstudents.filter(student => {
             return student.fname.toLowerCase().includes(this.searchtext.toLowerCase())
           })

           const filter2 = allstudents.filter(student => {
              return student.lname.toLowerCase().includes(this.searchtext.toLowerCase())
            })

            const filter3 = allstudents.filter(student => {
               return student.documents.includes("EHCP")
             })

            const filter4 = allstudents.filter(student => {
               return student.documents.includes("Discosure")
          })


            if(this.ehcp == true) {
               return filter1 && filter2 && filter3
             } else if (this.discosure == true){
                  return filter1 && filter2 && filter4
                } else if (this.discosure == true && this.ehcp == true){
                  return filter1 && filter2 && filter3 && filter4
            } else {
               return filter1 && filter2
            }

      }
}
}

</script>
