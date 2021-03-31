import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base
  }
]

const router = new VueRouter({
  routes
})

export default router
