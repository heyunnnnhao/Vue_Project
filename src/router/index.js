import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../views/Calculator.vue'),
  },
  {
    path: '/Worldclock',
    name: 'worldclock',
    component: () => import('../views/Worldclock.vue'),
  },
  {
    path: '/Event',
    name: 'event',
    component: () => import('../views/Event.vue'),
  },
  {
    path: '/Settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
