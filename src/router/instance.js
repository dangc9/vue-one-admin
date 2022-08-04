/**
 * vue2.7 + vue-router3.x 的Composition api临时解决方案。
 * 实现：
 * 1、在setup中获取初始数据(useRoute和useRouter)
 * 2、在setup当前活跃的route可被监听和更新计算属性(useRoute)
 * 参考：https://github.com/vuejs/vue-router/issues/3760
 * auther: dangc
 * date: 2022-08-04
 */

import { reactive, shallowRef, computed, getCurrentInstance } from 'vue'
import { router } from '@/router'

export function useRouter() {
  return useApi(router).useRouter()
}

export function useRoute() {
  return useApi(router).useRoute()
}

/**
 * vue-router composables
 * @param {Router} routerInstance - router实例
 */
export function useApi(routerInstance) {
  const currentRoute = shallowRef({
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined
  })

  /** @type {Route} */
  const reactiveRoute = {}

  for (const key in currentRoute.value) {
    reactiveRoute[key] = computed(() => currentRoute.value[key])
  }
  const { proxy } = getCurrentInstance()
  currentRoute.value = proxy.$route
  routerInstance.afterEach((to) => {
    currentRoute.value = to
  })

  /**
   * get router instance
   */
  function useRouter() {
    return routerInstance
  }

  /**
   * get current route object
   */
  function useRoute() {
    return reactive(reactiveRoute)
  }

  return {
    useRouter,
    useRoute
  }
}
