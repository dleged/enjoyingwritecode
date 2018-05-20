import Vue from 'vue'
import Router from 'vue-router'
import VueRsource from 'vue-resource'
//组件
const HelloWorld = resolve => require(['../components/HelloWorld'], resolve)
const Von = resolve => require(['../components/v-'], resolve)


Vue.use(Router)
Vue.use(VueRsource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/v-',
      name: 'v-指令',
      component: Von
    }
  ]
})
