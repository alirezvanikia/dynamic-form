import './assets/tailwind.css'; // مسیر صحیح فایل
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';  // import Pinia

const app = createApp(App);
const pinia = createPinia(); 

app.use(pinia);
createApp(App).mount('#app');
