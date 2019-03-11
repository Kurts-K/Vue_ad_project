import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),

}).$mount('#app')
