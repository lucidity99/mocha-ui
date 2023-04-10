import { createApp } from 'vue'
import App from './app.vue'
import moui from '@mocha-ui/components'

const app = createApp(App)
app.use(moui)
app.mount('#app')
