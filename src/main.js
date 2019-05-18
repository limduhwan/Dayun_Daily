import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false;

let config = {
  apiKey: "AIzaSyB8VFLF9QO0jVsdZGhwqAjDvYkUEfOnGSI\n",
  authDomain: "dayun-daily.firebaseapp.com",
  databaseURL: "https://dayun-daily.firebaseio.com",
  projectId: "dayun-daily",
  storageBucket: "dayun-daily.appspot.com",
  messagingSenderId: "dayun-daily"
};

firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
