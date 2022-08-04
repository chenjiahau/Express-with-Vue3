import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('./views/Home.vue'),
      footer: () => import('./views/UI/FooterBlock.vue')
    }
  },
  {
    path: '/news/:id',
    name: 'News',
    components: {
      default: () => import('./views/News.vue'),
      footer: () => import('./views/UI/FooterBlock.vue')
    },
    props: true
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('./views/About.vue'),
      footer: () => import('./views/UI/FooterBlock.vue')
    }
  },
  {
    path: '/news',
    redirect: '/'
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;