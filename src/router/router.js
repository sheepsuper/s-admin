import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/index', // 路由别名
    name: 'Home',
    component: Home,
    props: route => ({
      food: route.query.food
    })
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child/:id',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/name-view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '/components',
    component: () => import('@/views/components/split-pannel.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
