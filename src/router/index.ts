import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeRoutes from './home';
import Login from '../views/login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [...routes, ...HomeRoutes],
});

export default router;
