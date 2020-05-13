import { RouteConfig } from 'vue-router';

const Home = () => import('@/views/home.vue');
const About = () => import('@/views/about.vue');

const homeRoute: RouteConfig[] = [{
  path: '/home',
  name: 'home',
  component: Home,
},
{
  path: '/about',
  name: 'about',
  component: About,
}];

export default homeRoute;
