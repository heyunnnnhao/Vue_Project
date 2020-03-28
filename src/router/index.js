import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '../components/Calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
    // component: () => import(/* webpackChunkName: "about" */ '../components/Calculator.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
