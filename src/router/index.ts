import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BoardList from '../views/BoardList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'board-list',
    component: BoardList
  },
  {
    path: '/board-detail',
    name: 'board-detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
