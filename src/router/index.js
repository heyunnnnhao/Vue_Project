import Vue from 'vue';
import VueRouter from 'vue-router';

import Calculator from '../views/Calculator.vue';
import Clock from '../views/Clock.vue';
import About from '../views/About.vue';
import Eventcard from '../components//Eventcard.vue'
import Event from '../views//Event.vue'


Vue.use(VueRouter);

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
    path: '/clock',
    name: 'clock',
    component: Clock,
  },
  {
    path: '/Event',
    name: 'event',
    component: Event,
  },
  {
    path: '/Eventcard',
    name: 'eventcard',
    component: Eventcard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
