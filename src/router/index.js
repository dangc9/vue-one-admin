import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './router'
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: constantRoutes
})
