
<template>
  <main class="logs">
    <h2 class="pagetitle">Logs</h2>

    <ul class="list">
      <li>
        <ul class="flex colhead">
          <li>Date</li>
          <li>Student(s)</li>
          <li>Info</li>
          <li>Log</li>
          <li></li>
      </ul>
    </li>
        <li v-for="log in getlogs" v-bind:key="log.index">
          <ul class="flex">
              <!-- <li>{{ log.datestamp | moment("DD/MM/YYYY")}}</li> -->
                <li>
                  <p v-for="student in log.students" v-bind:key="student.index">{{ student }}</p>
                  <p>{{log.student.fname}} {{log.student.lname}}</p></li>
                <li>{{ log.course }}</li>
                <li>{{ log.content.substring(0,255)+"..."}} By: {{log.author.fname}} {{log.author.lname}}</li>
              <li><router-link :to="{ name: 'log', params: { id: log.id  }}">Read more...</router-link></li>
              </ul>
      </li>
    </ul>


  </main>
</template>

<script>
import LogStore from '@/data/logstore.js'

export default {
  name: 'logs',
  data() {
    return {
        logs: LogStore.data.logs,
        routeId: this.$route.params.code,
        split: 10,
      }
  },
  computed: {
    getlogs: function(){
        const v = this
        const logs = v.logs

       return logs.filter(log => {
          return log.coursecode.toLowerCase().includes(this.routeId.toLowerCase())
           })

        return this.logs.slice(0, v.split);
        // return this.logs
    }
  }

}

</script>
