import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default function createStore(initData = []) {
  return new Vuex.Store({
    state: {
      list: [...initData],
    },
    mutations,
    actions,
  });
}
