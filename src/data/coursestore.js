import courses from '@/data/courses.json'

const CourseStore = {
  data: {
    courses: courses
  },
  methods: {
    addNew (course) {
      CourseStore.data.course.push(course)
    },
    getCoursesName() {
      CourseStore.data.course.filter(input => {
          return CourseStore.data.course.title.toLowerCase().includes(input.toLowerCase())
           }
      )
    }
  }
}

export default CourseStore
