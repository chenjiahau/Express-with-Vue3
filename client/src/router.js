import { createRouter, createWebHistory } from 'vue-router';

import Country from './views/Country.vue';
import CountryDetail from './views/CountryDetail.vue';
import Detail from './views/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'Country',
    component: Country
  },
  {
    path: '/country/:id',
    name: 'CountryDetail',
    component: CountryDetail
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;