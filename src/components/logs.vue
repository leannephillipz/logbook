<template>
  <section class="logs">
    <hr class="spacer">
      <h5>Logs:</h5>

          <div class="log" v-for="log in logs">
            <p>{{ log.datestamp }}</p>
            <p>{{ log.course  }}</p>
            <p>By: {{ log.author.fname }} {{ log.author.lname }}</p>
            <p>{{ log.content }}</p>
          </div>

      </section>
</template>

<script>
import logs from '@/data/logs.json';
// import LogStore from '@/data/logstore.js'

export default {
  name: 'logs',
  data() {
        return {
            logs,
            split: '3',
            sortby: 'Kenobi',
            sorttype: 'lname'
        }
  },
  computed: {
      logbook: function(){
        //
        // return this.logs.slice(0, v.split).sort((a, b) => x.datestamp - y.datestamp);
        //
          //  if (v.sorttype == 'lname') {
          //    return sortlogs.filter(log => {
          //      return log.author.lname.toLowerCase().includes(v.sortby.toLowerCase())
          //    })
          // } else if (v.sorttype == 'fname') {
          //    return sortlogs.filter(log => {
          //      return log.author.fname.toLowerCase().includes(v.sortby.toLowerCase())
          //    })
          // }

          // return sortlogs.slice(0, this.split);
          }
  }
}

</script>


<style scoped>

.logs > div:first-of-type{
	border-top: 1px solid #666;
}

.logs > div {
	padding:1em 0; border-bottom: 1px solid #666;
}



</style>
