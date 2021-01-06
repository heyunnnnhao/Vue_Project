import { createRouter, createWebHistory } from 'vue-router';

import Calculator from '../views/Calculator.vue';
import Worldclock from '../views/Worldclock.vue';
import About from '../views/About.vue';
import Event from '../views/Event.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'about',
    component: About,
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator,
  },
  {
    path: '/Worldclock',
    name: 'worldclock',
    component: Worldclock,
  },
  {
    path: '/Event',
    name: 'event',
    component: Event,
  },
  {
    path: '/Settings',
    name: 'settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
