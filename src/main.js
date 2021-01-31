import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import element from './element-ui/index.js'

Vue.config.productionTip = false
//用于消息总线
Vue.prototype.$bus = new Vue()

//用于防抖动
Vue.prototype.timer={timer:null}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
