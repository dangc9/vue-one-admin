import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
// import { store } from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/windicss/base.css';
import '@/assets/style/public.scss';
import '@/config/permission.js'
import './assets/icons' // icon
Vue.use(ElementUI);
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'production') {
  const mockXHR = require('../mock')
  mockXHR()
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
