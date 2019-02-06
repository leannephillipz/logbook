<template>
<section>
  <h2>Student Search</h2>
<form class="search">
<label>
  First Name
  <input type="text" value="" v-model='fname' placeholder="Joe" >
</label>

<label>
  Last Name
  <input type="text" value="" v-model='lname' placeholder="Bloggs" >
</label>

<label>
  Course
  <input type="text" value="" v-model='course' placeholder="e.g. Bricklaying" >
</label>


<label><input type="checkbox" name="EHCP" value="EHCP" v-model="documents">
   Care Plan
   <hint tip="With a EHCP (Education, Health and Care Plan)"/>

</label>

<label><input type="checkbox" name="disclosure" value="disclosure" v-model="documents">
  Disclosure
  <hint tip="With a learning support disclosure"/>

</label>

<!--
<button class="btn" v-on:click.prevent="search">Search</button>
-->
</form>
{{ documents }}
<div v-for="i in queryResults(items)" class="item">
    {{i.fname}}
    {{i.lname}}
    {{i.course}}
  </div>

</section>
</template>


<script>

import hint from '@/components/tooltip.vue'
import StudentStore from '@/data/studentstore.js'

export default {
  components:{
    'hint': hint,
  },
  name: 'search',
  data() {
        return {
          fname: '',
          lname: '',
          course: '',
          vquery: false,
          options: '',
          documents: [],
          items: StudentStore.data.students,
    }
  },
  methods: {
      queryResults: function() {
        if(!this.fname && !this.lname && !this.course){
          this.vquery = false
        } else {
          this.vquery = true
        }

        if(!this.vquery) {
             return null
         }
         else {
           return this.items
           .filter(item => {
             return item.fname.toLowerCase().includes(this.fname.toLowerCase())
              })
              .filter(item => {
                return item.lname.toLowerCase().includes(this.lname.toLowerCase())
                 })
                 .filter(item => {
                   return item.course.toLowerCase().includes(this.course.toLowerCase())
                    })
                    .filter(item => {
                      return item.documents.includes(this.documents) !== -1
                       })

         }


        // if(this.fname) {
        //     return items.filter(item => {
        //       return item.fname.toLowerCase().includes(this.fname.toLowerCase())
        //   })
        // }
        // else if(!this.vquery) {
        //     return null
        // }
      },
      search: function () {
        return this.query
      }
}

}


</script>
