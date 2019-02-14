<template>
  <main class="logbooks">
    <h2 class="pagetitle">Logbooks</h2>


<div class="group">
  <label>Title:
    <input type="text" v-model="search.title" name="title" placeholder="E.g. Art and design'" autocomplete="off"/>
  </label>

  <label>Campus:
      <select v-model="search.campus">
        <option selected value="">All</option>
        <option v-for="(camp, index) in campus" :key="index" v-bind:value="camp.value">{{ camp.name }}</option>
      </select>
  </label>
</div>


        <ul class="list">
          <li>
            <ul class="flex colhead">
              <li class="sm">Level</li>
              <li class="">Title</li>
              <li class="">Qualification</li>
              <li class="">Industry / Discipline<!-- / Discipline / Department--></li>
              <li>Campus</li>
              <li class="sm"></li>
          </ul>
        </li>
            <li v-for="(course, index) in getcourse" :key="index" class="details">
              <ul class="flex"  >
                <li class="sm"><span class="mobile">Level: </span> {{ course.level }}</li>
                  <li class="" @click="jumpToCourse(course.coursecode)">
                    <!-- {{ course.title }} -->

                  <button @click="jumpTo(course.coursecode)">{{ course.title }}</button>

                </li>
                  <li >{{ course.qualification }}</li>
                  <li >{{ course.discipline }}</li>
                  <li >{{ course.campus }}</li>
                  <li class="sm">
                      <button @click="jumpTo(course.coursecode)" v-if="course.logs === true">Logs</button>
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
  name: 'logbooks',
  data() {
    return {
        courses: CourseStore.data.courses,
        campus: [
          {"name": "Brighton", "value": "Brighton"},
          {"name": "Shoreham", "value": "Shoreham"},
          {"name": "West Durrington Worthing", "value": "Durrington"},
          {"name": "Broadwater Worthing", "value": "Broadwater"}
        ],
        split: 10,
        search: {
          campus: '',
          title: ''
        }
      }
  },
  methods: {
    jumpTo(place) {
            this.$router.push({ name: 'logs', params: { code: place} })
        },
    jumpToCourse(place) {
            this.$router.push({ name: 'course', params: {code: place} });
        }
  },
  computed: {
      getcourse: function(){
          const v = this
          const courses = v.courses

          return v.courses
          .filter(item => {
            return item.campus.toLowerCase().includes(v.search.campus.toLowerCase())
             })
             .filter(item => {
               return item.title.toLowerCase().includes(v.search.title.toLowerCase())
                })

          return courses.slice(0, v.split)

      }
  }

}

</script>
