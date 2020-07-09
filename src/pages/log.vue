<template>
<main>

  <!-- <div class="btns">
  <button>Edit</button>
  <button>Delete</button>
</div> -->
<!-- <h4>{{ log.datestamp | moment("Do MMMM YYYY")}} in {{ log.course }}</h4> -->
<p>{{ log.type }} Support with:
<ul v-for="student in getstudent" v-bind:key="student.uid">
<li><router-link :to="{ name: 'student', params: { uid: student.uid  }}">{{ student.fname}} {{ student.lname}}</router-link></li>
</ul>
</p>

<p>{{ log.content }}</p>
<p v-if="log.strategies">Strategies used: {{ log.strategies }}</p>
<p v-if="log.progress">Progress made: {{ log.progress }}</p>
<p v-if="log.targets">Targets for next time: {{ log.targets }}</p>
<p v-if="log.consideration">Points to consider: {{ log.consideration }}</p>
<p>Written by: {{ log.author.fname }} {{ log.author.lname }}</p>

</main>
</template>



<script>
// import logs from '@/data/logs/data.json'
import LogStore from '@/data/logstore.js'
import StudentStore from '@/data/studentstore.js'

export default {
    name: "log",
    data() {
        return {
          routeId: this.$route.params.id,
          logs: LogStore.data.logs,
          log: {},
          allstudents: StudentStore.data.students,
        }
    },
    created(){
           this.log = this.logs.find(x => x.id === this.routeId);
    },
    computed: {
      getstudent: function(){
            const newarr = new Array()
            this.log.students.forEach(el1 => {
              const thisuid = el1

              const filtering = this.allstudents.filter((item) => {
                return item.uid.toLowerCase().includes(thisuid)
                 })

              // console.log(filtering[0].fname + filtering[0].lname  + filtering[0].uid)
              newarr.push(filtering[0])
                })
                return newarr
          }
    }

}

</script>
