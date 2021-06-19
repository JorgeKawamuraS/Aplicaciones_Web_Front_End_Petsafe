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
    path: '/vets/:id',
    name: 'vet-profile',
    component: () => import('../components/vet-profile')
  },
  {
    path: '/veterinaries/:id',
    name: 'veterinary-profile',
    component: () =>import('../components/veterinary-profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/register')
  },
  {
    path: '/mis-mascotas',
    name: 'mis-mascotas',
    component: () => import('../components/mis-mascotas')
  },
  {
    path: '/owner/:id',
    name: 'owner',
    component: () => import('../components/owner-profile')
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
