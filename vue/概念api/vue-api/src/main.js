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
<<<<<<< HEAD
  console.log(`新值为${newValue}`)
  console.log(`旧值为${oldValue}`)
=======

  console.log(`新值为${newValue}`)
  console.log(`旧值为${oldValue}`)
  setTimeout(
    () => (vue.name = Math.random()),
    1000)

>>>>>>> 2fd07b08230737a06559f01c594e6c0b21131360
})
console.log(vue.name = '一木')
console.dir(vue)
