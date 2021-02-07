import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
//加载文件的作用
import element from './element-ui/index.js'

Vue.config.productionTip = false
//用于消息总线
Vue.prototype.$bus = new Vue()

//用于防抖动
Vue.prototype.timer={timer:null}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
