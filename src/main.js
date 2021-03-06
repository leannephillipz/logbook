import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vPlugin from '@/plugins/plugin'

import '@/assets/style/normalise.css'
import '@/assets/style/base.css'
import '@/assets/style/flex.css'
import '@/assets/style/theme.css'
import '@/assets/style/newtheme.css'

const app = createApp(App)
.use(router)
.use(vPlugin)

app.mount('#app')

// app.config.globalProperties.$store = 'Jimmy'
 // app.config.globalProperties.$plugin = vPlugin

 console.log(app)
