import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//firebase
import firebase from "firebase";
import { firebaseConfig } from "./Config/firebaseConfig.js";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
