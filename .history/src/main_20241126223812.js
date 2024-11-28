import './assets/tailwind.css'; // مسیر صحیح فایل
import { createApp } from 'vue';
import App from './App.vue';
const pinia = createPinia();  // create Pinia instance

app.use(pinia);
createApp(App).mount('#app');
