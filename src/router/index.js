import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/front/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/front/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin 頁面',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '001產品頁面',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'Storages',
        name: '圖片頁面',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/backend/Coupons.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'storages',
        name: '圖片列表',
        component: () => import('../views/backend/Storages.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'Admin 管理頁面',
  //   component: () => ('../views/Admin/Dashboard.vue'),
  //   children: [
  //     {
  //       path: 'Orders',
  //       name: '訂單管理',
  //       component: () => ('../views/Admin/Orders.vue'),
  //     },
  //     {
  //       path: 'Products',
  //       name: '產品管理',
  //       component: () => ('../views/Admin/Products.vue'),
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
