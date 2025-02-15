import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './stores/counter'
import './stores/user'
import 'font-awesome/css/font-awesome.min.css';

import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'


const app = createApp(App)

app.use(router)
app.use(createPinia())

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// Define validation rules
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)


app.mount('#app')
