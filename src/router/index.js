import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Details from '../views/Details.vue';
import Success from '../views/Success.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,

  },
  {
    path: '/success',
    name: 'Success',
    component: Success,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
