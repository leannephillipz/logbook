<template>
<main class="students">
  <h2 class="pagetitle">Students</h2>


 <div class="filters">
    <label>
  <input type="text" value="" placeholder="First name (e.g. John) or last name (e.g. Jones)" v-model="searchtext"/>
</label>

</div>
<div class="opts">
<label><input type="checkbox" value="ehcp" v-model="ehcp">With EHCP</label>
<label><input type="checkbox" value="discosure" v-model="discosure">With student disclosure</label>
</div>

  <!--  <li>
       <ul class="flex colhead">
        <li></li>
      <li>Name</li>
      <li>Course (primary)</li>
      <li>Age</li>
      <li></li>
      </ul>
    </li>-->
        <ul class="flex data">
          <li v-for="student in filteredStudents" :key="student.index">
            <router-link :to="{ name: 'student', params: { uid: student.uid  }}">

          <img  v-if="student.img" :src="require('@/data/'+student.img.url)" :alt="student.img.alt" class="img"/>
          <img v-else :src="require('@/data/students/placeholder.jpg')" alt="no image" />

        <p class="txt">
          {{ student.fname }} {{ student.lname }} <br>
          View</p>
        </router-link>

  </li>
      </ul>


</main>
</template>


<script>

import StudentStore from '@/data/studentstore.js'
// import CourseStore from '@/data/coursestore.js'


export default {
  name: 'students',
    data () {
        return {
          ehcp: false,
          discosure: false,
          searchtext: '',
          students: StudentStore.data.students,
          // allcourses: CourseStore.data.courses,
          // queryall: true,
           // test: false
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
      // crossRef(code) {
      //   // return this.allcourses
      //     return this.allcourses.filter(item => {
      //          return item.code.match(code);
      //        })
      // }


    },
    computed: {

      // orderedStudents: function () {
      //   return this.students.slice(0, 3) // works
      // }



      // orderedStudents: function () {
      //    return this.students
      // },

      filteredStudents: function () {

        if(this.searchtext !== '') {
          if(this.discosure) {
            return this.students.filter((student) => student.fname.toLowerCase().match(this.searchtext.toLowerCase()) || student.lname.toLowerCase().match(this.searchtext.toLowerCase()) && student.documents.includes('Discosure'))
          } else if(this.ehcp) {
            return this.students.filter((student) => student.fname.toLowerCase().match(this.searchtext.toLowerCase()) || student.lname.toLowerCase().match(this.searchtext.toLowerCase()) && student.documents.includes('EHCP'))
          } else {
            return this.students.filter((student) => student.fname.toLowerCase().match(this.searchtext.toLowerCase()) || student.lname.toLowerCase().match(this.searchtext.toLowerCase()))
          }

          // return [];
        } else if(this.ehcp && this.discosure) {
          return this.students.filter(student => student.documents.includes('EHCP') && student.documents.includes("Discosure"))
          // return this.students
          // return this.students.filter(val => val.length > 6)
        } else if(this.ehcp) {
          return this.students.filter(student => student.documents.includes('EHCP'))
          // return this.students
          // return this.students.filter(val => val.length > 6)
        } if (this.discosure) {
          return this.students.filter(student => student.documents.includes('Discosure'))
          // return this.students
          // return this.students.filter(val => val.length > 6)
        } else {
          return this.students
        }
      }

        /*filteredStudents() {
         //return this.students
          const v = this
           const allstudents = v.students
          // const allcourses = v.allcourses

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

      } */
}
}

</script>
