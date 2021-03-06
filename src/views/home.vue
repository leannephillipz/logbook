<template>
    <h2>Student Support Profiles</h2>
    <div class="finder">
      <form>
        <label>Find a course by Title:
          <input type="text" v-model="course.title" placeholder="E.g. Art and design'" autocomplete="off"/>
        </label>

        <label>Find a student by name:
          <input type="text" v-model="student.fname" placeholder="Name" autocomplete="off"/>
        </label>

        <button type="button">Search</button>
      </form>
    </div>
    <!-- <div class="recent">
      Recent students / assigned students
    </div> -->

</template>



<script>

import { ref } from 'vue'

export default {
    setup() {
        const course = ref([])
        const student = ref([])

        return {course, student}
    }
}


</script>
