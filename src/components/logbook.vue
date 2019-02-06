<template>
<section class="logbook">
    <ul class="list">
      <li>
        <ul class="flex colhead">
          <li>Date</li>
          <li>Info</li>
          <li>Log</li>
          <li></li>
      </ul>
    </li>
        <li v-for="log in getlogs">
          <ul class="flex">
              <li>{{ log.datestamp }}</li>
              <li>{{ log.course }} <br>Student: {{log.student.fname}} {{log.student.lname}}
                <br>By: {{log.author.fname}} {{log.author.lname}}</li>
              <li>{{ log.content.substring(0,255)+"..."}}
              <br><router-link :to="{ name: 'log', params: { id: log.id  }}">Read more...</router-link>
              </li>
               <li class="remove" v-on:click="deletelog">x</li>
               <!--<li>⋯</li>-->
              </ul>
      </li>
    </ul>
    </section>
</template>

<script>
import LogStore from '@/data/logstore.js'

export default {
  name: 'logs',
  data() {
        return {
            logs: LogStore.data.logs,
            split: '20',
            sortby: 'Kenobi',
            sorttype: 'lname'
        }
  },
  computed: {
      getlogs: function(){
        const v = this
        const sortlogs = v.logs
        //
        // return this.logs.slice(0, v.split).sort((a, b) => x.datestamp - y.datestamp);
        //
           if (v.sorttype == 'lname') {
             return sortlogs.filter(log => {
               return log.author.lname.toLowerCase().includes(v.sortby.toLowerCase())
             })
          } else if (v.sorttype == 'fname') {
             return sortlogs.filter(log => {
               return log.author.fname.toLowerCase().includes(v.sortby.toLowerCase())
             })
          }

          return sortlogs.slice(0, v.split);
          }
  }
}

</script>
