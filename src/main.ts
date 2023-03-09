import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
const Pinia = createPinia();
createApp(App).use(Pinia).mount('#app');
