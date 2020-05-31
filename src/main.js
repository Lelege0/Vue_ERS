import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './assets/css/global.css'
import './plugins/element'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/font_hhpsvbcaow/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
