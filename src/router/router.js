export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout/common/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

export const asyncRoutes = [

]
