import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router)

const init = async () => {
  /* eslint-disable no-new */
  new Vue({
    store,
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
  })
}

init()
