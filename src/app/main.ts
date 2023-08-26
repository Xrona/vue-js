import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routerProvider } from '@/app/providers'

const app = createApp(App)

app.use(createPinia())
app.use(routerProvider)

app.mount('#app')
