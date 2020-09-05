import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from '../views/Calculator.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator,
  },
  {
    path: '/',
    name: 'about',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
