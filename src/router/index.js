import Vue from 'vue'
import VueRouter from 'vue-router'
import CheapGasFinder from '../views/CheapGasFinder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CheapGasFinder',
    component: CheapGasFinder
  }
]

const router = new VueRouter({
  routes
})

export default router
