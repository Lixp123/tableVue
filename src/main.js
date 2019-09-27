import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import routers from './router'
import stores from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import assembly from './components/index.js'
Vue.use(Router)//路由
Vue.use(ElementUI)//ui框架
Vue.use(Vuex)//全局变量
Object.keys(assembly).forEach(item=>{//自定义组件
  Vue.component(item,assembly[item])
})
let router = new Router(routers)
let store = new Vuex.Store(stores)
Vue.config.productionTip = true//调试
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
