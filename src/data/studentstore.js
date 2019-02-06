import allstudents from '@/data/students.json'
// import allstudents from '@/firebase/init.js'

const StudentStore = {
  data: {
    students: allstudents
  },
  methods: {
    addStudent (student) {
      StudentStore.data.students.push(student)
    }
  }
}

export default StudentStore
