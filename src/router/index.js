import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))

const routes = [
  { path: '/', component: createListView('dashboard') },
  { path: '/clients', component: createListView('clients') },
  { path: '/account_request', component: createListView('account_request') },
  { path: '/account_pin', component: createListView('account_pin') }
]

const router = new Router({
  routes,
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history'
})

export default router
