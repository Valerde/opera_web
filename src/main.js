import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
import HttpFetch from '@/utils/fetch.js'
// 全局注册
Vue.use(VueCookies)
Vue.use(HttpFetch)
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的
Vue.config.productionTip = false

Vue.prototype.SERVER_API_URL = '/api'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
