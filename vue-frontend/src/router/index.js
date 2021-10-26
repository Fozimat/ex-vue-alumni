import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Event from '../views/Event.vue'
import Alumni from '../views/Alumni.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/alumni',
    name: 'Alumni',
    component: Alumni
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
