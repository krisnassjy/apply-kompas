import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListPekerjaan from '../views/ListPekerjaan.vue'
import DetailPekerjaan from '../views/DetailPekerjaan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listpekerjaan',
    name: 'ListPekerjaan',
    component: ListPekerjaan
  },
  {
    path: '/detailpekerjaan/:id',
    name: 'DetailPekerjaan',
    component: DetailPekerjaan
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
