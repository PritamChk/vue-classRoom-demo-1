import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueKinesis from "vue-kinesis";
import './css/style.css'

createApp(App).use(router).use(VueKinesis).mount('#app')
