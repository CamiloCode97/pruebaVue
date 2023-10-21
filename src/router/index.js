import Vue from 'vue'
import VueRouter from 'vue-router'
import DatoView from '../views/DatoView.vue'
import ImagenView from '../views/ImagenView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Dato',
    name: 'Dato',
    component: DatoView
  },
  {
    path: '/imagen',
    name: 'Imagen',
    component: ImagenView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
