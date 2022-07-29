import { router } from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/store/modules/user.js';
import { usePermissionStore } from '@/store/modules/permission.js';
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
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  if (userStore.getToken) {
    const hasRoles = userStore.roleList?.length > 0
    // 用户是否已经获取角色信息(是否已经添加异步路由)
    if (hasRoles) {
      next()
    } else {
      try {
        const { roles } = await userStore.getUserInfoAction()
        const routes = await permissionStore.buildRoutesAction(roles)
        console.log(routes)
        // next()
      } catch {
        // next('/login')
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  nprogress.done()
})
