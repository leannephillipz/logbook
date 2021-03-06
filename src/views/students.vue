<template >
  <h2>Students</h2>
  <div class="filters">
    <label>Name:
      <input type="text" v-model="searchtext.name" placeholder="Name" autocomplete="off"/>
    </label>
    <label>ID:
      <input type="text" v-model="searchtext.id" placeholder="Student ID" />
    </label>

<div class="switchview">
  <span v-if="viewtype === 'grid'" @click="viewtype = 'list'">Switch to List View</span> <span v-if="viewtype === 'list'" @click="viewtype = 'grid'">Switch to  Grid View</span></div>
  </div>

<div class="studentcards" v-if="viewtype === 'grid'">
<div v-for="student in students" :key="student.sid">
  <router-link :to="{ name: 'Student', params: { sid: student.sid  }}">
    <div v-if="student.img">
      <span v-if="student.documents.includes('EHCP')" class="tag"></span>
      <img :src="require('/src/data/' + student.img.url)" :alt="student.img.alt"/>
    </div>
      <div v-else><img :src="require('@/data/students/placeholder.jpg')" alt="no image" /></div>
    <p>{{student.fname}} {{student.lname}}</p>
  </router-link>
</div>
</div>



<ul class="list" v-if="viewtype === 'list'">
  <li>
    <ul class="flex colhead">
      <li>Attn.</li>
      <li>Name</li>
      <li>Course</li>
      <li>Age</li>
      <li></li>
    </ul>
  </li>
    <li v-for="student in students" :key="student.sid">

      <router-link :to="{ name: 'Student', params: { sid: student.sid  }}">
        <ul class="flex">
        <li>
        <span v-if="student.documents.includes('EHCP')">*</span>
        </li>
        <li>{{ student.fname }} {{ student.lname }}</li>
        <li >{{ student.course }}</li>
        <!-- <li v-for="item in crossRef(student.coursecode)">{{ item }}<br>Level {{ item.level }}</li> -->
        <!-- <li>{{ student.dob | moment("from", "now", true) }} old</li> -->
        <li>{{ student.dob }}</li>
        <li></li>
        </ul>
      </router-link>

    </li>
</ul>
</template>

<script>
import students from '@/data/students.json';
import courses from '@/data/courses.json';
  export default {
    props: ['sid'],
    data() {
      return {
        students,
        courses,
        searchtext: "",
        selectedcourse: 'All',
        ehcp: false,
        discosure: false,
        searchtext: '',
        queryall: true,
        test: false,
        viewtype: "grid"
      }
    },
    methods: {
      crossRef(code) {
      }
    },
     created: function () {

       const tester = (code, data) => {
         const getdata = this.$data.courses.filter(course =>
                  course.code == code
                )
                var data = getdata.target
                return data
            }

    // var test = tester('EM0090', this.courses)
    //   console.log(test) // trying to cross reference course
    }

}
</script>
