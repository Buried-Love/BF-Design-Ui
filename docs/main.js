import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import bfui from '../src/index'
import '../src/styles/componentStyle/index.scss'
import './assets/componentStyle/index.scss'
Vue.config.productionTip = false
Vue.use(bfui)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
