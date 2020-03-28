import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '../components/Calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
