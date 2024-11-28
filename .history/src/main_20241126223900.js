import './assets/tailwind.css'; // مسیر صحیح فایل
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';  // import Pinia
const app = createApp(App);
const pinia = createPinia(); 

createApp(App).mount('#app');
