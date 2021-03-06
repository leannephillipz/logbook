<template >
  <h2>Courses</h2>
  <div class="filters">
    <label>Title:
      <input type="text" v-model="search.title" placeholder="E.g. Art and design'" autocomplete="off"/>
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
                <li class="">Course</li>
                <li class="">Qualification</li>
                <li class="">Industry<!-- / Discipline / Department--></li>
                <li>Campus</li>
                <li class="sm"></li>
            </ul>
          </li>
              <li v-for="course in getcourse" >

                <router-link :to="{ name: 'Course', params: { code: course.code  }}">
                <ul class="flex">
                  <li class="sm">{{ course.level }}</li>
                    <li class=""><!-- <router-link :to="{ name: 'course', params: { code: course.code  }}"></router-link>  -->{{ course.title }}</li>
                    <li>{{ course.qual }}</li>
                    <li class="">{{ course.industry }}</li>
                    <li>{{ course.campus }}</li>
                    <li class="sm"><p v-if="course.logs === true">
                      Includes Logs
                      <!-- <router-link :to="{ name: 'logs', params: { code: course.code  }}">View logs</router-link> -->
                    </p>
                    <p v-else>-</p>
                  </li>
                </ul>
                </router-link>


            </li>
          </ul>
  <!-- <p class="info">Showing: {{split}} of {{courses.length}}</p> -->



</template>

<script >
import courses from '@/data/courses.json';
  export default {
    data() {
      return {
        courses,
        campus: [
          {"name": "Brighton", "value": "Brighton", "code" : "BTN"},
          {"name": "Shoreham", "value": "Shoreham", "code" : "SH"},
          {"name": "West Durrington Worthing", "value": "Durrington", "code" : "WD"},
          {"name": "Broadwater Worthing", "value": "Broadwater", "code": "BW"}
        ],
        split: 10,
        search: {
          campus: '',
          title: ''
        }
      }
    },

    computed: {
        getcourse: function(){
            return this.courses
            .filter(item => {
              return item.campus.toLowerCase().includes(this.search.campus.toLowerCase())
               })
               .filter(item => {
                 return item.title.toLowerCase().includes(this.search.title.toLowerCase())
                  })

            //return courses.slice(0, v.split) // split reduces the number of results

        }
    }



  }
</script>
