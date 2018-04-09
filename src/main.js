import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

import * as firebase from 'firebase'

import { store } from './store'

Vue.use(Vuetify)

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDx1GJakzT9PMx_m4qNadDlxREu0pEyIwM',
      authDomain: 'dev-meetup-8d8f7.firebaseapp.com',
      databaseURL: 'https://dev-meetup-8d8f7.firebaseio.com',
      projectId: 'dev-meetup-8d8f7',
      storageBucket: 'dev-meetup-8d8f7.appspot.com',
      messagingSenderId: '720787609071'
    })
  }
})
