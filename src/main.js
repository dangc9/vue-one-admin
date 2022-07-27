import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
// import store from './store'
import { store } from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/design/lib/windicss/base.css';
import '@/design/public.scss';
import '@/config/permission.js'
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
