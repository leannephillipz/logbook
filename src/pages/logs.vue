
<template>
  <main class="logs">
    <h2 class="pagetitle">Logs</h2>

    <ul class="list">
      <li>
        <ul class="flex colhead">
          <li>Date</li>
          <li>Student(s)</li>
          <li>Course</li>
          <li>Log</li>
          <li></li>
      </ul>
    </li>
        <li v-for="(log, index) in getlogs" :key="index">
          <ul class="flex">
              <li>{{ log.datestamp | moment("DD/MM/YYYY")}}</li>
                <li>
                  <p v-for="(student, index) in log.students" :key="index">
                    <span v-for="(item, index) in crossRef(student)" :key="index">{{ item.fname }} {{ item.lname }}</span>
                  </p>
                </li>
                <li>
                  <span v-for="(item, index) in crossRefCourse(log.coursecode )" :key="index">{{ item.title }} <br>level: {{ item.level }}</span>
                </li>
                <li>{{ log.content | snippet}} <br>By: {{log.author.fname}} {{log.author.lname}}</li>
              <li><router-link :to="{ name: 'log', params: { id: log.id  }}">Read more...</router-link></li>
              </ul>
      </li>
    </ul>


  </main>
</template>

<script>
import LogStore from '@/data/logstore.js'
import StudentStore from '@/data/studentstore.js'
import CourseStore from '@/data/coursestore.js'

export default {
  name: 'logs',
  data() {
    return {
        alllogs: LogStore.data.logs,
        allstudents: StudentStore.data.students,
        courses: CourseStore.data.courses,
        routeId: this.$route.params.code,
        split: 10,
      }
  },
  methods: {
    crossRef(check) {
      // return this.allstudents
      return this.allstudents.filter(item => {
             return item.uid.includes(check);
           })
         },
         crossRefCourse(check) {
           // return this.allstudents
           return this.courses.filter(item => {
                  return item.code.includes(check);
                })
              }
  },
  computed: {
    getlogs: function(){
        const v = this
        const logs = v.alllogs

       return logs.filter(log => {
          return log.coursecode.toLowerCase().includes(this.routeId.toLowerCase())
           })

        return this.logs.slice(0, v.split);
        // return this.logs
    }
  }

}

</script>
