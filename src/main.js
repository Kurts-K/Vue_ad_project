import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'



Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAJXIEzdSUmChnJSsWJP-9fv4_VFT-yzMg",
      authDomain: "ad-project-d38f1.firebaseapp.com",
      databaseURL: "https://ad-project-d38f1.firebaseio.com",
      projectId: "ad-project-d38f1",
      storageBucket: "ad-project-d38f1.appspot.com",
      messagingSenderId: "329135162027"
    })

    fb.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }

}).$mount('#app')
