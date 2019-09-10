import Vue from "vue";
import App from "./App.vue";
import createStore from "./store/store";
import { GET_LIST } from './store/actions';

Vue.config.productionTip = false;

const store = createStore();
store.dispatch(GET_LIST);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
