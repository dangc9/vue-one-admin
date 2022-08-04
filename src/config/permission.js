import { router } from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
})
// 不校验登录状态的白名单
const whiteList = ['/login']
router.beforeResolve(async (to, from, next) => {
  nprogress.start()
  if (store.state.user?.token) {
    const hasRoles = store.state.user.roles?.length > 0
    // 用户是否已经获取角色信息(是否已经添加异步路由)
    if (hasRoles) {
      next()
    } else {
      try {
        const { roles } = await store.dispatch('user/getUserInfo')
        const routes = await store.dispatch('permission/generateRoutes', roles)
        routes.forEach(res => { router.addRoute(res) })
        // 设置replace为true，确保加载更新后的路由。
        next({ ...to, replace: true })
      } catch (err) {
        next('/login')
        nprogress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      nprogress.done()
    }
  }
})
router.afterEach(() => {
  nprogress.done()
})
