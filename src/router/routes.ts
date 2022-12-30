import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    meta: { requiresAuth: false },
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'logout',
        name: 'logout',
        component: () => import('pages/logout.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', meta: { requiresAuth: true }, component: () => import('pages/Dashboard.vue') },
      { path: 'vehicle', meta: { requiresAuth: true }, component: () => import('pages/Vehicle.vue') },
      { path: 'setting', meta: { requiresAuth: true }, component: () => import('pages/Usersetting.vue') },
      { path: 'settingbtn', meta: { requiresAuth: true }, component: () => import('pages/Setting.vue') },
      { path: 'detailbtn', meta: { requiresAuth: true }, component: () => import('pages/Detail.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
