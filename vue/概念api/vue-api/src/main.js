// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
var name = 'yimu'
/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      name
    }
  }
})
vue.$watch('name', function (newValue, oldValue) {
  console.log(`新值为${newValue}`)
  console.log(`旧值为${oldValue}`)
})
console.log(vue.name = '一木')
console.dir(vue)
