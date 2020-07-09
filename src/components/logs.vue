<template>
<section>
     <h3>Recent Logs</h3>
      <ul>
          <li v-for="log in getlogs" v-bind:key="log.index">
            <ul class="item">
                 <li>
                   <!--{{ log.datestamp | moment("DD / MM / YYYY")}} -->
                <br> {{ log.course }} <br>Student: {{log.student.fname}} {{log.student.lname}}
              <br>With: {{log.author.fname}} {{log.author.lname}}</li>
                <li>{{ log.content.substring(0,255)+"..." }}</li>
                </ul>
        </li>
      </ul>
      <!-- <button class="btn" v-on:click="$router.push({ name: 'logbook'})">Logbook</button></form> -->
    </section>
</template>

<script>
import LogStore from '@/data/logstore.js'

export default {
  name: 'logs',
  data() {
        return {
            logs: LogStore.data.logs,
            split: '3',
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


<style scoped>
.list li {
padding:0;
}

.list > li {
padding:1em 0; border-bottom: 1px solid #666;
}


</style>
