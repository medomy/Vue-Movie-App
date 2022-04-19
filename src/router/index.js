import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/movies'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviesView.vue')
  },
  {
    path: '/movies/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieDetails.vue')
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: () => import(/* webpackChunkName: "about" */ '../views/FavouritesView.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
