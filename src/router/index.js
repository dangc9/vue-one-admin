import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './router'
Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export const router = new VueRouter({
  routes: constantRoutes
})
