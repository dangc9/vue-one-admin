import { toRaw } from 'vue';
import { defineStore } from 'pinia'
import { store } from '@/store';
import { useUserStore } from '@/store/modules/user.js';
import { asyncRoutes } from '@/router/router'
const permissionStore = defineStore('permissionStore', {
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  getters: {
  },
  actions: {
    // 构建路由
    async buildRoutesAction() {
      const userStore = useUserStore()
      const roleList = toRaw(userStore.getRoleList) || []
      return new Promise(resolve => {
        const routes = this.filterAsyncRoutes(asyncRoutes, roleList)
        resolve(routes)
      })
    },
    filterAsyncRoutes(routes, roles) {
      const res = []
      routes.forEach(route => {
        const tmp = { ...route }
        if (this.hasPermission(roles, tmp)) {
          if (tmp.children) {
            tmp.children = this.filterAsyncRoutes(tmp.children, roles)
          }
          res.push(tmp)
        }
      })
      return res
    },
    hasPermission(roles, route) {
      if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
      } else {
        return true
      }
    }
  }
})

export function usePermissionStore() {
  return permissionStore(store);
}
