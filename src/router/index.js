import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jokes from '../views/jokes/Jokes.vue';
import JokeDetails from '../views/jokes/JokeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jokes',
    name: 'Jokes',
    component: Jokes
  },
  {
    path: '/jokes/:id',
    name: 'JokeDetails',
    component: JokeDetails,
    props: (router) => ({ ...router.params }),
  },
  // redirect /all-jokes to /jokes
  {
    path: '/all-jokes',
    redirect: '/jokes'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
