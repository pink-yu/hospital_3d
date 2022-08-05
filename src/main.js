import Vue from 'vue'
import App from './App.vue'
import './permission' // 权限
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible'
import axios from 'axios'




Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI);


window.EventBus = new Vue()

let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
