import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/choose-drone',
      name: 'choose-drone',
      props: { bpla_block: 1 },
      component: () => import('../views/ChoosDroneView.vue'),
    },
    {
      path: '/assembly',
      name: 'assembly',
      props: { bpla_block: 2 },
      component: () => import('../views/AssemblyView.vue'),
    },
    {
      path: '/routing',
      name: 'routing',
      props: { bpla_block: 3 },
      component: () => import('../views/RoutingView.vue'),
    },
    {
      path: '/data-parcing',
      name: 'data-parcing',
      props: { bpla_block: 4 },
      component: () => import('../views/DataParsingView.vue'),
    },
    {
      path: '/report',
      name: 'report',
      props: { bpla_block: 5 },
      component: () => import('../views/ReportView.vue'),
    },
  ],
})

router.afterEach((to, from) => {})

export default router
