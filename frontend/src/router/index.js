import Vue from 'vue'
import VueRouter from 'vue-router'
import NearMe from '../views/NearMe.vue'
import About from '../views/About.vue'
import Information from "../views/Information.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NearMe',
    component: NearMe
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }, {
    path: '/information',
    name: 'information',
    component: Information
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
