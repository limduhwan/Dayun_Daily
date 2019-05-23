import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'
import {ClientTable} from 'vue-tables-2'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

Vue.use(ClientTable);
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

export default firebase;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
