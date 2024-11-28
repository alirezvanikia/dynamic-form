import './assets/tailwind.css'; // مسیر صحیح فایل
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';  // import Pinia


createApp(App).mount('#app');
const pinia = createPinia();  // create Pinia instance

app.use(pinia);