import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'

fetch(process.env.BASE_URL + 'config.json').then(res => res.json()).then(config => {
    Vue.prototype.$config = config
    new Vue({
      render: (h) => h(App)
    }).$mount("#app")
})
/*
fetch(process.env.BASE_URL + "config.json")
.then((json) => {
  json().then((config) => {
    Vue.prototype.$config = config
    new Vue({
      render: (h) => h(App)
    }).$mount("#app")
  })
})
*/
 Vue.config.productionTip = false
/*
 new Vue({
  render: h => h(App),
 }).$mount('#app')
*/
