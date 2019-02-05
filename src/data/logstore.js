import alllogs from '@/data/logs.json'

const LogStore = {
  data: {
    logs: alllogs
  },
  methods: {
    addLog(log) {
      LogStore.data.logs.push(log)
    }
  }
}

export default LogStore
