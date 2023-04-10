import { createApp } from 'vue'
import { createPinia } from 'pinia'
import buttons from '@/components/ui/buttons/buttons'
import './assets/css/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

buttons.forEach((el) => {
    app.component(el.name, el)
})
