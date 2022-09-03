import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { todoPlugin } from './stores/todo/todo-plugins';

import './style.css';

const pinia = createPinia();
pinia.use(todoPlugin);

const app = createApp(App);
app.use(pinia);
app.mount('#app');
