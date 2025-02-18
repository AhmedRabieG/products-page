import { createApp } from 'vue'
import './style.css'
import './assets/styles/style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './stores/counter'
import './stores/user'
import 'font-awesome/css/font-awesome.min.css';


const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
