import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import * as routers from './router/index.js'
import stores from './store'
import ElementUI from 'element-ui'
import assembly from './components/index.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router)//路由
Vue.use(ElementUI)//ui框架
Vue.use(Vuex)//全局变量
let arr = []
Object.keys(routers).forEach(item=>{//多个导航栏
  arr= [...arr,...routers[item]]
})
let router = new Router({routes:arr})
let store = new Vuex.Store(stores)
Object.keys(assembly).forEach(item=>{//自定义组件
  Vue.component(item,assembly[item])
})
Vue.config.productionTip = true//调试
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
