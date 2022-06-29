import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import News from './views/News.vue';
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;