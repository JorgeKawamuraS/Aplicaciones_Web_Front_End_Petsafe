import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../components/Home')
  },
  {
    path:'/profile',
    name: 'profile',
    component: () => import('../components/profiles/empty-profile')
  },
  {
    path: '/vets/:id',
    name: 'vet-profile',
    component: () => import('../components/profiles/vet-profile')
  },
  {
    path: '/veterinaries/:id',
    name: 'veterinary-profile',
    component: () =>import('../components/profiles/veterinary-profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login')
  },
  {
    path: '/pets/:id',
    name: 'pet',
    component: () => import('../components/profiles/pet-profile')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/register')
  },
  {
    path: '/mis-mascotas',
    name: 'mis-mascotas',
    component: () => import('../components/profiles/mis-mascotas')
  },
  {
    path: '/owner/:id',
    name: 'owner',
    component: () => import('../components/profiles/owner-profile')
  },
  {
    path: '/owner/:id/schedule',
    name: 'ownerSchedule',
    component: () => import('../components/schedule')
  },
  {
    path: '/vets/:id/schedule',
    name: 'vetSchedule',
    component: () => import('../components/schedule')
  },
  {
    path: '/chats',
    name: 'chats',
    component: () => import('../components/chats')
  },
  {
    path: '/owner/:id/reminders',
    name: 'reminders',
    component: () => import('../components/reminders')
  },
  {
    path: '/vets/:id/mailbox',
    name: 'mailbox',
    component: () => import('../components/mailbox')
  },
  {
    path: '/vets/:id/clients',
    name: 'my-clients',
    component: () => import('../components/my-clients')
  },
  {
    path: '/user-home',
    name: 'user-home',
    component: () => import('../components/user-home')
  },
  {
    path: '/vet-home',
    name: 'vet-home',
    component: () => import('../components/vet-home')
  },
  {
    path: '/vets/:id/requests',
    name: 'vet-request',
    component: () => import('../components/vet-request')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
