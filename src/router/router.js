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
    redirect: '/icon/index1',
    meta: { title: '图标', icon: 'el-icon-c-scale-to-original' },
    children: [
      {
        path: 'index1',
        redirect: '/icon/index1/index11',
        meta: { title: '图标1', icon: 'el-icon-c-scale-to-original' },
        name: 'icon1',
        children: [
          {
            path: 'index11',
            component: () => import('@/views/icons/index'),
            name: 'icon11',
            meta: { title: '图标11', icon: 'el-icon-c-scale-to-original' }
          },
          {
            path: 'index22',
            component: () => import('@/views/icons/index'),
            name: 'icon22',
            meta: { title: '图标22', icon: 'el-icon-c-scale-to-original' }
          }
        ]
      },
      {
        path: 'index2',
        component: () => import('@/views/icons/index'),
        name: 'icon2',
        meta: { title: '图标2', icon: 'el-icon-c-scale-to-original' }
      }
    ]
  }
]
