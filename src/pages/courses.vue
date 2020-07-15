<template>
  <main class="logbooks">
    <h2 class="pagetitle">Courses</h2>


<div class="group">
  <label>Title:
    <input type="text" v-model="search.title" name="title" placeholder="E.g. Art and design'" autocomplete="off"/>
  </label>

  <label>Campus:
      <select v-model="search.campus">
        <option selected value="All">All</option>
        <option v-for="camp in campus" v-bind:key="camp.index" v-bind:value="camp.value">{{ camp.name }}</option>
      </select>
  </label>


</div>



        <ul class="list">
          <li>
            <ul class="flex colhead">
              <li class="sm">Level</li>
              <li class="">Course</li>
              <li class="">Qualification</li>
              <li class="">Industry<!-- / Discipline / Department--></li>
              <li>Campus</li>
              <li class="sm"></li>
          </ul>
        </li>
            <li v-for="course in getcourse" v-bind:key="course.index">
              <ul class="flex">
                <li class="sm">{{ course.level }}</li>
                  <li class=""><router-link :to="{ name: 'course', params: { code: course.code  }}">{{ course.title}}</router-link> </li>
                  <li>{{ course.qualification }}</li>
                  <li class="">{{ course.discipline }}</li>
                  <li>{{ course.campus }}</li>
                  <li class="sm">
                    <p v-if="course.logs === true">
                    <router-link :to="{ name: 'logs', params: { code: course.code  }}">View logs</router-link>
                  </p>
                  <p v-else>-</p>
                </li>
                  </ul>
          </li>
        </ul>
<p class="info">Showing: {{getcourse.length}} of {{courses.length}}</p>

  </main>
</template>

<script>
import CourseStore from '@/data/coursestore.js'

export default {
  name: 'courses',
  data() {
    return {
        courses: CourseStore.data.courses,
        campus: [
          {"name": "Brighton", "value": "Brighton"},
          {"name": "Shoreham", "value": "Shoreham"},
          {"name": "West Durrington (Worthing)", "value": "Durrington"},
          {"name": "Broadwater (Worthing)", "value": "Broadwater"}
        ],
        split: 20, // max amount to show
        search: {
          campus: 'All',
          title: ''
        },
        test: false
      }
  },
  computed: {
      getcourse: function(){
        // returns a new array not orriginal data
           // return this.courses.slice(0, this.split)

          // const tester = function() {
          //    if (this.courses.includes(this.search.title)) {
          //      return true
          //    } else {
          //     return false
          //  }
          //  }


           // if (this.courses.includes(this.search.title)){
           //   return this.courses
           //   .filter((course) => course.title === this.search.title).slice(0, this.split)
           //   // return this.courses.slice(0, this.split)
           // } else {
           //   return this.courses.slice(0, this.split)
           // }
          //  else
          //
          //
          if(this.search.campus == '' || this.search.campus == 'All') {
            return this.courses.slice(0, this.split)
          } else {
            return this.courses
            .filter((course) => course.campus === this.search.campus).slice(0, this.split)
          }
      }
  }

}

</script>
