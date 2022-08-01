const Layout = () => import('@/layout/common/index.vue')
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: '主页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

export const asyncRoutes = [
  {
    path: '/icon',
    component: Layout,
    meta: { title: '图标', icon: 'el-icon-c-scale-to-original', noCache: true },
    children: [
      {
        path: 'index1',
        component: () => import('@/views/icons/index'),
        name: 'icon1',
        meta: { title: '图标1', icon: 'el-icon-c-scale-to-original', noCache: true }
      },
      {
        path: 'index2',
        component: () => import('@/views/icons/index'),
        name: 'icon2',
        meta: { title: '图标2', icon: 'el-icon-c-scale-to-original', noCache: true }
      }
    ]
  }
]
