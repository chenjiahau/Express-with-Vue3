import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('./views/Home.vue'),
      footer: () => import('./views/UI/FooterBlock.vue')
    },
    beforeEnter(to, from, next) {
      console.log('route-beforeEnter', to);
      console.log('route-beforeEnter', from);
      next();
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

router.beforeEach((to, from, next) => {
  console.log('router-beforeEach', to);
  console.log('router-beforeEach', from);
  next();
});

router.afterEach((to, from) => {
  console.log('router-afterEach', to);
  console.log(from);
});

export default router;